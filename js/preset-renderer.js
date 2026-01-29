/**
 * preset-renderer.js - Preset list rendering and selection
 */

import { GLOBAL_PRESET_THRESHOLD } from './constants.js';
import { getState, setState } from './state.js';
import { filterPresets } from './data-loader.js';

/**
 * Render the preset list
 * @param {HTMLElement} container - Container element for preset list
 * @param {Object[]} presets - Array of preset objects
 * @param {string} filter - Optional search filter
 * @param {Function} onSelect - Callback when preset is selected
 */
export function renderPresetList(container, presets, filter = '', onSelect) {
  const filteredPresets = filterPresets(presets, filter);
  const selectedPreset = getState('selectedPreset');

  let html = '';

  for (const preset of filteredPresets) {
    const isGlobal = preset.n >= GLOBAL_PRESET_THRESHOLD;
    const isBlank = preset.n === 490;
    const isActive = selectedPreset && selectedPreset.n === preset.n;
    const displayName = preset.m;

    html += `<div class="preset-item ${isGlobal ? 'gbl' : ''} ${isBlank ? 'blank' : ''} ${isActive ? 'active' : ''}" data-num="${preset.n}">
      <span class="preset-num">${preset.n}</span>
      <span class="preset-name">${displayName}</span>
    </div>`;
  }

  if (!html) {
    html = '<div class="loading">No presets found</div>';
  }

  container.innerHTML = html;

  // Add click handlers
  container.querySelectorAll('.preset-item').forEach(item => {
    item.addEventListener('click', () => {
      const num = parseInt(item.dataset.num);
      if (onSelect) {
        onSelect(num);
      }
    });
  });
}

/**
 * Select a preset by number
 * @param {number} num - Preset number to select
 * @param {Object[]} presets - Array of all presets
 * @param {Function} onSelected - Callback after selection
 */
export function selectPreset(num, presets, onSelected) {
  const preset = presets.find(p => p.n === num);

  if (!preset) {
    return;
  }

  setState('selectedPreset', preset);

  // Update active states in DOM
  document.querySelectorAll('.preset-item').forEach(item => {
    item.classList.toggle('active', parseInt(item.dataset.num) === num);
  });

  if (onSelected) {
    onSelected(preset);
  }
}

/**
 * Update header with preset info
 * @param {HTMLElement} titleEl - Title element
 * @param {HTMLElement} infoEl - Info element
 * @param {Object|null} preset - Selected preset or null
 */
export function updatePresetHeader(titleEl, infoEl, preset) {
  if (!preset) {
    titleEl.textContent = 'Select a Preset';
    infoEl.textContent = 'Click a preset to view parameters';
    return;
  }

  const displayName = preset.m;
  titleEl.textContent = `${preset.n}:${displayName}`;

  const isGlobal = preset.n >= GLOBAL_PRESET_THRESHOLD;
  infoEl.textContent = isGlobal ? 'Factory GBL Preset' : 'Factory Preset';
}

/**
 * Check if preset is a global preset
 * @param {Object} preset - Preset object
 * @returns {boolean} True if global preset
 */
export function isGlobalPreset(preset) {
  return preset && preset.n >= GLOBAL_PRESET_THRESHOLD;
}

/**
 * Get display name for preset (removes H prefix)
 * @param {Object} preset - Preset object
 * @returns {string} Display name
 */
export function getPresetDisplayName(preset) {
  return preset.m;
}
