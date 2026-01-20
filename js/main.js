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

// DOM element references
let elements = {};

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
    cautionBox: document.getElementById('cautionBox')
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
 * @param {string} view - 'presets' | 'setup' | 'effects'
 */
function setView(view) {
  setState('currentView', view);

  // Update view button states
  elements.viewPresets.classList.toggle('active', view === 'presets');
  elements.viewSetup.classList.toggle('active', view === 'setup');
  elements.viewEffects.classList.toggle('active', view === 'effects');

  // Show/hide search and preset list
  elements.searchBox.style.display = view === 'presets' ? 'block' : 'none';
  elements.presetList.style.display = view === 'presets' ? 'block' : 'none';

  const data = getState('data');
  const setupData = getState('setupData');
  const preset = getState('selectedPreset');

  if (view === 'setup') {
    toggleSetupUI(elements, true);
    updateSetupHeader(elements.presetTitle, elements.presetInfo);
    const count = renderSetupView(elements.paramsContainer, setupData);
    updateStatsBar(elements.statsLeft, count);

  } else if (view === 'effects') {
    toggleEffectsUI(elements, true);
    updateEffectsHeader(elements.presetTitle, elements.presetInfo);
    renderEffectsGroupTabs(elements.categoryTabs, () => {
      const count = renderEffectsParams(elements.paramsContainer, data, preset);
      updateStatsBar(elements.statsLeft, count);
    });
    const count = renderEffectsParams(elements.paramsContainer, data, preset);
    updateStatsBar(elements.statsLeft, count);

  } else {
    // Presets view
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
          <img src="vl3xImage.png" alt="VL3X Factory Inspector">
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
