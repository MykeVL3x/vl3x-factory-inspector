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
    examplesLinkRow: document.getElementById('examplesLinkRow')
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

  const data = getState('data');
  const setupData = getState('setupData');
  const preset = getState('selectedPreset');

  // Helper to reset caution box to original state
  const resetCautionBox = () => {
    elements.cautionBox.className = 'caution-box';
    elements.cautionBox.innerHTML = CAUTION_CONTENT;
  };

  // Hide examples link for non-sysex views
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
    // SysEx Calculator view
    elements.categoryTabs.innerHTML = '';
    elements.subtabs.style.display = 'none';
    elements.cautionBox.style.display = 'block';
    elements.examplesLinkRow.style.display = 'block';
    elements.cautionBox.className = 'tips-box';
    elements.cautionBox.innerHTML = `
      <strong>PRO TIPS:</strong><br>
      • Use Mixer levels to create seamless mutes<br>
      • -61 dB = effectively OFF (no pop)<br>
      • 0 dB = full level<br>
      • Hit Control toggles work during performance<br>
      • System params affect global settings
    `;
    elements.presetTitle.textContent = 'SysEx Calculator';
    elements.presetInfo.textContent = 'Generate seamless parameter control messages';
    renderSysExView(elements.paramsContainer);
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
