/**
 * params-renderer.js - Parameter list rendering
 */

import { getState } from './state.js';
import { getDisplayValue } from './value-transforms.js';
import { parsePresetValues } from './data-loader.js';

/**
 * Get parameters filtered by category and subtab
 * @param {Object} data - Full data object
 * @param {string} category - Active category
 * @param {string} subtab - Active subtab (for guitar/vocal)
 * @returns {number[]} Array of parameter indices
 */
export function getFilteredParams(data, category, subtab) {
  const indices = [];

  for (let i = 0; i < data.labels.length; i++) {
    // Check for shared buttonmap params
    const isButtonmapShared = subtab === 'Buttonmap' &&
      category === 'guitar_params' &&
      data.vocal_subs &&
      data.vocal_subs[i] === 'Buttonmap';

    // Check category match
    const isGuitarMatch = category === 'guitar_params' &&
      data.guitar_subs &&
      data.guitar_subs[i] === subtab;

    const isVocalMatch = category === 'vocal_params' &&
      data.vocal_subs &&
      data.vocal_subs[i] === subtab;

    // Category check (non-guitar/vocal)
    const isCategoryMatch = data.categories[i] === category &&
      category !== 'guitar_params' &&
      category !== 'vocal_params';

    // Guitar subtab check
    if (category === 'guitar_params') {
      if (data.categories[i] !== category && !isButtonmapShared && !isGuitarMatch) {
        continue;
      }
      if (data.guitar_subs && data.guitar_subs[i] !== subtab && !isButtonmapShared) {
        continue;
      }
    }
    // Vocal subtab check
    else if (category === 'vocal_params') {
      if (data.categories[i] !== category && !isVocalMatch) {
        continue;
      }
      if (data.vocal_subs && data.vocal_subs[i] !== subtab) {
        continue;
      }
    }
    // Other categories
    else if (!isCategoryMatch) {
      continue;
    }

    indices.push(i);
  }

  return indices;
}

/**
 * Sort parameters by display order
 * @param {number[]} indices - Parameter indices
 * @param {Object} data - Data with display_order
 * @param {string} category - Active category
 * @param {string} subtab - Active subtab
 * @returns {number[]} Sorted indices
 */
export function sortParamsByDisplayOrder(indices, data, category, subtab) {
  if (!data.display_order) {
    return indices;
  }

  // Try Guitar.Subtab first, then just Subtab
  const orderKey = category === 'guitar_params' && data.display_order['Guitar.' + subtab]
    ? 'Guitar.' + subtab
    : subtab;

  const order = data.display_order[orderKey];

  if (!order) {
    return indices;
  }

  return [...indices].sort((a, b) => (order[a] ?? 999) - (order[b] ?? 999));
}

/**
 * Check if parameter should go in style header
 * @param {string} label - Parameter label
 * @param {string} displayValue - Display value
 * @param {string} category - Active category
 * @param {string} subtab - Active subtab
 * @returns {boolean} True if should be in header
 */
export function isStyleHeaderParam(label, displayValue, category, subtab) {
  const labelUpper = label.toUpperCase();
  const isTypeOrStyle = labelUpper.includes('TYPE') || labelUpper.includes('STYLE');
  const isGuitarOrVocal = category === 'guitar_params' || category === 'vocal_params';

  // Long enum values go in header (except HardTune)
  if (displayValue.length > 12 && subtab !== 'HardTune') {
    return true;
  }

  return isTypeOrStyle && isGuitarOrVocal;
}

/**
 * Render parameters for selected preset
 * @param {HTMLElement} container - Container for params
 * @param {Object} data - Full data object
 * @param {Object} preset - Selected preset
 * @param {string} category - Active category
 * @param {string} subtab - Active subtab
 * @returns {number} Count of rendered parameters
 */
export function renderParams(container, data, preset, category, subtab) {
  // Check if this is a Buttonmap view (top-level or subtab)
  const isButtonmapView = category === 'buttonmap' ||
    ((category === 'vocal_params' || category === 'guitar_params') && subtab === 'Buttonmap');

  if (isButtonmapView && preset) {
    const values = parsePresetValues(preset, data.labels.length);

    // Button labels and offsets
    const buttonLabels = ['uMOD', 'DELAY', 'REVERB', 'HIT', 'COMP', 'DRIVE'];
    const funcOffsets = [394, 395, 396, 397, 398, 399];
    const modeOffsets = [406, 407, 408, 409, 410, 411];

    // Build button data from preset values
    const buttons = buttonLabels.map((label, i) => ({
      label,
      func: getDisplayValue(funcOffsets[i], values[funcOffsets[i]], values, data),
      mode: getDisplayValue(modeOffsets[i], values[modeOffsets[i]], values, data)
    }));

    // Determine effect type: guitar (G prefix) = guitar-effect, else vocal-effect
    const getEffectClass = (func) => {
      if (func.startsWith('G ')) return 'guitar-effect';
      return 'vocal-effect';
    };

    // Render 3-column button grid with mode under each button
    const renderButtonGrid = (title) => {
      let html = `<div class="buttonmap-domain">
        <div class="domain-title">${title}</div>
        <div class="button-table">`;

      // Row 1-3: Buttons 1-3 (label, mapping, mode stacked)
      html += '<div class="button-row">';
      for (let i = 0; i < 3; i++) {
        const b = buttons[i];
        html += `<div class="button-cell">
          <div class="button-label">${b.label}</div>
          <div class="button-value ${getEffectClass(b.func)}">${b.func}</div>
          <div class="button-mode">${b.mode}</div>
        </div>`;
      }
      html += '</div>';

      // Separator between top and bottom rows
      html += '<div class="button-row-separator"></div>';

      // Row 4-6: Buttons 4-6 (label, mapping, mode stacked)
      html += '<div class="button-row">';
      for (let i = 3; i < 6; i++) {
        const b = buttons[i];
        html += `<div class="button-cell">
          <div class="button-label">${b.label}</div>
          <div class="button-value ${getEffectClass(b.func)}">${b.func}</div>
          <div class="button-mode">${b.mode}</div>
        </div>`;
      }
      html += '</div>';

      html += '</div></div>';
      return html;
    };

    let html = '';

    // Different title based on view
    const title = category === 'buttonmap' ? 'Button Assignments' :
      category === 'vocal_params' ? 'Vocal Button Assignments' : 'Guitar Button Assignments';

    html += '<div class="buttonmap-container">';
    html += renderButtonGrid(title);
    html += '</div>';

    // Add GLOBAL enable status for subtab views
    if (category === 'vocal_params' || category === 'guitar_params') {
      const globalOffset = category === 'vocal_params' ? 454 : 464;
      const globalVal = getDisplayValue(globalOffset, values[globalOffset], values, data);
      html += `<div class="param-item" style="margin-top: 1rem;">
        <span class="param-label">GLOBAL</span>
        <span class="param-value">${globalVal}</span>
      </div>`;
    }

    container.innerHTML = html;
    return 13;
  }

  if (!preset) {
    container.innerHTML = `<div class="empty-state">
      <div class="img-wrapper">
        <img src="VL3xImage.png" alt="VL3X Factory Inspector">
        <div class="img-overlay">
          <h3>No Preset Selected</h3>
          <p>Select a preset from the list to view its parameters</p>
        </div>
      </div>
    </div>`;
    return 0;
  }

  const values = parsePresetValues(preset, data.labels.length);
  let paramIndices = getFilteredParams(data, category, subtab);
  paramIndices = sortParamsByDisplayOrder(paramIndices, data, category, subtab);

  let styleHeader = '';
  let paramsHtml = '<div class="params-grid">';
  let count = 0;

  for (const i of paramIndices) {
    const val = values[i];
    const displayVal = getDisplayValue(i, val, values, data);
    const label = data.labels[i];

    // Check if should go in style header
    if (data.enum_refs && data.enum_refs[i] && isStyleHeaderParam(label, displayVal, category, subtab)) {
      const cleanLabel = label.replace(/^(Guitar |Vocal )/, '');
      styleHeader += `<span class="style-header-item">
        <span class="style-header-label">${cleanLabel}:</span>
        <span class="style-header-value">${displayVal}</span>
      </span>`;
      count++;
      continue;
    }

    // Determine value class for styling
    let valClass = 'param-value';
    const numDisplay = parseFloat(displayVal);
    if (numDisplay === 0 || displayVal === '0') {
      valClass += ' zero';
    } else if (numDisplay < 0) {
      valClass += ' negative';
    }

    paramsHtml += `<div class="param-item">
      <span class="param-label">${label}</span>
      <span class="${valClass}">${displayVal}</span>
    </div>`;
    count++;
  }

  paramsHtml += '</div>';

  // Combine style header and params
  let html = '';

  // Special info box for preset 490 (Blank template)
  if (preset.n === 490) {
    html += `<div class="preset-info-box">
      Preset 490 is the factory "Blank" preset and is consistently present after a factory reset, making it the standard starting template for initializing new presets via copy/paste.
    </div>`;
  }

  if (styleHeader) {
    html += '<div class="style-header">' + styleHeader + '</div>';
  }
  html += paramsHtml;

  if (count === 0) {
    html = '<div class="empty-state"><p>No parameters in this category</p></div>';
  }

  container.innerHTML = html;

  return count;
}

/**
 * Update stats bar with parameter count
 * @param {HTMLElement} statsEl - Stats element
 * @param {number} showing - Number of params showing
 */
export function updateStatsBar(statsEl, showing) {
  statsEl.textContent = `Total Presets: 259 | Total Parameters: 472 | Parameters Showing: ${showing}`;
}
