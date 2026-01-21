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

  // Educational panel for ButtonMap category
  if (category === 'buttonmap') {
    html += `<div class="preset-info-box buttonmap-info">
      <strong>Cross-Domain Button Assignments</strong><br><br>
      You can trigger Vocal effects while in Guitar mode (and vice versa) by assigning effects across layers.<br><br>
      <strong>Example:</strong> While playing in Guitar mode, tap a button to trigger Vocal Harmony
      without switching layers. Or in Vocal mode, control Guitar Delay with a footswitch.<br><br>
      <em>Factory presets use same-layer assignments only. Cross-Domain values show 0 unless customized.</em>
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
