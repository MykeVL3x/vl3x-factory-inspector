/**
 * sysex-view.js - Full-Width Stacking SysEx Generator for VL3X
 * Complete redesign with category tabs, subcategory pills, parameter grid,
 * and stacking SysEx output.
 */

import { getState } from './state.js';
import { makeSysEx, makeSysExForSystem, parseSysEx, formatSysEx as formatSysExLegacy } from './sysex-calculator.js?v=20260201b';
import { VL3X_PARAMS, ENUMS, getCategories, getSubcategories, getParameters, findParamByOffset, getEnumValues } from './sysex-params.js';
import {
  formatSysEx,
  getCurrentFormat,
  setCurrentFormat,
  renderFormatSelector,
  setupFormatSelector,
  renderFormatInstructions
} from './sysex-formatter.js';

// ============================================================================
// State Management
// ============================================================================

let currentCategory = 'Guitar';
let currentSubcategory = 'Amp';
let sysexOutput = [];  // Stacking array of SysEx entries
let parameterValues = {};  // Track current parameter values

// Editor Enable SysEx bytes
const EDITOR_ENABLE_BYTES = [0xF0, 0x00, 0x01, 0x38, 0x00, 0x6D, 0x15, 0x00, 0xF7];

// ============================================================================
// Core Functions
// ============================================================================

/**
 * Generate SysEx bytes for a parameter change using offset
 * @param {number} offset - The parameter offset
 * @param {number} value - The new value
 * @param {boolean} isSystem - True for Setup category (uses SYSTEM_OFFSET_TO_SYSEX_ID)
 * @returns {number[]} Array of bytes
 */
function generateSysExBytes(offset, value, isSystem = false) {
  // Setup uses SYSTEM_OFFSET_TO_SYSEX_ID, Guitar/Vocal use OFFSET_TO_SYSEX_ID
  const sysexStr = isSystem
    ? makeSysExForSystem(offset, value)
    : makeSysEx(offset, value);

  // Check for error
  if (sysexStr.startsWith('ERROR:')) {
    return null;
  }

  // Parse hex string back to bytes
  return sysexStr.split(' ').map(h => parseInt(h, 16));
}

/**
 * Add a parameter change to the stacking SysEx output
 * @returns {boolean} True if SysEx was generated, false if no mapping exists
 */
function addToSysExOutput(param, value, displayValue) {
  // Setup uses SYSTEM_OFFSET_TO_SYSEX_ID (43 mappings), Guitar/Vocal use OFFSET_TO_SYSEX_ID
  const isSystem = currentCategory === 'Setup';
  const bytes = generateSysExBytes(param.offset, value, isSystem);
  if (!bytes) {
    console.warn(`No sysex_id mapping for offset ${param.offset}`);
    return false;
  }

  const format = getCurrentFormat();
  const entry = {
    offset: param.offset,
    name: param.name,
    category: currentCategory,
    value: value,
    displayValue: displayValue,
    bytes: bytes,
    text: formatSysEx(bytes, format)
  };

  // Check if this parameter is already in the output
  const existingIndex = sysexOutput.findIndex(e => e.offset === param.offset);
  if (existingIndex >= 0) {
    // Update existing entry
    sysexOutput[existingIndex] = entry;
  } else {
    // Add new entry
    sysexOutput.push(entry);
  }

  // Track the value
  parameterValues[param.offset] = value;
  return true;
}

/**
 * Reformat all SysEx output entries with current format
 */
function reformatOutput() {
  const format = getCurrentFormat();
  sysexOutput.forEach(entry => {
    entry.text = formatSysEx(entry.bytes, format);
  });
}

/**
 * Clear all output
 */
function clearOutput() {
  sysexOutput = [];
  parameterValues = {};
}

/**
 * Remove a single entry from the output by offset
 * @param {number} offset - The parameter offset to remove
 */
function removeFromSysExOutput(offset) {
  const index = sysexOutput.findIndex(e => e.offset === offset);
  if (index >= 0) {
    sysexOutput.splice(index, 1);
    delete parameterValues[offset];
  }
}

// ============================================================================
// Rendering Functions
// ============================================================================

/**
 * Render the full-width SysEx Generator view
 * @param {HTMLElement} container - The container element
 */
export function renderSysExView(container) {
  // Reset state on view load
  sysexOutput = [];
  parameterValues = {};

  // Initialize with first category and subcategory
  const categories = getCategories();
  currentCategory = categories[0] || 'Guitar';
  const subcategories = getSubcategories(currentCategory);
  currentSubcategory = subcategories[0] || 'Amp';

  container.innerHTML = `
    <div class="sysex-generator-fullwidth">

      <div class="generator-content">
        <div class="generator-left">
          <div class="category-tabs-section">
            ${renderCategoryTabs()}
          </div>

          <div class="subcategory-pills-section">
            ${renderSubcategoryPills()}
          </div>

          <div class="parameter-section">
            <div class="parameter-grid" id="parameterGrid">
              ${renderParameterGrid()}
            </div>
          </div>
        </div>

        <div class="generator-right">
          <div class="sysex-output-section">
            <div class="sysex-output-title">SysEx Output</div>
            ${renderFormatSelector()}
            <div id="formatInstructions">${renderFormatInstructions()}</div>
            <div class="sysex-output-block" id="sysexOutputBlock">
              ${renderSysExOutput()}
            </div>
            <div class="sysex-output-actions">
              <button class="sysex-action-btn" id="clearOutput">Clear</button>
              <button class="sysex-action-btn primary" id="copyAll"${sysexOutput.length === 0 ? ' disabled' : ''}>Copy All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupEventListeners(container);
}

/**
 * Render category tabs (Guitar | Vocal | Setup)
 */
function renderCategoryTabs() {
  const categories = getCategories();

  return `
    <div class="category-tabs-bar">
      ${categories.map(cat => `
        <button class="category-tab ${cat === currentCategory ? 'active' : ''}"
                data-category="${cat}">
          ${cat.toUpperCase()}
        </button>
      `).join('')}
    </div>
  `;
}

/**
 * Render subcategory pills with param count
 */
function renderSubcategoryPills() {
  const subcategories = getSubcategories(currentCategory);
  const params = getParameters(currentCategory, currentSubcategory);

  return `
    <div class="subcategory-row">
      <div class="subcategory-pills">
        ${subcategories.map(sub => `
          <button class="subcategory-pill ${sub === currentSubcategory ? 'active' : ''}"
                  data-subcategory="${sub}">
            ${sub}
          </button>
        `).join('')}
      </div>
      <span class="param-count" id="paramCount">${params.length} params</span>
    </div>
  `;
}

/**
 * Render parameter grid for current subcategory
 */
function renderParameterGrid() {
  const params = getParameters(currentCategory, currentSubcategory);

  if (!params || params.length === 0) {
    return '<div class="empty-params">No parameters available</div>';
  }

  return params.map(param => renderParameter(param)).join('');
}

/**
 * Render a single parameter control
 */
function renderParameter(param) {
  const hasEnum = param.enum && ENUMS[param.enum];
  const currentValue = parameterValues[param.offset] ?? param.min;
  const valueCount = param.max - param.min + 1;

  // Use dropdown for enums with 5 or fewer values, slider otherwise
  if (hasEnum && valueCount <= 5) {
    return renderEnumParameter(param, currentValue);
  } else {
    return renderSliderParameter(param, currentValue);
  }
}

/**
 * Render an enum parameter as a dropdown
 */
function renderEnumParameter(param, currentValue) {
  const enumValues = getEnumValues(param.enum);

  return `
    <div class="param-control param-enum" data-offset="${param.offset}">
      <label class="param-label">${param.name}</label>
      <select class="param-select" data-offset="${param.offset}"
              data-min="${param.min}" data-max="${param.max}"
              data-name="${param.name}" data-unit="${param.unit || ''}">
        ${enumValues.slice(param.min, param.max + 1).map((val, idx) => {
          const actualIdx = param.min + idx;
          return `<option value="${actualIdx}" ${actualIdx === currentValue ? 'selected' : ''}>
            ${val || actualIdx}
          </option>`;
        }).join('')}
      </select>
    </div>
  `;
}

/**
 * Render a slider parameter
 */
function renderSliderParameter(param, currentValue) {
  const unit = param.unit || '';
  const hasEnum = param.enum && ENUMS[param.enum];
  const enumValues = hasEnum ? getEnumValues(param.enum) : null;

  // For enum sliders, show the label; for numeric, show the value
  const displayValue = hasEnum && enumValues[currentValue]
    ? enumValues[currentValue]
    : currentValue;

  return `
    <div class="param-control param-slider-control" data-offset="${param.offset}" ${hasEnum ? `data-enum="${param.enum}"` : ''}>
      <div class="param-control-header">
        <label class="param-label">${param.name}</label>
        <span class="param-value-display">
          ${hasEnum ? `
            <span class="param-enum-label" data-offset="${param.offset}">${displayValue}</span>
          ` : `
            <input type="number" class="param-value-input"
                   value="${currentValue}"
                   min="${param.min}" max="${param.max}"
                   data-offset="${param.offset}"
                   data-name="${param.name}"
                   data-unit="${unit}">
            <span class="param-unit">${unit}</span>
          `}
        </span>
      </div>
      <div class="param-slider-wrapper">
        <input type="range" class="param-slider"
               min="${param.min}" max="${param.max}" value="${currentValue}"
               data-offset="${param.offset}"
               data-name="${param.name}"
               data-unit="${unit}"
               ${hasEnum ? `data-enum="${param.enum}"` : ''}>
        <div class="param-range-labels">
          <span>${param.min}</span>
          <span>${param.max}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render the stacking SysEx output
 */
function renderSysExOutput() {
  if (sysexOutput.length === 0) {
    return `
      <div class="sysex-empty-state">
        <p class="sysex-panel-info">This tool is not connected to your VL3X and has no knowledge of your current settings. Adjust any parameter to generate SysEx commands.<br><br>Hover over a line to see its details or click the red × to remove it. Use Clear to start over.</p>
      </div>
    `;
  }

  const format = getCurrentFormat();
  let lines = [];

  // Editor Enable first
  lines.push(`<div class="sysex-line-row">
    <span class="sysex-line sysex-header" data-tooltip="Editor Enable - required before parameter changes">${formatSysEx(EDITOR_ENABLE_BYTES, format)}</span>
  </div>`);

  // Parameter changes - color coded by category
  sysexOutput.forEach(entry => {
    const categoryClass = `sysex-cat-${(entry.category || 'guitar').toLowerCase()}`;
    lines.push(`<div class="sysex-line-row" data-offset="${entry.offset}">
      <button class="sysex-remove-btn" data-offset="${entry.offset}" title="Remove this line">×</button>
      <span class="sysex-line sysex-param ${categoryClass}" data-tooltip="${entry.name} = ${entry.displayValue}">${entry.text}</span>
    </div>`);
  });

  return lines.join('\n');
}

// ============================================================================
// Event Handling
// ============================================================================

/**
 * Set up event listeners
 */
function setupEventListeners(container) {
  // Category tab clicks
  container.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.dataset.category;
      const subcategories = getSubcategories(currentCategory);
      currentSubcategory = subcategories[0] || '';

      // Update tabs
      container.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Re-render subcategory pills and parameter grid
      const pillsSection = container.querySelector('.subcategory-pills-section');
      pillsSection.innerHTML = renderSubcategoryPills();
      setupSubcategoryListeners(container);

      updateParameterGrid(container);
    });
  });

  setupSubcategoryListeners(container);
  setupParameterListeners(container);
  setupOutputListeners(container);

  // Format selector
  setupFormatSelector(container, (formatId) => {
    reformatOutput();
    updateSysExDisplay(container);
    updateCopyAllButton(container, formatId);

    const instructionsEl = container.querySelector('#formatInstructions');
    if (instructionsEl) {
      instructionsEl.innerHTML = renderFormatInstructions(formatId);
    }
  });

  // Set initial Copy All button state
  updateCopyAllButton(container, getCurrentFormat());
}

/**
 * Update Copy All button state based on format and output
 * Disabled for onSong (each line must be added separately) or when no output
 */
function updateCopyAllButton(container, formatId) {
  const copyBtn = container.querySelector('#copyAll');
  if (copyBtn) {
    const isOnSong = formatId === 'onsong';
    const isEmpty = sysexOutput.length === 0;
    const isDisabled = isOnSong || isEmpty;

    copyBtn.disabled = isDisabled;

    if (isEmpty) {
      copyBtn.title = 'No SysEx commands to copy';
    } else if (isOnSong) {
      copyBtn.title = 'Copy All disabled for onSong - add each line separately';
    } else {
      copyBtn.title = 'Copy all SysEx commands';
    }
  }
}

/**
 * Set up subcategory pill listeners
 */
function setupSubcategoryListeners(container) {
  container.querySelectorAll('.subcategory-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentSubcategory = pill.dataset.subcategory;

      // Update pills
      container.querySelectorAll('.subcategory-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Update param count
      const params = getParameters(currentCategory, currentSubcategory);
      const countEl = container.querySelector('#paramCount');
      if (countEl) {
        countEl.textContent = `${params.length} params`;
      }

      updateParameterGrid(container);
    });
  });
}

/**
 * Set up parameter control listeners
 */
function setupParameterListeners(container) {
  // Slider input
  container.querySelectorAll('.param-slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const offset = parseInt(slider.dataset.offset);
      const value = parseInt(slider.value);
      const name = slider.dataset.name;
      const unit = slider.dataset.unit || '';
      const enumName = slider.dataset.enum;

      // Update corresponding value input or enum label
      const valueInput = container.querySelector(`.param-value-input[data-offset="${offset}"]`);
      if (valueInput) {
        valueInput.value = value;
      }

      // Update enum label if this is an enum slider
      const enumLabel = container.querySelector(`.param-enum-label[data-offset="${offset}"]`);
      if (enumLabel && enumName) {
        const enumValues = getEnumValues(enumName);
        enumLabel.textContent = enumValues[value] || value;
      }

      // Find param info
      const param = findParamInfo(offset);
      if (param) {
        // For enum sliders, show the enum label as display value
        let displayValue = `${value}${unit}`;
        if (enumName) {
          const enumValues = getEnumValues(enumName);
          displayValue = enumValues[value] || value;
        }
        const success = addToSysExOutput(param, value, displayValue);
        if (!success) {
          showNoMappingWarning(container, param.name);
        }
        updateSysExDisplay(container);
      }
    });
  });

  // Value input
  container.querySelectorAll('.param-value-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const offset = parseInt(input.dataset.offset);
      let value = parseInt(input.value);
      const name = input.dataset.name;
      const unit = input.dataset.unit || '';
      const min = parseInt(input.min);
      const max = parseInt(input.max);

      // Clamp value
      value = Math.max(min, Math.min(max, value));
      input.value = value;

      // Update corresponding slider
      const slider = container.querySelector(`.param-slider[data-offset="${offset}"]`);
      if (slider) {
        slider.value = value;
      }

      // Find param info
      const param = findParamInfo(offset);
      if (param) {
        const success = addToSysExOutput(param, value, `${value}${unit}`);
        if (!success) {
          showNoMappingWarning(container, param.name);
        }
        updateSysExDisplay(container);
      }
    });
  });

  // Enum select
  container.querySelectorAll('.param-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const offset = parseInt(select.dataset.offset);
      const value = parseInt(select.value);
      const name = select.dataset.name;
      const displayValue = select.selectedOptions[0].textContent.trim();

      // Find param info
      const param = findParamInfo(offset);
      if (param) {
        const success = addToSysExOutput(param, value, displayValue);
        if (!success) {
          showNoMappingWarning(container, param.name);
        }
        updateSysExDisplay(container);
      }
    });
  });
}

/**
 * Show warning when parameter has no SysEx mapping
 */
function showNoMappingWarning(container, paramName) {
  // Find or create warning element
  let warning = container.querySelector('.sysex-no-mapping-warning');
  if (!warning) {
    warning = document.createElement('div');
    warning.className = 'sysex-no-mapping-warning';
    const outputSection = container.querySelector('.sysex-output-section');
    if (outputSection) {
      outputSection.insertBefore(warning, outputSection.querySelector('.sysex-output-block'));
    }
  }

  warning.textContent = `"${paramName}" has no SysEx mapping - cannot generate command`;
  warning.style.display = 'block';

  // Auto-hide after 3 seconds
  setTimeout(() => {
    warning.style.display = 'none';
  }, 3000);
}

/**
 * Set up output action listeners
 */
function setupOutputListeners(container) {
  // Clear button
  const clearBtn = container.querySelector('#clearOutput');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearOutput();
      updateSysExDisplay(container);
      // Reset all controls to defaults
      updateParameterGrid(container);
    });
  }

  // Copy All button
  const copyBtn = container.querySelector('#copyAll');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const format = getCurrentFormat();
      let text = formatSysEx(EDITOR_ENABLE_BYTES, format) + '\n';
      text += sysexOutput.map(e => e.text).join('\n');

      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy All', 1500);
      });
    });
  }

  // Remove buttons (event delegation on output block)
  const outputBlock = container.querySelector('#sysexOutputBlock');
  if (outputBlock) {
    outputBlock.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.sysex-remove-btn');
      if (removeBtn) {
        const offset = parseInt(removeBtn.dataset.offset);
        removeFromSysExOutput(offset);
        updateSysExDisplay(container);
        // Reset the control for this parameter back to min
        resetParameterControl(container, offset);
      }
    });
  }
}

/**
 * Reset a parameter control back to its minimum value
 */
function resetParameterControl(container, offset) {
  const param = findParamInfo(offset);
  if (!param) return;

  // Reset slider
  const slider = container.querySelector(`.param-slider[data-offset="${offset}"]`);
  if (slider) {
    slider.value = param.min;
  }

  // Reset value input
  const valueInput = container.querySelector(`.param-value-input[data-offset="${offset}"]`);
  if (valueInput) {
    valueInput.value = param.min;
  }

  // Reset select
  const select = container.querySelector(`.param-select[data-offset="${offset}"]`);
  if (select) {
    select.value = param.min;
  }
}

/**
 * Update parameter grid display
 */
function updateParameterGrid(container) {
  const grid = container.querySelector('#parameterGrid');
  if (grid) {
    grid.innerHTML = renderParameterGrid();
    setupParameterListeners(container);
  }
}

/**
 * Update SysEx display without full re-render
 */
function updateSysExDisplay(container) {
  const block = container.querySelector('#sysexOutputBlock');
  if (block) {
    block.innerHTML = renderSysExOutput();
  }

  // Update Copy All button state
  updateCopyAllButton(container, getCurrentFormat());
}

/**
 * Find parameter info by offset
 */
function findParamInfo(offset) {
  for (const cat of Object.keys(VL3X_PARAMS)) {
    for (const sub of Object.keys(VL3X_PARAMS[cat])) {
      const param = VL3X_PARAMS[cat][sub].find(p => p.offset === offset);
      if (param) return param;
    }
  }
  return null;
}

// ============================================================================
// Legacy Exports (for compatibility)
// ============================================================================

/**
 * Update the SysEx view header
 */
export function updateSysExHeader(titleEl, infoEl) {
  titleEl.textContent = 'GTR, VOC & Setup';
  infoEl.innerHTML = 'Generate SysEx commands for Guitar, Vocal, and Setup parameters';
}

/**
 * Toggle SysEx UI elements
 */
export function toggleSysExUI(elements, show) {
  if (show) {
    elements.categoryTabs.innerHTML = '';
    elements.subtabs.style.display = 'none';
    elements.cautionBox.style.display = 'none';
  }
}

/**
 * Count total parameters
 */
function countParams() {
  let count = 0;
  for (const cat of Object.values(VL3X_PARAMS)) {
    for (const sub of Object.values(cat)) {
      count += sub.length;
    }
  }
  return count;
}
