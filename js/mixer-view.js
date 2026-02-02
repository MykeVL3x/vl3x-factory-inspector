/**
 * mixer-view.js - VL3X Mixer Desk View
 * Interactive mixing console with real-time SysEx generation
 *
 * 40 parameters across 6 channel strips:
 * - Harmony (10): 6 levels + 4 pans
 * - Double (10): 6 levels + 4 pans
 * - Vocal FX (7): 4 levels + 3 widths
 * - Guitar FX (6): 3 levels + 3 widths
 * - Sends (3): 3 lead sends
 * - Master (4): 2 levels + 2 trim
 */

import { getState } from './state.js';
import {
  formatSysEx,
  getCurrentFormat,
  setCurrentFormat
} from './sysex-formatter.js';

// ============================================================================
// Mixer Parameter Definitions
// ============================================================================

/**
 * Mixer channel definitions with sysex_id mappings
 * sysex_ids range: 849-932 (pages 6-7)
 */
const MIXER_CHANNELS = {
  harmony: {
    label: 'Harmony',
    color: '#ff6b9d',
    levels: [
      { name: 'LEAD', offset: 336, sysex_id: 852, min: -61, max: 0 },
      { name: 'V1', offset: 340, sysex_id: 867, min: -61, max: 0 },
      { name: 'V2', offset: 342, sysex_id: 868, min: -61, max: 0 },
      { name: 'V3', offset: 344, sysex_id: 869, min: -61, max: 0 },
      { name: 'V4', offset: 346, sysex_id: 870, min: -61, max: 0 },
      { name: 'ALL', offset: 358, sysex_id: 885, min: -61, max: 0 }
    ],
    pans: [
      { name: 'V1', offset: 341, sysex_id: 871, min: -100, max: 100 },
      { name: 'V2', offset: 343, sysex_id: 872, min: -100, max: 100 },
      { name: 'V3', offset: 345, sysex_id: 873, min: -100, max: 100 },
      { name: 'V4', offset: 347, sysex_id: 874, min: -100, max: 100 }
    ]
  },
  double: {
    label: 'Double',
    color: '#ffa64d',
    levels: [
      { name: 'LEAD', offset: 337, sysex_id: 853, min: -61, max: 0 },
      { name: 'V1', offset: 348, sysex_id: 875, min: -61, max: 0 },
      { name: 'V2', offset: 350, sysex_id: 876, min: -61, max: 0 },
      { name: 'V3', offset: 352, sysex_id: 877, min: -61, max: 0 },
      { name: 'V4', offset: 354, sysex_id: 878, min: -61, max: 0 },
      { name: 'ALL', offset: 357, sysex_id: 884, min: -61, max: 0 }
    ],
    pans: [
      { name: 'V1', offset: 349, sysex_id: 879, min: -100, max: 100 },
      { name: 'V2', offset: 351, sysex_id: 880, min: -100, max: 100 },
      { name: 'V3', offset: 353, sysex_id: 881, min: -100, max: 100 },
      { name: 'V4', offset: 355, sysex_id: 882, min: -100, max: 100 }
    ]
  },
  vocalFx: {
    label: 'Vocal FX',
    color: '#4dffb8',
    levels: [
      { name: 'uMOD', offset: 373, sysex_id: 901, min: -61, max: 0 },
      { name: 'DLY', offset: 375, sysex_id: 903, min: -61, max: 0 },
      { name: 'REV', offset: 377, sysex_id: 905, min: -61, max: 0 },
      { name: 'SYNTH', offset: 356, sysex_id: 883, min: -61, max: 0 }
    ],
    widths: [
      { name: 'uMOD', offset: 374, sysex_id: 902, min: 0, max: 100 },
      { name: 'DLY', offset: 376, sysex_id: 904, min: 0, max: 100 },
      { name: 'REV', offset: 378, sysex_id: 906, min: 0, max: 100 }
    ]
  },
  guitarFx: {
    label: 'Guitar FX',
    color: '#ff4d4d',
    levels: [
      { name: 'uMOD', offset: 379, sysex_id: 907, min: -61, max: 0 },
      { name: 'DLY', offset: 382, sysex_id: 909, min: -61, max: 0 },
      { name: 'REV', offset: 384, sysex_id: 911, min: -61, max: 0 }
    ],
    widths: [
      { name: 'uMOD', offset: 380, sysex_id: 908, min: 0, max: 100 },
      { name: 'DLY', offset: 383, sysex_id: 910, min: 0, max: 100 },
      { name: 'REV', offset: 385, sysex_id: 912, min: 0, max: 100 }
    ]
  },
  sends: {
    label: 'Sends',
    color: '#b84dff',
    levels: [
      { name: 'uMOD', offset: 333, sysex_id: 849, min: -61, max: 0 },
      { name: 'DLY', offset: 334, sysex_id: 850, min: -61, max: 0 },
      { name: 'REV', offset: 335, sysex_id: 851, min: -61, max: 0 }
    ]
  },
  master: {
    label: 'Master',
    color: '#ffff4d',
    levels: [
      { name: 'LEAD', offset: 338, sysex_id: 854, min: -61, max: 0 }
    ],
    pans: [
      { name: 'LEAD', offset: 339, sysex_id: 866, min: -100, max: 100 }
    ],
    trims: [
      { name: 'VOC', offset: 386, sysex_id: 931, min: -12, max: 12 },
      { name: 'GTR', offset: 387, sysex_id: 932, min: -12, max: 12 }
    ]
  }
};

// Current mixer state
let mixerState = {};
let touchedParams = new Set();  // Track parameters changed by user
let sysexOutput = [];

// ============================================================================
// Initialization
// ============================================================================

/**
 * Initialize mixer state with default values
 */
function initMixerState() {
  mixerState = {};
  touchedParams.clear();
  Object.entries(MIXER_CHANNELS).forEach(([channelKey, channel]) => {
    ['levels', 'pans', 'widths', 'trims'].forEach(type => {
      if (channel[type]) {
        channel[type].forEach(param => {
          // Default to middle of range
          const defaultVal = type === 'pans' ? 0 :
                            type === 'widths' ? 50 :
                            type === 'trims' ? 0 : -12;
          mixerState[param.sysex_id] = defaultVal;
        });
      }
    });
  });
}

/**
 * Find parameter info by sysex_id
 */
function findParamBySysexId(sysexId) {
  for (const [channelKey, channel] of Object.entries(MIXER_CHANNELS)) {
    for (const type of ['levels', 'pans', 'widths', 'trims']) {
      if (channel[type]) {
        const param = channel[type].find(p => p.sysex_id === sysexId);
        if (param) {
          return { param, channel, channelKey, type };
        }
      }
    }
  }
  return null;
}

/**
 * Get default value for a parameter type
 */
function getDefaultValue(type) {
  switch (type) {
    case 'pans': return 0;
    case 'widths': return 50;
    case 'trims': return 0;
    case 'levels': return -12;
    default: return 0;
  }
}

/**
 * Remove a parameter from touched list and reset its value
 */
function removeFromTouched(sysexId, container) {
  touchedParams.delete(sysexId);

  // Find param info to get default value
  const info = findParamBySysexId(sysexId);
  if (info) {
    const defaultVal = getDefaultValue(info.type);
    mixerState[sysexId] = defaultVal;

    // Reset visual state of control
    resetControlVisual(container, sysexId, info, defaultVal);
  }
}

/**
 * Reset a control's visual state to match its value
 */
function resetControlVisual(container, sysexId, info, value) {
  const { param, type } = info;
  const min = param.min;
  const max = param.max;
  const range = max - min;

  // Find the control element
  const fader = container.querySelector(`.mixer-fader[data-sysex-id="${sysexId}"]`);
  const knob = container.querySelector(`.mixer-knob[data-sysex-id="${sysexId}"]`);

  if (fader) {
    // Reset fader
    const percent = ((value - min) / range) * 100;
    fader.querySelector('.fader-fill').style.height = `${percent}%`;
    fader.querySelector('.fader-knob').style.bottom = `calc(${percent}% - 5px)`;
    fader.querySelector('.fader-value').textContent = value;
  }

  if (knob) {
    // Reset knob
    const normalized = (value - min) / range;
    const rotation = (normalized - 0.5) * 270;
    knob.querySelector('.knob-dial').style.setProperty('--rotation', `${rotation}deg`);

    // Format display value for pan
    let displayValue = value;
    if (type === 'pans') {
      displayValue = value === 0 ? 'C' : value < 0 ? `L${Math.abs(value)}` : `R${value}`;
    }
    knob.querySelector('.knob-value').textContent = displayValue;
  }
}

/**
 * Clear all touched parameters and reset their visuals
 */
function clearAllTouched(container) {
  // Reset all touched controls before clearing
  for (const sysexId of touchedParams) {
    const info = findParamBySysexId(sysexId);
    if (info) {
      const defaultVal = getDefaultValue(info.type);
      mixerState[sysexId] = defaultVal;
      if (container) {
        resetControlVisual(container, sysexId, info, defaultVal);
      }
    }
  }
  touchedParams.clear();
}

/**
 * Load values from a preset into mixer state
 * @param {Object} preset - Preset data with params array
 */
export function loadPresetIntoMixer(preset) {
  if (!preset || !preset.params) return;

  Object.entries(MIXER_CHANNELS).forEach(([channelKey, channel]) => {
    ['levels', 'pans', 'widths', 'trims'].forEach(type => {
      if (channel[type]) {
        channel[type].forEach(param => {
          const presetParam = preset.params.find(p => p.offset === param.offset);
          if (presetParam) {
            mixerState[param.sysex_id] = presetParam.value;
          }
        });
      }
    });
  });
}

// ============================================================================
// SysEx Generation
// ============================================================================

// Editor Enable SysEx bytes
const EDITOR_ENABLE_BYTES = [0xF0, 0x00, 0x01, 0x38, 0x00, 0x6D, 0x15, 0x00, 0xF7];

/**
 * Generate SysEx bytes for a parameter change
 * @param {number} sysexId - The sysex_id
 * @param {number} value - The new value
 * @returns {number[]} Array of bytes
 */
function generateSysExBytes(sysexId, value) {
  const page = sysexId >> 7;
  const param = sysexId & 0x7F;

  // Encode value as 4 bytes (7-bit safe, MSB first)
  const v0 = (value >> 21) & 0x7F;
  const v1 = (value >> 14) & 0x7F;
  const v2 = (value >> 7) & 0x7F;
  const v3 = value & 0x7F;

  return [0xF0, 0x00, 0x01, 0x38, 0x00, 0x6D, 0x22, page, param, v0, v1, v2, v3, 0xF7];
}

/**
 * Generate formatted SysEx string for a parameter change
 * @param {number} sysexId - The sysex_id
 * @param {number} value - The new value
 * @returns {string} Formatted SysEx string
 */
function generateSysEx(sysexId, value) {
  const bytes = generateSysExBytes(sysexId, value);
  return formatSysEx(bytes);
}

// Timing: 1ms between messages for proper sequencing
const INTERVAL_MS = 1;

/**
 * Update SysEx output panel with touched parameter values only
 * Handles timing for ST4 and WAIT delays for onSong
 */
function updateSysExOutput() {
  sysexOutput = [];
  let messageIndex = 0;

  const format = getCurrentFormat();

  // Add editor enable first (always shown if there are touched params)
  const editorEnableOptions = format === 'stagetraxx'
    ? { timeMs: messageIndex * INTERVAL_MS }
    : {};
  sysexOutput.push({
    type: 'header',
    sysexId: null,
    bytes: EDITOR_ENABLE_BYTES,
    text: formatSysEx(EDITOR_ENABLE_BYTES, format, editorEnableOptions),
    label: 'Editor Enable',
    displayValue: 'Required before parameter changes'
  });
  messageIndex++;

  // Generate SysEx only for touched parameters
  Object.entries(MIXER_CHANNELS).forEach(([channelKey, channel]) => {
    ['levels', 'pans', 'widths', 'trims'].forEach(type => {
      if (channel[type]) {
        channel[type].forEach(param => {
          if (touchedParams.has(param.sysex_id)) {
            const value = mixerState[param.sysex_id] ?? 0;
            const bytes = generateSysExBytes(param.sysex_id, value);
            const options = format === 'stagetraxx'
              ? { timeMs: messageIndex * INTERVAL_MS }
              : {};

            // Format display value
            let displayValue = `${value}`;
            if (type === 'pans') {
              displayValue = value === 0 ? 'Center' : value < 0 ? `Left ${Math.abs(value)}` : `Right ${value}`;
            } else if (type === 'levels') {
              displayValue = `${value} dB`;
            } else if (type === 'widths') {
              displayValue = `${value}%`;
            } else if (type === 'trims') {
              displayValue = `${value} dB`;
            }

            sysexOutput.push({
              type: 'data',
              sysexId: param.sysex_id,
              bytes: bytes,
              text: formatSysEx(bytes, format, options),
              label: `${channel.label} ${param.name} ${type.slice(0,-1)}`,
              displayValue: displayValue
            });
            messageIndex++;
          }
        });
      }
    });
  });
}

// ============================================================================
// Rendering
// ============================================================================

/**
 * Render a fader control
 */
function renderFader(param, channelColor, type) {
  const value = mixerState[param.sysex_id] ?? 0;
  const range = param.max - param.min;
  const percent = ((value - param.min) / range) * 100;

  return `
    <div class="mixer-fader" data-sysex-id="${param.sysex_id}" data-min="${param.min}" data-max="${param.max}">
      <div class="fader-track" style="--channel-color: ${channelColor}">
        <div class="fader-fill" style="height: ${percent}%"></div>
        <div class="fader-knob" style="bottom: calc(${percent}% - 5px)"></div>
      </div>
      <div class="fader-value">${value}</div>
      <div class="fader-name">${param.name}</div>
    </div>
  `;
}

/**
 * Render a knob control
 */
function renderKnob(param, channelColor, type) {
  const value = mixerState[param.sysex_id] ?? 0;
  const range = param.max - param.min;
  const normalized = (value - param.min) / range;
  const rotation = (normalized - 0.5) * 270; // -135 to +135 degrees

  let displayValue = value;
  if (type === 'pans') {
    displayValue = value === 0 ? 'C' : value < 0 ? `L${Math.abs(value)}` : `R${value}`;
  }

  return `
    <div class="mixer-knob" data-sysex-id="${param.sysex_id}" data-min="${param.min}" data-max="${param.max}">
      <div class="knob-dial" style="--rotation: ${rotation}deg; --channel-color: ${channelColor}"></div>
      <div class="knob-value">${displayValue}</div>
      <div class="knob-name">${param.name}</div>
    </div>
  `;
}

/**
 * Render a channel strip
 */
function renderChannelStrip(channelKey, channel) {
  const { label, color, levels, pans, widths, trims } = channel;

  let html = `
    <div class="mixer-channel" data-channel="${channelKey}">
      <div class="channel-label" style="color: ${color}">${label}</div>
  `;

  // Levels section - split into two rows if more than 3 faders
  if (levels && levels.length > 0) {
    html += `<div class="section-label">Levels</div>`;

    if (levels.length > 3) {
      // Split into two rows
      const midpoint = Math.ceil(levels.length / 2);
      const row1 = levels.slice(0, midpoint);
      const row2 = levels.slice(midpoint);
      html += `
        <div class="controls-row">
          ${row1.map(p => renderFader(p, color, 'levels')).join('')}
        </div>
        <div class="controls-row">
          ${row2.map(p => renderFader(p, color, 'levels')).join('')}
        </div>
      `;
    } else {
      html += `
        <div class="controls-row">
          ${levels.map(p => renderFader(p, color, 'levels')).join('')}
        </div>
      `;
    }
  }

  // Divider before second section
  if ((pans && pans.length > 0) || (widths && widths.length > 0) || (trims && trims.length > 0)) {
    html += '<div class="section-divider"></div>';
  }

  // Pans section
  if (pans && pans.length > 0) {
    html += `
      <div class="section-label">Pan</div>
      <div class="controls-row">
        ${pans.map(p => renderKnob(p, color, 'pans')).join('')}
      </div>
    `;
  }

  // Widths section
  if (widths && widths.length > 0) {
    html += `
      <div class="section-label">Width</div>
      <div class="controls-row">
        ${widths.map(p => renderKnob(p, color, 'widths')).join('')}
      </div>
    `;
  }

  // Trims section
  if (trims && trims.length > 0) {
    html += `
      <div class="section-label">Preset Trim</div>
      <div class="controls-row">
        ${trims.map(p => renderFader(p, color, 'trims')).join('')}
      </div>
    `;
  }

  // Parameter count
  const paramCount = (levels?.length || 0) + (pans?.length || 0) + (widths?.length || 0) + (trims?.length || 0);
  html += `<div class="param-count">${paramCount} params</div>`;

  html += '</div>';
  return html;
}

/**
 * Render format pills (text only, matching sysex-view.js design)
 */
function renderFormatPills() {
  const formats = [
    { id: 'raw', label: 'Raw' },
    { id: 'onsong', label: 'onSong' },
    { id: 'compressed', label: 'MC-8' },
    { id: 'stagetraxx', label: 'Stage Traxx 4' }
  ];
  const current = getCurrentFormat();

  return formats.map(fmt => `
    <button class="format-pill ${fmt.id === current ? 'active' : ''}" data-format="${fmt.id}">
      ${fmt.label}
    </button>
  `).join('');
}

/**
 * Render compact format instructions
 */
function renderFormatInstructionsCompact() {
  const format = getCurrentFormat();
  switch (format) {
    case 'onsong':
      return `<strong>onSong:</strong> Add each line separately via the MIDI Events screen, pressing + for each entry. First line (Editor Enable) is required before any parameter changes.`;
    case 'stagetraxx':
      return `<strong>Stage Traxx 4:</strong> Copy lines into your cue list. Timing is embedded in each line. First line (Editor Enable) is required before any parameter changes. See <a href="https://stagetraxx.com/user-guide/midi/" target="_blank">ST4 MIDI Guide</a>`;
    case 'compressed':
      return `<strong>MC-8:</strong> Paste hex string into SysEx field (no spaces). First line (Editor Enable) is required before any parameter changes.`;
    case 'raw':
    default:
      return `<strong>Raw:</strong> Space-separated hex bytes. Copy and use as-is with many MIDI tools. First line (Editor Enable) is required before any parameter changes.`;
  }
}

/**
 * Get Editor Enable hint text based on format
 */
function getEditorEnableHint(format = getCurrentFormat()) {
  switch (format) {
    case 'onsong':
    case 'stagetraxx':
      return '';
    case 'compressed':
    case 'raw':
    default:
      return '// Automatically included!';
  }
}

/**
 * Render SysEx output panel with remove buttons and hover tips
 */
function renderSysExPanel() {
  updateSysExOutput();

  // Check if we have any touched parameters
  const hasTouchedParams = touchedParams.size > 0;
  const format = getCurrentFormat();

  let linesHtml;
  if (!hasTouchedParams) {
    // Empty state
    linesHtml = `
      <div class="sysex-empty-state">
        Adjust any fader or knob to generate SysEx commands.<br>
        Hover over a line to see details. Click × to remove.
      </div>
    `;
  } else {
    // Render lines with remove buttons (skip header - it's shown separately)
    linesHtml = sysexOutput.filter(item => item.type !== 'header').map(item => {
      const tooltip = `${item.label} = ${item.displayValue}`;
      return `<div class="sysex-line-row" data-sysex-id="${item.sysexId}">
        <button class="sysex-remove-btn" data-sysex-id="${item.sysexId}" title="Remove this line">×</button>
        <span class="sysex-line sysex-data" data-tooltip="${tooltip}">${item.text}</span>
      </div>`;
    }).join('');
  }

  return `
    <div class="mixer-sysex-panel">
      <div class="output-title">SysEx Output</div>
      <div class="format-pills" id="formatSelector">
        ${renderFormatPills()}
      </div>
      <div class="output-instructions" id="formatInstructions">${renderFormatInstructionsCompact()}</div>
      <div class="editor-enable-line" id="editorEnableLine" title="Editor Enable command">
        <span class="sysex-bytes" id="editorEnableBytes">${formatSysEx(EDITOR_ENABLE_BYTES, format)}</span>
        <span class="sysex-comment" id="editorEnableHint">${getEditorEnableHint()}</span>
      </div>
      <div class="sysex-output-box" id="mixerSysexOutput">
        ${linesHtml}
        <div class="sysex-actions">
          <button class="sysex-action-btn" id="mixerClear">Clear</button>
          <button class="sysex-action-btn primary" id="mixerCopyAll"${hasTouchedParams ? '' : ' disabled'}>Copy All</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Main render function for mixer view
 * @param {HTMLElement} container - The params container element
 * @returns {number} Parameter count for stats bar
 */
export function renderMixerView(container) {
  initMixerState();

  // Load preset values if one is selected
  const preset = getState('selectedPreset');
  if (preset) {
    loadPresetIntoMixer(preset);
  }

  const channelOrder = ['harmony', 'double', 'vocalFx', 'guitarFx', 'sends', 'master'];

  container.innerHTML = `
    <div class="mixer-desk">
      <div class="mixer-console">
        ${channelOrder.map(key => renderChannelStrip(key, MIXER_CHANNELS[key])).join('')}
        ${renderSysExPanel()}
      </div>
    </div>
  `;

  // Set up event listeners
  setupMixerInteraction(container);

  return 40;
}

// ============================================================================
// Interaction Handling
// ============================================================================

/**
 * Set up drag interaction for faders and knobs
 */
function setupMixerInteraction(container) {
  // Fader drag
  container.querySelectorAll('.mixer-fader').forEach(fader => {
    const track = fader.querySelector('.fader-track');
    let isDragging = false;

    const updateFader = (e) => {
      if (!isDragging) return;

      const rect = track.getBoundingClientRect();
      const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));

      const min = parseInt(fader.dataset.min);
      const max = parseInt(fader.dataset.max);
      const value = Math.round(min + y * (max - min));
      const sysexId = parseInt(fader.dataset.sysexId);

      mixerState[sysexId] = value;
      touchedParams.add(sysexId);  // Mark as touched

      // Update visual
      const percent = y * 100;
      fader.querySelector('.fader-fill').style.height = `${percent}%`;
      fader.querySelector('.fader-knob').style.bottom = `calc(${percent}% - 5px)`;
      fader.querySelector('.fader-value').textContent = value;

      // Update SysEx panel
      updateSysExDisplay(container);
    };

    track.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateFader(e);
    });

    document.addEventListener('mousemove', updateFader);
    document.addEventListener('mouseup', () => isDragging = false);
  });

  // Knob drag
  container.querySelectorAll('.mixer-knob').forEach(knob => {
    const dial = knob.querySelector('.knob-dial');
    let isDragging = false;
    let startY = 0;
    let startValue = 0;

    const updateKnob = (e) => {
      if (!isDragging) return;

      const deltaY = startY - e.clientY;
      const min = parseInt(knob.dataset.min);
      const max = parseInt(knob.dataset.max);
      const range = max - min;
      const sensitivity = range / 100; // 100px for full range

      let value = Math.round(startValue + deltaY * sensitivity);
      value = Math.max(min, Math.min(max, value));

      const sysexId = parseInt(knob.dataset.sysexId);
      mixerState[sysexId] = value;
      touchedParams.add(sysexId);  // Mark as touched

      // Update visual
      const normalized = (value - min) / range;
      const rotation = (normalized - 0.5) * 270;
      dial.style.setProperty('--rotation', `${rotation}deg`);

      // Format display value
      let displayValue = value;
      if (min === -100 && max === 100) {
        displayValue = value === 0 ? 'C' : value < 0 ? `L${Math.abs(value)}` : `R${value}`;
      }
      knob.querySelector('.knob-value').textContent = displayValue;

      // Update SysEx panel
      updateSysExDisplay(container);
    };

    dial.addEventListener('mousedown', (e) => {
      isDragging = true;
      startY = e.clientY;
      startValue = mixerState[parseInt(knob.dataset.sysexId)] ?? 0;
    });

    document.addEventListener('mousemove', updateKnob);
    document.addEventListener('mouseup', () => isDragging = false);
  });

  // Set up action buttons
  setupActionButtons(container);

  // Remove button clicks (event delegation)
  const sysexOutputEl = container.querySelector('#mixerSysexOutput');
  if (sysexOutputEl) {
    sysexOutputEl.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.sysex-remove-btn');
      if (removeBtn) {
        const sysexId = parseInt(removeBtn.dataset.sysexId);
        removeFromTouched(sysexId, container);
        updateSysExDisplay(container);
      }
    });
  }

  // Format pills
  const formatSelector = container.querySelector('#formatSelector');
  if (formatSelector) {
    formatSelector.addEventListener('click', (e) => {
      const pill = e.target.closest('.format-pill');
      if (pill) {
        const formatId = pill.dataset.format;
        setCurrentFormat(formatId);

        // Update active state
        formatSelector.querySelectorAll('.format-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Update display
        updateSysExDisplay(container);
      }
    });
  }
}

/**
 * Set up Copy and Clear button listeners
 */
function setupActionButtons(container) {
  // Copy button
  const copyBtn = container.querySelector('#mixerCopyAll');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      updateSysExOutput();
      const text = sysexOutput.map(item => item.text).join('\n');
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy All', 1500);
      });
    });
  }

  // Clear button
  const clearBtn = container.querySelector('#mixerClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearAllTouched(container);
      updateSysExDisplay(container);
    });
  }
}

/**
 * Update SysEx display without full re-render
 */
function updateSysExDisplay(container) {
  updateSysExOutput();
  const format = getCurrentFormat();
  const hasTouchedParams = touchedParams.size > 0;

  // Update editor enable line
  const editorEnableBytes = container.querySelector('#editorEnableBytes');
  if (editorEnableBytes) {
    editorEnableBytes.textContent = formatSysEx(EDITOR_ENABLE_BYTES, format);
  }
  const editorEnableHint = container.querySelector('#editorEnableHint');
  if (editorEnableHint) {
    editorEnableHint.textContent = getEditorEnableHint(format);
  }

  // Update instructions
  const instructionsEl = container.querySelector('#formatInstructions');
  if (instructionsEl) {
    instructionsEl.innerHTML = renderFormatInstructionsCompact();
  }

  // Update output lines
  const sysexOutputEl = container.querySelector('#mixerSysexOutput');
  if (sysexOutputEl) {
    let linesHtml;
    if (!hasTouchedParams) {
      // Empty state
      linesHtml = `
        <div class="sysex-empty-state">
          Adjust any fader or knob to generate SysEx commands.<br>
          Hover over a line to see details. Click × to remove.
        </div>
      `;
    } else {
      // Render lines with remove buttons (skip header - it's shown separately)
      linesHtml = sysexOutput.filter(item => item.type !== 'header').map(item => {
        const tooltip = `${item.label} = ${item.displayValue}`;
        return `<div class="sysex-line-row" data-sysex-id="${item.sysexId}">
          <button class="sysex-remove-btn" data-sysex-id="${item.sysexId}" title="Remove this line">×</button>
          <span class="sysex-line sysex-data" data-tooltip="${tooltip}">${item.text}</span>
        </div>`;
      }).join('');
    }

    // Preserve action buttons
    sysexOutputEl.innerHTML = linesHtml + `
      <div class="sysex-actions">
        <button class="sysex-action-btn" id="mixerClear">Clear</button>
        <button class="sysex-action-btn primary" id="mixerCopyAll"${hasTouchedParams ? '' : ' disabled'}>Copy All</button>
      </div>
    `;

    // Re-attach button listeners
    setupActionButtons(container);
  }
}

// ============================================================================
// View Toggle Helpers
// ============================================================================

/**
 * Update header for mixer view
 */
export function updateMixerHeader(titleEl, infoEl) {
  titleEl.textContent = 'Mixing Desk';
  infoEl.textContent = 'Control levels, pans, and widths across all channels and generate SysEx to update the VL3X live';
}

/**
 * Toggle mixer-specific UI elements
 */
export function toggleMixerUI(elements, show) {
  elements.categoryTabs.innerHTML = '';
  elements.subtabs.style.display = 'none';
  elements.cautionBox.style.display = 'none';
}
