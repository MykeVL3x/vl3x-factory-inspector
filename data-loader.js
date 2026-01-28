/**
 * data-loader.js - Data loading utilities for VL3X Inspector
 * Handles fetching and parsing of data.json and setup.json
 */

/**
 * Load preset data from data.json
 * @param {string} [basePath=''] - Base path for fetch (for testing)
 * @returns {Promise<Object>} Parsed preset data
 */
export async function loadPresetData(basePath = '') {
  const cacheBuster = '?v=' + Date.now();
  const response = await fetch(basePath + 'data.json' + cacheBuster);

  if (!response.ok) {
    throw new Error(`Failed to load data.json: ${response.status}`);
  }

  return response.json();
}

/**
 * Load setup data from setup.json
 * @param {string} [basePath=''] - Base path for fetch (for testing)
 * @returns {Promise<Object>} Parsed setup data
 */
export async function loadSetupData(basePath = '') {
  const cacheBuster = '?v=' + Date.now();
  const response = await fetch(basePath + 'setup.json' + cacheBuster);

  if (!response.ok) {
    throw new Error(`Failed to load setup.json: ${response.status}`);
  }

  return response.json();
}

/**
 * Load both preset and setup data in parallel
 * @param {string} [basePath=''] - Base path for fetch
 * @returns {Promise<{data: Object, setupData: Object}>} Both data objects
 */
export async function loadAllData(basePath = '') {
  const [data, setupData] = await Promise.all([
    loadPresetData(basePath),
    loadSetupData(basePath)
  ]);

  return { data, setupData };
}

/**
 * Parse sparse preset values into full array
 * Preset values are stored as [offset, value] pairs for efficiency
 *
 * @param {Object} preset - Preset object with v array
 * @param {number} size - Total number of parameters (472)
 * @returns {number[]} Full array of values
 */
export function parsePresetValues(preset, size = 472) {
  const values = new Array(size).fill(0);

  if (preset.v && Array.isArray(preset.v)) {
    for (const [offset, value] of preset.v) {
      values[offset] = value;
    }
  }

  return values;
}

/**
 * Find preset by number
 * @param {Object[]} presets - Array of presets
 * @param {number} num - Preset number to find
 * @returns {Object|undefined} Found preset or undefined
 */
export function findPresetByNumber(presets, num) {
  return presets.find(p => p.n === num);
}

/**
 * Filter presets by search term
 * @param {Object[]} presets - Array of presets
 * @param {string} filter - Search string
 * @returns {Object[]} Filtered presets
 */
export function filterPresets(presets, filter) {
  if (!filter) {
    return presets;
  }

  const filterLower = filter.toLowerCase();

  return presets.filter(preset => {
    const nameMatch = preset.m.toLowerCase().includes(filterLower);
    const numMatch = preset.n.toString().includes(filter);
    return nameMatch || numMatch;
  });
}
