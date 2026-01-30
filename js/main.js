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
    sysexNav: document.getElementById('sysexNav'),
    panelTitle: document.getElementById('panelTitle'),
    panelSubtitle: document.getElementById('panelSubtitle')
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

  // Show/hide search and preset list (visible for presets and effects views)
  const showPresetList = view === 'presets' || view === 'effects';
  elements.searchBox.style.display = showPresetList ? 'block' : 'none';
  elements.presetList.style.display = showPresetList ? 'block' : 'none';
  elements.sysexNav.style.display = view === 'sysex' ? 'block' : 'none';

  const data = getState('data');
  const setupData = getState('setupData');
  const preset = getState('selectedPreset');

  // Helper to reset caution box to original state
  const resetCautionBox = () => {
    elements.cautionBox.className = 'caution-box';
    elements.cautionBox.innerHTML = CAUTION_CONTENT;
  };

  // Update panel header based on view
  if (view === 'sysex') {
    elements.panelTitle.textContent = 'System Exclusive Msgs';
    elements.panelSubtitle.textContent = 'Control the VL3x differently!';
  } else {
    elements.panelTitle.textContent = 'VL3X Preset Inspector';
    elements.panelSubtitle.textContent = 'Inspect factory presets differently!';
  }

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
    elements.presetTitle.textContent = 'SysEx Control';
    elements.presetInfo.textContent = 'Build MIDI commands to control any VL3X parameter';
    elements.paramsContainer.innerHTML = `
      <div class="sysex-about">
        <div class="sysex-hero">
          <h3>Control all of the important parameters from your tablet, foot controller, or DAW</h3>
          <p>SysEx (system exclusive) messages reach parameters that regular MIDI cannot: reverb types, harmony styles, delay times, and everything else you might want to control LIVE.</p>
        </div>

        <div class="sysex-action-cards">
          <div class="sysex-action-card">
            <div class="sysex-card-icon">🔍</div>
            <h4>Inspect Presets</h4>
            <p>See what parameters are available in vocal and guitar presets and build your knowledge about what sounds good (or not so good).</p>
            <a href="#" class="card-link" onclick="document.getElementById('viewPresets').click(); return false;">Browse Presets →</a>
          </div>

          <div class="sysex-action-card">
            <div class="sysex-card-icon">⚡</div>
            <h4>Build SysEx Commands</h4>
            <p>Select a parameter, set a value, get the hex string. Then copy into your MIDI controller.</p>
            <a href="sysex-generator.html" class="card-link">Open Generator →</a>
          </div>

          <div class="sysex-action-card">
            <div class="sysex-card-icon">📋</div>
            <h4>Step-by-Step Workflows</h4>
            <p>Load presets via MIDI, enable editor mode, send parameter changes. Complete sequences with timing.</p>
            <a href="examples.html" class="card-link">View Examples →</a>
          </div>
        </div>

        <div class="sysex-use-cases">
          <h4>What you can do with SysEx</h4>
          <div class="use-case-grid">
            <div class="use-case-item">
              <span class="use-case-icon">→</span>
              <span class="use-case-text"><strong>Per-song automation:</strong> Each song in your setlist loads exact settings</span>
            </div>
            <div class="use-case-item">
              <span class="use-case-icon">→</span>
              <span class="use-case-text"><strong>Smooth transitions:</strong> Avoid audio glitches from the built-in Steps feature</span>
            </div>
            <div class="use-case-item">
              <span class="use-case-icon">→</span>
              <span class="use-case-text"><strong>Remote control:</strong> Change any parameter without touching the pedal</span>
            </div>
            <div class="use-case-item">
              <span class="use-case-icon">→</span>
              <span class="use-case-text"><strong>Hands-free operation:</strong> Sound changes happen while you keep playing</span>
            </div>
          </div>
        </div>
      </div>
    `;
    elements.statsLeft.textContent = '';

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
