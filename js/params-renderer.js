/**
 * params-renderer.js - Parameter list rendering
 */

import { getState } from './state.js';
import { getDisplayValue } from './value-transforms.js';
import { parsePresetValues } from './data-loader.js';
import { getLayout, hasLayout } from './preset-layouts.js';

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
 * Render grid layout for parameters
 * @param {Object} layout - Layout definition with rows
 * @param {number[]} values - Preset values array
 * @param {Object} data - Full data object
 * @returns {string} HTML string for grid layout
 */
function renderGridLayout(layout, values, data) {
  let html = '<div class="grid-layout">';

  for (const row of layout.rows) {
    html += '<div class="grid-row">';
    for (const cell of row) {
      const val = values[cell.offset];
      const displayVal = getDisplayValue(cell.offset, val, values, data);

      let valClass = 'grid-value';
      const numDisplay = parseFloat(displayVal);
      if (numDisplay === 0 || displayVal === '0') {
        valClass += ' zero';
      } else if (numDisplay < 0) {
        valClass += ' negative';
      }

      html += `<div class="grid-cell">
        <span class="grid-label">${cell.label}</span>
        <span class="${valClass}">${displayVal}</span>
      </div>`;
    }
    html += '</div>';
  }

  html += '</div>';
  return html;
}

/**
 * Render Cross-Domain ButtonMap educational view
 * Static visual showing how cross-domain button assignments work
 * @returns {string} HTML string
 */
function renderCrossDomainButtonMap() {
  // ButtonMap button labels (same for both Vocal and Guitar)
  const buttonLabels = ['uMOD', 'DELAY', 'REVERB', 'HIT', 'DOUBLE/COMP', 'HARMONY/DRIVE'];

  // Vocal ButtonMap: 6 Vocal effects (all cyan - same domain)
  const vocalButtons = [
    { value: 'uMOD', mode: 'LATCHED' },
    { value: 'DELAY', mode: 'LATCHED' },
    { value: 'REVERB', mode: 'LATCHED' },
    { value: 'HIT', mode: 'MOMENTARY' },
    { value: 'DOUBLE', mode: 'LATCHED' },
    { value: 'HARMONY', mode: 'LATCHED' }
  ];

  // Guitar ButtonMap: 4 Vocal effects (cyan - cross-domain) + 2 Guitar effects (red - native)
  const guitarButtons = [
    { value: 'uMOD', mode: 'LATCHED', crossDomain: true },
    { value: 'DELAY', mode: 'LATCHED', crossDomain: true },
    { value: 'REVERB', mode: 'LATCHED', crossDomain: true },
    { value: 'HIT', mode: 'MOMENTARY', crossDomain: true },
    { value: 'G COMP', mode: 'LATCHED', crossDomain: false },
    { value: 'G DRIVE', mode: 'LATCHED', crossDomain: false }
  ];

  let html = `
    <div class="crossdomain-container">
      <div class="crossdomain-intro">
        <strong>Cross-Domain Button Assignments</strong>
        <p>Trigger Vocal effects while in Guitar mode (and vice versa) without switching layers.</p>
      </div>

      <div class="crossdomain-section">
        <h3 class="crossdomain-title vocal-title">Vocal ButtonMap</h3>
        <p class="crossdomain-subtitle">Standard same-domain assignments</p>
        <div class="buttonmap-grid">
          <div class="buttonmap-row">`;

  // Vocal buttons row 1 (buttons 1-3)
  for (let i = 0; i < 3; i++) {
    html += `
            <div class="buttonmap-cell">
              <span class="button-number">${buttonLabels[i]}</span>
              <span class="button-value vocal-effect">${vocalButtons[i].value}</span>
              <span class="button-mode">${vocalButtons[i].mode}</span>
            </div>`;
  }

  html += `
          </div>
          <div class="buttonmap-row">`;

  // Vocal buttons row 2 (buttons 4-6)
  for (let i = 3; i < 6; i++) {
    html += `
            <div class="buttonmap-cell">
              <span class="button-number">${buttonLabels[i]}</span>
              <span class="button-value vocal-effect">${vocalButtons[i].value}</span>
              <span class="button-mode">${vocalButtons[i].mode}</span>
            </div>`;
  }

  html += `
          </div>
        </div>
      </div>

      <div class="crossdomain-section">
        <h3 class="crossdomain-title guitar-title">Guitar ButtonMap</h3>
        <p class="crossdomain-subtitle">Cross-domain: Vocal effects on Guitar buttons</p>
        <div class="buttonmap-grid">
          <div class="buttonmap-row">`;

  // Guitar buttons row 1 (buttons 1-3)
  for (let i = 0; i < 3; i++) {
    const btn = guitarButtons[i];
    const colorClass = btn.crossDomain ? 'vocal-effect' : 'guitar-effect';
    html += `
            <div class="buttonmap-cell">
              <span class="button-number">${buttonLabels[i]}</span>
              <span class="button-value ${colorClass}">${btn.value}</span>
              <span class="button-mode">${btn.mode}</span>
            </div>`;
  }

  html += `
          </div>
          <div class="buttonmap-row">`;

  // Guitar buttons row 2 (buttons 4-6)
  for (let i = 3; i < 6; i++) {
    const btn = guitarButtons[i];
    const colorClass = btn.crossDomain ? 'vocal-effect' : 'guitar-effect';
    html += `
            <div class="buttonmap-cell">
              <span class="button-number">${buttonLabels[i]}</span>
              <span class="button-value ${colorClass}">${btn.value}</span>
              <span class="button-mode">${btn.mode}</span>
            </div>`;
  }

  html += `
          </div>
        </div>
      </div>

      <div class="crossdomain-legend">
        <span class="legend-item"><span class="legend-swatch vocal-effect"></span> Vocal Effect</span>
        <span class="legend-item"><span class="legend-swatch guitar-effect"></span> Guitar Effect</span>
      </div>

      <div class="crossdomain-note">
        <em>In Guitar mode, buttons 1-4 trigger Vocal effects without switching modes.</em>
      </div>
    </div>
  `;

  return html;
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
  // Cross-Domain ButtonMap view doesn't require a preset
  if (category === 'buttonmap') {
    container.innerHTML = renderCrossDomainButtonMap();
    return 12; // 6 + 6 buttons shown
  }

  if (!preset) {
    container.innerHTML = `<div class="empty-state">
      <p class="inspector-description">The VL3X Preset Inspector is a website that lets you browse every factory preset like flipping through a recipe app - you can see exactly what ingredients (effects, settings, button assignments) each preset uses. The main purpose is to provide a browsable way to look at the most important settings and setups the VL3X uses.</p>
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

  // Check for custom grid layout
  const layout = getLayout(category, subtab);
  if (layout) {
    const gridHtml = renderGridLayout(layout, values, data);
    container.innerHTML = gridHtml;
    let count = 0;
    for (const row of layout.rows) {
      count += row.length;
    }
    return count;
  }

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
  statsEl.textContent = `Total Factory Presets: 259 | Total Parameters: 472 | Parameters Showing: ${showing}`;
}
