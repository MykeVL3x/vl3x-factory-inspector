/**
 * category-tabs.js - Category and subtab rendering
 */

import { CATEGORIES, GUITAR_SUBS, VOCAL_SUBS } from './constants.js';
import { getState, setState } from './state.js';

/**
 * Render main category tabs
 * @param {HTMLElement} container - Container for tabs
 * @param {Function} onChange - Callback when category changes
 */
export function renderCategoryTabs(container, onChange) {
  const activeCategory = getState('activeCategory');

  let html = '';
  for (const [key, name] of Object.entries(CATEGORIES)) {
    const isActive = key === activeCategory;
    html += `<button class="tab-btn ${isActive ? 'active' : ''}" data-cat="${key}">${name}</button>`;
  }

  container.innerHTML = html;

  // Add click handlers
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.cat;
      setState('activeCategory', category);

      // Update active states
      container.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === category);
      });

      if (onChange) {
        onChange(category);
      }
    });
  });
}

/**
 * Render subtabs for Guitar or Vocal categories
 * @param {HTMLElement} container - Container for subtabs
 * @param {Function} onChange - Callback when subtab changes
 */
export function renderSubtabs(container, onChange) {
  const activeCategory = getState('activeCategory');

  // Only show subtabs for guitar_params and vocal_params
  if (activeCategory !== 'guitar_params' && activeCategory !== 'vocal_params') {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'flex';

  const subs = activeCategory === 'guitar_params' ? GUITAR_SUBS : VOCAL_SUBS;
  const activeSub = activeCategory === 'guitar_params'
    ? getState('activeGuitarSub')
    : getState('activeVocalSub');

  let html = '';
  for (const sub of subs) {
    const isActive = sub === activeSub;
    html += `<button class="subtab ${isActive ? 'active' : ''}" data-sub="${sub}">${sub}</button>`;
  }

  container.innerHTML = html;

  // Add click handlers
  container.querySelectorAll('.subtab').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.dataset.sub;

      if (activeCategory === 'guitar_params') {
        setState('activeGuitarSub', sub);
      } else {
        setState('activeVocalSub', sub);
      }

      // Update active states
      container.querySelectorAll('.subtab').forEach(b => {
        b.classList.toggle('active', b.dataset.sub === sub);
      });

      if (onChange) {
        onChange(sub);
      }
    });
  });
}

/**
 * Get current active subtab name
 * @returns {string} Active subtab name
 */
export function getActiveSubtab() {
  const category = getState('activeCategory');

  if (category === 'guitar_params') {
    return getState('activeGuitarSub');
  }
  if (category === 'vocal_params') {
    return getState('activeVocalSub');
  }

  return null;
}

/**
 * Update tab button active state
 * @param {HTMLElement} container - Container with tab buttons
 * @param {string} activeKey - Key of active tab
 * @param {string} dataAttr - Data attribute name (e.g., 'cat', 'sub')
 */
export function updateTabActiveState(container, activeKey, dataAttr) {
  container.querySelectorAll(`[data-${dataAttr}]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset[dataAttr] === activeKey);
  });
}
