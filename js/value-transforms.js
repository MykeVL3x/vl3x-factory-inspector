/**
 * value-transforms.js - Value transformation and display formatting
 * CRITICAL module: Handles all data transformations for VL3X Inspector
 *
 * Responsibilities:
 * - Enum lookups (119 params, 55 enum types)
 * - Signed byte conversion (38 params with offset_if_negative)
 * - Pan parameter formatting (8 offsets: 341, 343, 345, 347, 349, 351, 353, 355)
 * - Conditional N/A handling (4 rules at offsets 278-281, depends on 272)
 * - Unit appending
 */

import { PAN_PARAM_OFFSETS } from './constants.js';

/**
 * Look up enum display value
 * @param {string} enumType - Enum type name (e.g., 'amp_style')
 * @param {number} value - Numeric value to look up
 * @param {Object} enums - Enums lookup object from data.json
 * @returns {string|undefined} Display string or undefined if not found
 */
export function lookupEnum(enumType, value, enums) {
  if (!enums || !enums[enumType]) {
    return undefined;
  }
  return enums[enumType][value];
}

/**
 * Transform signed byte value
 * @param {number} value - Raw value (may be negative)
 * @param {number} offset - Offset to add if negative (typically 128)
 * @param {string} type - Transform type (currently only 'offset_if_negative')
 * @returns {number} Transformed value
 */
export function transformSignedByte(value, offset, type) {
  if (type === 'offset_if_negative' && value < 0) {
    return value + offset;
  }
  return value;
}

/**
 * Format pan parameter value for display
 * @param {number} value - Pan value (-100 to 100)
 * @returns {string} Formatted pan string (C, L##, R##, LEFT, RIGHT)
 */
export function formatPan(value) {
  if (value === 0) {
    return 'C';
  }
  if (value === 100) {
    return 'RIGHT';
  }
  if (value === -100) {
    return 'LEFT';
  }
  if (value > 0) {
    return 'R' + value;
  }
  if (value < 0) {
    return 'L' + Math.abs(value);
  }
  return String(value);
}

/**
 * Check if a parameter should display N/A based on conditional rules
 * @param {number} offset - Parameter offset
 * @param {Array} values - All parameter values
 * @param {Object} conditionals - Conditional rules from data.json
 * @returns {boolean} True if should show N/A
 */
export function checkConditionalNA(offset, values, conditionals) {
  if (!conditionals || !conditionals[offset]) {
    return false;
  }

  const rule = conditionals[offset];
  const dependencyValue = values[rule.depends_on];

  return rule.show_na_when.includes(dependencyValue);
}

/**
 * Get display value for a parameter
 * Main entry point for value transformation
 *
 * @param {number} offset - Parameter offset index
 * @param {number} rawValue - Raw parameter value
 * @param {Array} allValues - All parameter values (for conditional checks)
 * @param {Object} data - Full data object with enums, transforms, etc.
 * @returns {string} Formatted display value
 */
export function getDisplayValue(offset, rawValue, allValues, data) {
  // Check conditionals first - return N/A if dependency not met
  if (data.conditionals && checkConditionalNA(offset, allValues, data.conditionals)) {
    return 'N/A';
  }

  // Check pan parameters
  if (data.pan_params && data.pan_params.includes(offset)) {
    let panValue = rawValue;

    // Handle signed byte conversion for pan
    if (rawValue < 0) {
      panValue = rawValue + 128;
    } else if (rawValue === 28) {
      // Special case: raw 28 means LEFT (-100)
      panValue = -100;
    }

    return formatPan(panValue);
  }

  // Check enum lookup
  if (data.enum_refs && data.enum_refs[offset] && data.enums) {
    const enumType = data.enum_refs[offset];
    const enumValue = lookupEnum(enumType, rawValue, data.enums);
    if (enumValue !== undefined) {
      return enumValue;
    }
  }

  // Check transforms
  if (data.transforms && data.transforms[offset]) {
    const transform = data.transforms[offset];
    let adjustedValue = rawValue;

    if (transform.type === 'offset_if_negative' && rawValue < 0) {
      adjustedValue = rawValue + (transform.offset || 0);
    } else if (!transform.type || transform.type !== 'offset_if_negative') {
      adjustedValue = rawValue + (transform.offset || 0);
    }

    const scaledValue = adjustedValue * (transform.scale || 1);
    const displayValue = transform.scale && transform.scale < 1
      ? scaledValue.toFixed(1)
      : Math.round(scaledValue);
    let result = (transform.prefix || '') + displayValue + (transform.suffix || '');

    // Add unit if defined (but skip if transform already has suffix to avoid duplication)
    if (data.units && data.units[offset] && !transform.suffix) {
      result += ' ' + data.units[offset];
    }

    return result;
  }

  // Check for EQ frequency lookup (Hz params with 0-240 range)
  if (data.units && data.units[offset] === 'Hz' && data.eq_freq_table) {
    // Handle negative values (signed byte conversion)
    let freqIndex = rawValue;
    if (freqIndex < 0) {
      freqIndex = freqIndex + 256;
    }

    // Clamp to valid range
    if (freqIndex >= 0 && freqIndex <= 240) {
      const hzValue = data.eq_freq_table[freqIndex];
      if (hzValue !== undefined) {
        return hzValue + ' Hz';
      }
    }
  }

  // Check for EQ bandwidth lookup (BW params with 0-23 range)
  if (data.units && data.units[offset] === 'BW' && data.eq_bw_table) {
    let bwIndex = rawValue;
    if (bwIndex < 0) {
      bwIndex = bwIndex + 256;
    }
    if (bwIndex >= 0 && bwIndex < data.eq_bw_table.length) {
      return data.eq_bw_table[bwIndex];
    }
  }

  // Check for speaker bandwidth lookup (SPKR_BW params with 0-16 range)
  if (data.units && data.units[offset] === 'SPKR_BW' && data.spkr_bw_table) {
    let bwIndex = rawValue;
    if (bwIndex < 0) {
      bwIndex = bwIndex + 256;
    }
    if (bwIndex >= 0 && bwIndex < data.spkr_bw_table.length) {
      return data.spkr_bw_table[bwIndex];
    }
  }

  // Default: plain value with optional unit
  let result = String(rawValue);
  if (data.units && data.units[offset]) {
    result += ' ' + data.units[offset];
  }

  return result;
}

/**
 * Apply transforms to get numeric display value
 * Used for styling (zero, negative classes)
 *
 * @param {number} offset - Parameter offset
 * @param {number} rawValue - Raw value
 * @param {Object} transforms - Transform rules
 * @returns {number} Transformed numeric value
 */
export function getNumericDisplayValue(offset, rawValue, transforms) {
  if (transforms && transforms[offset]) {
    const t = transforms[offset];
    if (t.type === 'offset_if_negative' && rawValue < 0) {
      return rawValue + (t.offset || 0);
    }
  }
  return rawValue;
}
