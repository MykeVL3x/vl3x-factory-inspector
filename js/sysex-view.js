/**
 * sysex-view.js - Interactive SysEx Calculator for VL3X
 * Generates exact SysEx messages for ALL parameters with full value ranges
 */

import { getState } from './state.js';
import { makeSysEx, parseSysEx, formatSysEx } from './sysex-calculator.js';
import { VL3X_PARAMS, ENUMS, getCategories, getSubcategories, getParameters, findParamByOffset, findParamBySysexId, getEnumValues } from './sysex-params.js';

/**
 * Render the SysEx calculator view
 * @param {HTMLElement} container - The container element
 * @returns {void}
 */
export function renderSysExView(container) {
  const categories = getCategories();

  container.innerHTML = `
    <div class="sysex-calculator">
      <div class="sysex-section">
        <h3>SysEx Generator</h3>
        <p class="sysex-desc">Generate exact SysEx messages for any VL3X parameter.
        Copy directly into onSong or MC-8 for seamless, pop-free control.</p>

        <div class="sysex-form">
          <div class="sysex-row">
            <div class="form-group">
              <label for="paramCategory">Category</label>
              <select id="paramCategory" class="sysex-select">
                ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="paramSubcategory">Subcategory</label>
              <select id="paramSubcategory" class="sysex-select">
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="paramSelect">Parameter</label>
            <select id="paramSelect" class="sysex-select">
            </select>
          </div>

          <div id="paramDetails" class="param-details"></div>

          <div class="form-group">
            <label for="paramValue">Value <span id="valueRange"></span></label>
            <div class="value-input-group">
              <input type="range" id="paramSlider" class="sysex-slider">
              <input type="number" id="paramValue" class="sysex-input">
              <span id="paramUnit" class="param-unit"></span>
            </div>
          </div>

          <div class="form-group" id="enumSelectGroup" style="display:none;">
            <label for="enumSelect">Select Value</label>
            <select id="enumSelect" class="sysex-select">
            </select>
          </div>

          <div class="form-group">
            <label>Quick Values</label>
            <div id="quickValues" class="quick-values"></div>
          </div>
        </div>

        <div class="sysex-output">
          <label>SysEx Message (spaced - for onSong)</label>
          <div class="output-row">
            <input type="text" id="sysexSpaced" class="sysex-result" readonly>
            <button id="copySpaced" class="copy-btn" title="Copy to clipboard">Copy</button>
          </div>

          <label>SysEx Message (compact - for MC-8)</label>
          <div class="output-row">
            <input type="text" id="sysexCompact" class="sysex-result" readonly>
            <button id="copyCompact" class="copy-btn" title="Copy to clipboard">Copy</button>
          </div>

          <div class="param-meta" id="paramMeta"></div>
        </div>
      </div>

      <div class="sysex-section">
        <h3>SysEx Decoder</h3>
        <p class="sysex-desc">Paste a SysEx message to decode its parameter and value.</p>

        <div class="sysex-form">
          <div class="form-group">
            <label for="sysexInput">SysEx Message</label>
            <input type="text" id="sysexInput" class="sysex-input wide"
                   placeholder="F0 00 01 38 00 6D 22 ...">
          </div>
          <button id="decodeBtn" class="decode-btn">Decode</button>
        </div>

        <div id="decodeResult" class="decode-result"></div>
      </div>

      <div class="sysex-section">
        <h3>Common Operations</h3>
        <p class="sysex-desc">One-click commands for frequent adjustments.</p>
        <div class="common-ops">
          <div class="op-group">
            <h4>Harmony Level</h4>
            <button class="op-btn" data-sysex-id="884" data-offset="357" data-value="-61">OFF (Muted)</button>
            <button class="op-btn" data-sysex-id="884" data-offset="357" data-value="-12">LOW (-12dB)</button>
            <button class="op-btn" data-sysex-id="884" data-offset="357" data-value="-6">MED (-6dB)</button>
            <button class="op-btn" data-sysex-id="884" data-offset="357" data-value="0">FULL (0dB)</button>
            <button class="op-btn" data-sysex-id="884" data-offset="357" data-value="6">BOOST (+6dB)</button>
          </div>
          <div class="op-group">
            <h4>Double Level</h4>
            <button class="op-btn" data-sysex-id="883" data-offset="356" data-value="-61">OFF (Muted)</button>
            <button class="op-btn" data-sysex-id="883" data-offset="356" data-value="-12">LOW (-12dB)</button>
            <button class="op-btn" data-sysex-id="883" data-offset="356" data-value="0">FULL (0dB)</button>
          </div>
          <div class="op-group">
            <h4>HardTune Amount</h4>
            <button class="op-btn" data-sysex-id="230" data-offset="96" data-value="0">OFF (0%)</button>
            <button class="op-btn" data-sysex-id="230" data-offset="96" data-value="30">SUBTLE (30%)</button>
            <button class="op-btn" data-sysex-id="230" data-offset="96" data-value="60">MEDIUM (60%)</button>
            <button class="op-btn" data-sysex-id="230" data-offset="96" data-value="100">FULL (100%)</button>
          </div>
          <div class="op-group">
            <h4>Vocal Reverb</h4>
            <button class="op-btn" data-sysex-id="905" data-offset="377" data-value="-61">OFF (Muted)</button>
            <button class="op-btn" data-sysex-id="905" data-offset="377" data-value="-18">LOW (-18dB)</button>
            <button class="op-btn" data-sysex-id="905" data-offset="377" data-value="-12">MED (-12dB)</button>
            <button class="op-btn" data-sysex-id="905" data-offset="377" data-value="0">FULL (0dB)</button>
          </div>
          <div class="op-group">
            <h4>Vocal Delay</h4>
            <button class="op-btn" data-sysex-id="903" data-offset="375" data-value="-61">OFF (Muted)</button>
            <button class="op-btn" data-sysex-id="903" data-offset="375" data-value="-18">LOW (-18dB)</button>
            <button class="op-btn" data-sysex-id="903" data-offset="375" data-value="-12">MED (-12dB)</button>
            <button class="op-btn" data-sysex-id="903" data-offset="375" data-value="0">FULL (0dB)</button>
          </div>
          <div class="op-group">
            <h4>Guitar Reverb</h4>
            <button class="op-btn" data-sysex-id="911" data-offset="384" data-value="-61">OFF (Muted)</button>
            <button class="op-btn" data-sysex-id="911" data-offset="384" data-value="-12">MED (-12dB)</button>
            <button class="op-btn" data-sysex-id="911" data-offset="384" data-value="0">FULL (0dB)</button>
          </div>
        </div>
      </div>

      <div class="sysex-info">
        <p><strong>Why SysEx?</strong> SysEx parameter changes are <em>seamless</em> - no audio interruption
        or "preset pop" during live performance. Use these commands in onSong section markers or MC-8 buttons
        to adjust your sound in real-time without switching presets.</p>
        <p style="margin-top:0.5rem"><strong>Total Parameters:</strong> ${countParams()} parameters across ${categories.length} categories</p>
      </div>
    </div>
  `;

  setupSysExEventListeners(container);
  updateSubcategories();
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

/**
 * Set up event listeners for the SysEx calculator
 * @param {HTMLElement} container - The container element
 */
function setupSysExEventListeners(container) {
  const categorySelect = container.querySelector('#paramCategory');
  const subcatSelect = container.querySelector('#paramSubcategory');
  const paramSelect = container.querySelector('#paramSelect');
  const paramValue = container.querySelector('#paramValue');
  const paramSlider = container.querySelector('#paramSlider');
  const enumSelect = container.querySelector('#enumSelect');
  const copySpaced = container.querySelector('#copySpaced');
  const copyCompact = container.querySelector('#copyCompact');
  const decodeBtn = container.querySelector('#decodeBtn');
  const sysexInput = container.querySelector('#sysexInput');

  // Category change
  categorySelect.addEventListener('change', () => {
    updateSubcategories();
  });

  // Subcategory change
  subcatSelect.addEventListener('change', () => {
    updateParamOptions();
  });

  // Parameter change
  paramSelect.addEventListener('change', () => {
    updateValueConstraints();
    generateSysEx();
  });

  // Value changes (slider and input)
  paramValue.addEventListener('input', () => {
    paramSlider.value = paramValue.value;
    updateEnumSelect();
    generateSysEx();
  });

  paramSlider.addEventListener('input', () => {
    paramValue.value = paramSlider.value;
    updateEnumSelect();
    generateSysEx();
  });

  // Enum select change
  enumSelect.addEventListener('change', () => {
    const val = parseInt(enumSelect.value);
    paramValue.value = val;
    paramSlider.value = val;
    generateSysEx();
  });

  // Copy buttons
  copySpaced.addEventListener('click', () => {
    const input = container.querySelector('#sysexSpaced');
    navigator.clipboard.writeText(input.value);
    copySpaced.textContent = 'Copied!';
    setTimeout(() => copySpaced.textContent = 'Copy', 1500);
  });

  copyCompact.addEventListener('click', () => {
    const input = container.querySelector('#sysexCompact');
    navigator.clipboard.writeText(input.value);
    copyCompact.textContent = 'Copied!';
    setTimeout(() => copyCompact.textContent = 'Copy', 1500);
  });

  // Decode button
  decodeBtn.addEventListener('click', () => {
    const hex = sysexInput.value;
    decodeSysEx(hex, container);
  });

  // Quick value buttons
  container.querySelectorAll('.quick-values').forEach(div => {
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-btn')) {
        paramValue.value = e.target.dataset.value;
        paramSlider.value = e.target.dataset.value;
        updateEnumSelect();
        generateSysEx();
      }
    });
  });

  // Common operation buttons
  container.querySelectorAll('.op-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sysexId = parseInt(btn.dataset.sysexId);
      const offset = parseInt(btn.dataset.offset);
      const value = parseInt(btn.dataset.value);
      const sysex = makeSysEx(sysexId, value);

      // Show in output
      container.querySelector('#sysexSpaced').value = sysex;
      container.querySelector('#sysexCompact').value = formatSysEx(sysex, true);

      // Update param meta
      const param = findParamByOffset(offset);
      const unit = param?.param?.unit || '';
      container.querySelector('#paramMeta').innerHTML =
        `<span class="meta-label">SysEx ID ${sysexId} (offset ${offset})</span> | <span class="meta-value">${param?.param?.name || 'Unknown'} = ${value}${unit}</span>`;

      // Flash the button
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 200);
    });
  });
}

/**
 * Update subcategory dropdown based on selected category
 */
function updateSubcategories() {
  const categorySelect = document.querySelector('#paramCategory');
  const subcatSelect = document.querySelector('#paramSubcategory');
  const category = categorySelect.value;
  const subcats = getSubcategories(category);

  subcatSelect.innerHTML = subcats.map(sub =>
    `<option value="${sub}">${sub}</option>`
  ).join('');

  updateParamOptions();
}

/**
 * Update parameter options based on selected category/subcategory
 */
function updateParamOptions() {
  const categorySelect = document.querySelector('#paramCategory');
  const subcatSelect = document.querySelector('#paramSubcategory');
  const paramSelect = document.querySelector('#paramSelect');

  const category = categorySelect.value;
  const subcategory = subcatSelect.value;
  const params = getParameters(category, subcategory);

  paramSelect.innerHTML = params.map(p =>
    `<option value="${p.offset}" data-sysex-id="${p.sysex_id || ''}" data-min="${p.min}" data-max="${p.max}"
             data-unit="${p.unit || ''}" data-enum="${p.enum || ''}">${p.name}</option>`
  ).join('');

  updateValueConstraints();
  generateSysEx();
}

/**
 * Update value input constraints based on selected parameter
 */
function updateValueConstraints() {
  const paramSelect = document.querySelector('#paramSelect');
  const paramValue = document.querySelector('#paramValue');
  const paramSlider = document.querySelector('#paramSlider');
  const paramUnit = document.querySelector('#paramUnit');
  const valueRange = document.querySelector('#valueRange');
  const quickValues = document.querySelector('#quickValues');
  const enumSelectGroup = document.querySelector('#enumSelectGroup');
  const enumSelect = document.querySelector('#enumSelect');
  const paramDetails = document.querySelector('#paramDetails');

  const option = paramSelect.selectedOptions[0];
  if (!option) return;

  const min = parseInt(option.dataset.min);
  const max = parseInt(option.dataset.max);
  const unit = option.dataset.unit;
  const enumType = option.dataset.enum;
  const offset = parseInt(option.value);

  paramValue.min = min;
  paramValue.max = max;
  paramSlider.min = min;
  paramSlider.max = max;
  paramUnit.textContent = unit;
  valueRange.textContent = `(${min} to ${max})`;

  // Show parameter details
  const sysexId = option.dataset.sysexId;
  paramDetails.innerHTML = sysexId
    ? `<span class="detail-offset">SysEx ID: ${sysexId} | Offset: ${offset}</span>`
    : `<span class="detail-offset">Offset: ${offset} (no SysEx ID - LIVE control not available)</span>`;

  // Handle enum parameters
  if (enumType && ENUMS[enumType]) {
    enumSelectGroup.style.display = 'block';
    const enumVals = getEnumValues(enumType);
    enumSelect.innerHTML = enumVals.map((val, idx) =>
      `<option value="${idx}">${idx}: ${val}</option>`
    ).join('');
  } else {
    enumSelectGroup.style.display = 'none';
  }

  // Set to a sensible default value
  let defaultVal;
  if (unit === 'dB' && min < 0) {
    defaultVal = 0; // Default to 0dB for level controls
  } else if (min < 0) {
    defaultVal = 0;
  } else {
    defaultVal = min;
  }
  defaultVal = Math.max(min, Math.min(max, defaultVal));

  paramValue.value = defaultVal;
  paramSlider.value = defaultVal;
  updateEnumSelect();

  // Generate quick value buttons
  const quickVals = generateQuickValues(min, max, unit, enumType);
  quickValues.innerHTML = quickVals.map(v =>
    `<button class="quick-btn" data-value="${v.val}">${v.label}</button>`
  ).join('');
}

/**
 * Update enum select to match current value
 */
function updateEnumSelect() {
  const paramSelect = document.querySelector('#paramSelect');
  const paramValue = document.querySelector('#paramValue');
  const enumSelect = document.querySelector('#enumSelect');

  const option = paramSelect.selectedOptions[0];
  if (!option) return;

  const enumType = option.dataset.enum;
  if (enumType && ENUMS[enumType]) {
    enumSelect.value = paramValue.value;
  }
}

/**
 * Generate quick value buttons based on range
 */
function generateQuickValues(min, max, unit, enumType) {
  const values = [];

  // For enum types, show first few options
  if (enumType && ENUMS[enumType]) {
    const enumVals = getEnumValues(enumType);
    const show = Math.min(5, enumVals.length);
    for (let i = 0; i < show; i++) {
      values.push({ val: i, label: enumVals[i] });
    }
    return values;
  }

  if (unit === 'dB') {
    if (min <= -61) values.push({ val: -61, label: 'OFF' });
    if (min <= -18 && max >= -18) values.push({ val: -18, label: '-18dB' });
    if (min <= -12 && max >= -12) values.push({ val: -12, label: '-12dB' });
    if (min <= -6 && max >= -6) values.push({ val: -6, label: '-6dB' });
    if (min <= 0 && max >= 0) values.push({ val: 0, label: '0dB' });
    if (max >= 6) values.push({ val: 6, label: '+6dB' });
  } else if (unit === '%') {
    values.push({ val: 0, label: '0%' });
    if (max >= 25) values.push({ val: 25, label: '25%' });
    if (max >= 50) values.push({ val: 50, label: '50%' });
    if (max >= 75) values.push({ val: 75, label: '75%' });
    if (max >= 100) values.push({ val: 100, label: '100%' });
  } else if (unit === 'ms') {
    values.push({ val: min, label: `${min}ms` });
    const mid = Math.round((min + max) / 2);
    values.push({ val: mid, label: `${mid}ms` });
    values.push({ val: max, label: `${max}ms` });
  } else if (unit === 'BPM') {
    values.push({ val: 60, label: '60' });
    values.push({ val: 90, label: '90' });
    values.push({ val: 120, label: '120' });
    values.push({ val: 140, label: '140' });
    values.push({ val: 180, label: '180' });
  } else {
    // Generic: min, 25%, 50%, 75%, max
    values.push({ val: min, label: `${min}` });
    if (max - min > 4) {
      const q1 = Math.round(min + (max - min) * 0.25);
      const mid = Math.round((min + max) / 2);
      const q3 = Math.round(min + (max - min) * 0.75);
      values.push({ val: q1, label: `${q1}` });
      values.push({ val: mid, label: `${mid}` });
      values.push({ val: q3, label: `${q3}` });
    }
    values.push({ val: max, label: `${max}` });
  }

  return values.filter(v => v.val >= min && v.val <= max);
}

/**
 * Generate SysEx message from current form values
 */
function generateSysEx() {
  const paramSelect = document.querySelector('#paramSelect');
  const paramValue = document.querySelector('#paramValue');
  const sysexSpaced = document.querySelector('#sysexSpaced');
  const sysexCompact = document.querySelector('#sysexCompact');
  const paramMeta = document.querySelector('#paramMeta');

  const offset = parseInt(paramSelect.value);
  const value = parseInt(paramValue.value);
  const option = paramSelect.selectedOptions[0];
  const sysexId = option?.dataset.sysexId ? parseInt(option.dataset.sysexId) : null;
  const unit = option?.dataset.unit || '';
  const enumType = option?.dataset.enum;

  // Check if sysex_id is available
  if (!sysexId) {
    sysexSpaced.value = 'ERROR: No SysEx ID for this parameter';
    sysexCompact.value = '';
    paramMeta.innerHTML = `<span class="meta-label">Offset ${offset}</span> | <span class="meta-error">This parameter does not support LIVE SysEx control</span>`;
    return;
  }

  const sysex = makeSysEx(sysexId, value);
  sysexSpaced.value = sysex;
  sysexCompact.value = formatSysEx(sysex, true);

  // Show value with enum name if applicable
  let displayVal = `${value}${unit}`;
  if (enumType && ENUMS[enumType] && ENUMS[enumType][value]) {
    displayVal = `${value} (${ENUMS[enumType][value]})`;
  }
  paramMeta.innerHTML = `<span class="meta-label">SysEx ID ${sysexId} (offset ${offset})</span> | <span class="meta-value">${displayVal}</span>`;
}

/**
 * Decode a SysEx message and display results
 */
function decodeSysEx(hex, container) {
  const resultDiv = container.querySelector('#decodeResult');
  const parsed = parseSysEx(hex);

  if (!parsed.valid) {
    resultDiv.innerHTML = `<div class="decode-error">Invalid: ${parsed.error}</div>`;
    return;
  }

  // Find the parameter by sysex_id
  const found = findParamBySysexId(parsed.sysexId);
  const paramData = found?.param;
  const paramName = paramData ? paramData.name : `Unknown (SysEx ID ${parsed.sysexId})`;
  const unit = paramData?.unit || '';

  // Get enum value if applicable
  let displayVal = `${parsed.value}${unit}`;
  if (paramData?.enum && ENUMS[paramData.enum] && ENUMS[paramData.enum][parsed.value]) {
    displayVal = `${parsed.value} (${ENUMS[paramData.enum][parsed.value]})`;
  }

  // Location from found result
  const location = found ? `${found.category} > ${found.subcategory}` : 'Unknown location';

  resultDiv.innerHTML = `
    <div class="decode-success">
      <div class="decode-row"><span>Parameter:</span><strong>${paramName}</strong></div>
      <div class="decode-row"><span>Location:</span>${location}</div>
      <div class="decode-row"><span>SysEx ID:</span>${parsed.sysexId} (page ${parsed.page}, param ${parsed.param})</div>
      ${paramData ? `<div class="decode-row"><span>Offset:</span>${paramData.offset}</div>` : ''}
      <div class="decode-row"><span>Value:</span><strong>${displayVal}</strong></div>
      ${paramData ? `<div class="decode-row"><span>Range:</span>${paramData.min} to ${paramData.max}${unit}</div>` : ''}
    </div>
  `;
}

/**
 * Update the SysEx view header
 */
export function updateSysExHeader(titleEl, infoEl) {
  titleEl.textContent = 'SysEx Calculator';
  infoEl.innerHTML = 'Generate seamless parameter control messages';
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
