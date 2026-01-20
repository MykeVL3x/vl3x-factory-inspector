/**
 * setup-view.js - Setup configuration view
 */

import { SETUP_CATEGORIES } from './constants.js';

/**
 * Render setup view with all configuration categories
 * @param {HTMLElement} container - Container for setup params
 * @param {Object} setupData - Setup data object
 * @returns {number} Total parameters rendered
 */
export function renderSetupView(container, setupData) {
  if (!setupData) {
    container.innerHTML = '<div class="loading">Setup data not available</div>';
    return 0;
  }

  let html = '';
  let totalParams = 0;

  for (const [catKey, catName] of Object.entries(SETUP_CATEGORIES)) {
    const params = setupData[catKey];

    if (!params || params.length === 0) {
      continue;
    }

    totalParams += params.length;

    html += `<div class="setup-category">
      <h3>${catName}</h3>
      <div class="params-grid">`;

    for (const param of params) {
      let valClass = 'param-value';
      if (param.v === 0) {
        valClass += ' zero';
      } else if (param.v < 0) {
        valClass += ' negative';
      }

      const displayValue = param.d + (param.u ? ' ' + param.u : '');

      html += `<div class="param-item">
        <span class="param-label">${param.l}</span>
        <span class="${valClass}">${displayValue}</span>
      </div>`;
    }

    html += '</div></div>';
  }

  container.innerHTML = html;

  return totalParams;
}

/**
 * Update header for setup view
 * @param {HTMLElement} titleEl - Title element
 * @param {HTMLElement} infoEl - Info element
 */
export function updateSetupHeader(titleEl, infoEl) {
  titleEl.textContent = 'Setup Configuration';
  infoEl.textContent = 'Global settings (not per-preset)';
}

/**
 * Show/hide setup-specific UI elements
 * @param {Object} elements - Object with DOM elements
 * @param {boolean} show - Whether showing setup view
 */
export function toggleSetupUI(elements, show) {
  if (elements.categoryTabs) {
    elements.categoryTabs.innerHTML = '';
  }
  if (elements.subtabs) {
    elements.subtabs.style.display = 'none';
  }
  if (elements.cautionBox) {
    elements.cautionBox.style.display = show ? 'block' : 'none';
  }
}
