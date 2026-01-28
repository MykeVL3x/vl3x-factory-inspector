/**
 * effects-view.js - Effects grouped view
 */

import { EFFECTS_GROUPS } from './constants.js';
import { getState, setState } from './state.js';
import { getDisplayValue } from './value-transforms.js';
import { parsePresetValues } from './data-loader.js';

/**
 * Render effects group tabs
 * @param {HTMLElement} container - Container for tabs
 * @param {Function} onChange - Callback when group changes
 */
export function renderEffectsGroupTabs(container, onChange) {
  const activeGroup = getState('activeEffectGroup');

  let html = '';
  for (const group of Object.keys(EFFECTS_GROUPS)) {
    const isActive = group === activeGroup;
    html += `<button class="tab-btn ${isActive ? 'active' : ''}" data-group="${group}">${group}</button>`;
  }

  container.innerHTML = html;

  // Add click handlers
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      setState('activeEffectGroup', group);

      // Update active states
      container.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.group === group);
      });

      if (onChange) {
        onChange(group);
      }
    });
  });
}

/**
 * Render effects parameters for current group
 * @param {HTMLElement} container - Container for params
 * @param {Object} data - Full data object
 * @param {Object} preset - Selected preset (or null)
 * @returns {number} Count of parameters rendered
 */
export function renderEffectsParams(container, data, preset) {
  if (!data) {
    container.innerHTML = '<div class="loading">Data not loaded</div>';
    return 0;
  }

  const activeGroup = getState('activeEffectGroup');
  const subs = EFFECTS_GROUPS[activeGroup];

  const values = preset ? parsePresetValues(preset, data.labels.length) : null;

  let html = '<div class="params-grid">';
  let count = 0;

  for (let i = 0; i < data.labels.length; i++) {
    const isVocal = data.categories[i] === 'vocal_params';
    const isGuitar = data.categories[i] === 'guitar_params';

    if (!isVocal && !isGuitar) {
      continue;
    }

    const sub = isVocal ? data.vocal_subs[i] : data.guitar_subs[i];

    if (!subs.includes(sub)) {
      continue;
    }

    const prefix = isVocal ? 'v.' : 'g.';
    const val = values ? values[i] : null;
    const displayVal = values ? getDisplayValue(i, val, values, data) : '-';

    let valClass = 'param-value';
    if (val === 0) {
      valClass += ' zero';
    } else if (val !== null && val < 0) {
      valClass += ' negative';
    }

    // Clean up label
    const cleanLabel = data.labels[i].replace(/^(Guitar |Vocal |Voice)/, '');

    html += `<div class="param-item">
      <span class="param-label">${prefix}${sub}-${cleanLabel}</span>
      <span class="${valClass}">${displayVal}</span>
    </div>`;

    count++;
  }

  html += '</div>';

  if (count === 0) {
    html = '<div class="empty-state"><p>No parameters in this group</p></div>';
  }

  container.innerHTML = html;

  return count;
}

/**
 * Update header for effects view
 * @param {HTMLElement} titleEl - Title element
 * @param {HTMLElement} infoEl - Info element
 */
export function updateEffectsHeader(titleEl, infoEl) {
  titleEl.textContent = 'Effects View';
  infoEl.textContent = 'Parameters grouped by effect type';
}

/**
 * Show/hide effects-specific UI elements
 * @param {Object} elements - Object with DOM elements
 * @param {boolean} show - Whether showing effects view
 */
export function toggleEffectsUI(elements, show) {
  if (elements.subtabs) {
    elements.subtabs.style.display = 'none';
  }
}
