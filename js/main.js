/**
 * main.js - Entry point for VL3X Inspector
 * Wires up all modules and handles view management
 */

import { getState, setState, subscribe } from './state.js';
import { loadAllData } from './data-loader.js';
import { renderPresetList, selectPreset, updatePresetHeader } from './preset-renderer.js';
import { renderCategoryTabs, renderSubtabs, getActiveSubtab } from './category-tabs.js';
import { renderParams, updateStatsBar } from './params-renderer.js';
import { renderSetupView, updateSetupHeader, toggleSetupUI } from './setup-view.js';
import { renderEffectsGroupTabs, renderEffectsParams, updateEffectsHeader, toggleEffectsUI } from './effects-view.js';
import { renderSysExView } from './sysex-view.js';

// DOM element references
let elements = {};

// Original caution box content
const CAUTION_CONTENT = `
  <strong>CAUTION:</strong><br>
  If using VoiceSupport2 or VoiceLive Editor, keep MIDI settings:<br>
  - INPUT SOURCE=USB<br>
  - INPUT/OUTPUT Channels=1<br>
  - No INPUT/OUTPUT FILTERS<br>
  - SYSEX ID=0
`;

/**
 * Initialize the application
 */
export async function init() {
  // Cache DOM elements
  elements = {
    presetList: document.getElementById('presetList'),
    searchInput: document.getElementById('search'),
    searchBox: document.getElementById('searchBox'),
    presetTitle: document.getElementById('presetTitle'),
    presetInfo: document.getElementById('presetInfo'),
    categoryTabs: document.getElementById('categoryTabs'),
    subtabs: document.getElementById('guitarSubtabs'),
    paramsContainer: document.getElementById('paramsContainer'),
    statsLeft: document.getElementById('statsLeft'),
    viewPresets: document.getElementById('viewPresets'),
    viewSetup: document.getElementById('viewSetup'),
    viewEffects: document.getElementById('viewEffects'),
    viewSysEx: document.getElementById('viewSysEx'),
    cautionBox: document.getElementById('cautionBox'),
    sysexLinkRow: document.getElementById('sysexLinkRow'),
    examplesLinkRow: document.getElementById('examplesLinkRow'),
    sysexNav: document.getElementById('sysexNav')
  };

  // Load data
  try {
    const { data, setupData } = await loadAllData();
    setState({ data, setupData });

    // Initial render
    renderPresetList(elements.presetList, data.presets, '', handlePresetSelect);
    renderCategoryTabs(elements.categoryTabs, handleCategoryChange);
    renderSubtabs(elements.subtabs, handleSubtabChange);

  } catch (err) {
    elements.presetList.innerHTML = `<div class="loading">Error loading data: ${err.message}</div>`;
    console.error('Failed to load data:', err);
    return;
  }

  // Set up event listeners
  setupEventListeners();

  // Enable effects button when preset is selected
  subscribe((state, key) => {
    if (key === 'selectedPreset' && state.selectedPreset) {
      elements.viewEffects.disabled = false;
      elements.viewEffects.style.opacity = '1';
      elements.viewEffects.style.cursor = 'pointer';
    }
  });

  // Check URL hash for initial view
  const hash = window.location.hash.slice(1);
  if (hash === 'sysex') {
    setView('sysex');
  } else if (hash === 'setup') {
    setView('setup');
  }
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
  // Search input
  elements.searchInput.addEventListener('input', (e) => {
    const data = getState('data');
    if (data) {
      renderPresetList(elements.presetList, data.presets, e.target.value, handlePresetSelect);
    }
  });

  // View buttons
  elements.viewPresets.addEventListener('click', () => setView('presets'));
  elements.viewSetup.addEventListener('click', () => setView('setup'));
  elements.viewEffects.addEventListener('click', () => setView('effects'));
  elements.viewSysEx.addEventListener('click', () => setView('sysex'));
}

/**
 * Handle preset selection
 * @param {number} num - Preset number
 */
function handlePresetSelect(num) {
  const data = getState('data');
  selectPreset(num, data.presets, (preset) => {
    updatePresetHeader(elements.presetTitle, elements.presetInfo, preset);
    refreshParams();
  });
}

/**
 * Handle category tab change
 * @param {string} category - New category
 */
function handleCategoryChange(category) {
  renderSubtabs(elements.subtabs, handleSubtabChange);
  refreshParams();
}

/**
 * Handle subtab change
 * @param {string} subtab - New subtab
 */
function handleSubtabChange(subtab) {
  refreshParams();
}

/**
 * Refresh parameters display
 */
function refreshParams() {
  const data = getState('data');
  const preset = getState('selectedPreset');
  const category = getState('activeCategory');
  const subtab = getActiveSubtab();
  const view = getState('currentView');

  if (view === 'effects') {
    const count = renderEffectsParams(elements.paramsContainer, data, preset);
    updateStatsBar(elements.statsLeft, count);
  } else {
    const count = renderParams(elements.paramsContainer, data, preset, category, subtab);
    updateStatsBar(elements.statsLeft, count);
  }
}

/**
 * Set the current view
 * @param {string} view - 'presets' | 'setup' | 'effects' | 'sysex'
 */
function setView(view) {
  setState('currentView', view);

  // Update view button states
  elements.viewPresets.classList.toggle('active', view === 'presets');
  elements.viewSetup.classList.toggle('active', view === 'setup');
  elements.viewEffects.classList.toggle('active', view === 'effects');
  elements.viewSysEx.classList.toggle('active', view === 'sysex');

  // Show/hide search and preset list
  elements.searchBox.style.display = view === 'presets' ? 'block' : 'none';
  elements.presetList.style.display = view === 'presets' ? 'block' : 'none';
  elements.sysexNav.style.display = view === 'sysex' ? 'block' : 'none';

  const data = getState('data');
  const setupData = getState('setupData');
  const preset = getState('selectedPreset');

  // Helper to reset caution box to original state
  const resetCautionBox = () => {
    elements.cautionBox.className = 'caution-box';
    elements.cautionBox.innerHTML = CAUTION_CONTENT;
  };

  // Hide sysex links for non-sysex views
  elements.sysexLinkRow.style.display = 'none';
  elements.examplesLinkRow.style.display = 'none';

  if (view === 'setup') {
    resetCautionBox();
    toggleSetupUI(elements, true);
    updateSetupHeader(elements.presetTitle, elements.presetInfo);
    const count = renderSetupView(elements.paramsContainer, setupData);
    updateStatsBar(elements.statsLeft, count);

  } else if (view === 'effects') {
    resetCautionBox();
    toggleEffectsUI(elements, true);
    updateEffectsHeader(elements.presetTitle, elements.presetInfo);
    renderEffectsGroupTabs(elements.categoryTabs, () => {
      const count = renderEffectsParams(elements.paramsContainer, data, preset);
      updateStatsBar(elements.statsLeft, count);
    });
    const count = renderEffectsParams(elements.paramsContainer, data, preset);
    updateStatsBar(elements.statsLeft, count);

  } else if (view === 'sysex') {
    // SysEx About view
    elements.categoryTabs.innerHTML = '';
    elements.subtabs.style.display = 'none';
    elements.cautionBox.style.display = 'none';
    elements.sysexLinkRow.style.display = 'block';
    elements.examplesLinkRow.style.display = 'block';
    elements.presetTitle.textContent = 'What is SysEx?';
    elements.presetInfo.textContent = 'System Exclusive MIDI messages for advanced control';
    elements.paramsContainer.innerHTML = `
      <div class="sysex-about">
        <p>SysEx (System Exclusive) is a type of MIDI message that lets you control parameters that regular MIDI can't reach. While standard MIDI gives you Program Change (to switch presets) and Control Change (for things like volume), SysEx opens the door to everything else.</p>

        <p>On the VL3X, that means all 472 parameters: reverb types, delay times, harmony styles, amp models, EQ settings, button assignments, and more. If you can adjust it on the pedal, you can control it via SysEx.</p>

        <div class="info-box" style="background: var(--card-bg); border: 1px solid var(--border); border-left: 4px solid var(--accent); padding: 1rem 1.25rem; border-radius: 0 6px 6px 0; margin: 1.5rem 0;">
          <h4 style="color: var(--accent); margin: 0 0 0.5rem 0;">The SysEx Generator</h4>
          <p style="margin: 0;">The SysEx Generator takes the guesswork out of building these messages. Select a parameter, choose a value, and it outputs the exact hex string you need. Copy it into onSong, your MC-8, or any MIDI-capable controller.</p>
        </div>

        <h3 style="margin-top: 1.5rem;">Why use SysEx with the VL3X?</h3>
        <ul class="benefit-list" style="list-style: none; padding: 0;">
          <li style="padding: 0.75rem 0; padding-left: 1.5rem; position: relative; border-bottom: 1px solid var(--border);"><span style="position: absolute; left: 0; color: var(--accent);">→</span><strong>Remote control:</strong> Change any parameter from your iPad, foot controller, or DAW without touching the pedal</li>
          <li style="padding: 0.75rem 0; padding-left: 1.5rem; position: relative; border-bottom: 1px solid var(--border);"><span style="position: absolute; left: 0; color: var(--accent);">→</span><strong>Per-song automation:</strong> Build setlists where each song loads the exact settings you need</li>
          <li style="padding: 0.75rem 0; padding-left: 1.5rem; position: relative; border-bottom: 1px solid var(--border);"><span style="position: absolute; left: 0; color: var(--accent);">→</span><strong>Smooth transitions:</strong> Avoid the audio glitch that comes with the built-in Steps feature</li>
          <li style="padding: 0.75rem 0; padding-left: 1.5rem; position: relative;"><span style="position: absolute; left: 0; color: var(--accent);">→</span><strong>Hands-free operation:</strong> Keep playing while your sound changes happen automatically</li>
        </ul>

        <div class="info-box" style="background: var(--card-bg); border: 1px solid var(--border); border-left: 4px solid var(--accent); padding: 1rem 1.25rem; border-radius: 0 6px 6px 0; margin: 1.5rem 0;">
          <h4 style="color: var(--accent); margin: 0 0 0.5rem 0;">Ready to build SysEx messages?</h4>
          <p style="margin: 0;">Click <a href="sysex-generator.html" style="color: var(--accent);">SysEx Generator</a> in the left panel to start creating commands for your VL3X.</p>
        </div>
      </div>
    `;
    elements.statsLeft.textContent = 'Preset Params: 472 | System Params: 149';

  } else {
    // Presets view
    resetCautionBox();
    elements.cautionBox.style.display = 'none';
    renderCategoryTabs(elements.categoryTabs, handleCategoryChange);
    renderSubtabs(elements.subtabs, handleSubtabChange);

    if (preset) {
      updatePresetHeader(elements.presetTitle, elements.presetInfo, preset);
      refreshParams();
    } else {
      updatePresetHeader(elements.presetTitle, elements.presetInfo, null);
      elements.paramsContainer.innerHTML = `<div class="empty-state">
        <div class="img-wrapper">
          <img src="vl3x-social-preview_2.png" alt="VL3X Factory Inspector">
          <div class="img-overlay">
            <h3>No Preset Selected</h3>
            <p>Select a preset from the list to view its parameters</p>
          </div>
        </div>
      </div>`;
    }
  }
}

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
