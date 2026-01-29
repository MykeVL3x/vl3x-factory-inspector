/**
 * sysex-calculator.js - VL3X SysEx message generator and parser
 *
 * Generates SysEx messages for VL3X LIVE parameter control via 0x22 command.
 * Uses sysex_id (not offset) for addressing, as verified against working scripts.
 */

// ============================================================================
// Constants
// ============================================================================

/** TC Helicon manufacturer ID */
export const TC_ID = [0x00, 0x01, 0x38];

/** Device ID (0 = all devices) */
export const DEVICE_ID = 0x00;

/** VL3X Model ID */
export const MODEL_ID = 0x6D;

/** Parameter Write command (LIVE changes) */
export const CMD_PARAM_WRITE = 0x22;

// ============================================================================
// Core Functions
// ============================================================================

/**
 * Calculate page and param from sysex_id (for 0x22 command)
 * @param {number} sysexId - SysEx ID for the parameter
 * @returns {{page: number, param: number}} Page and param bytes
 */
export function getPageAndParam(sysexId) {
  const page = (sysexId >> 7) & 0x7F;
  const param = sysexId & 0x7F;
  return { page, param };
}

/**
 * Encode a parameter value into 4 7-bit bytes (MSB first)
 * Matches apply_preset_live.py encode_value()
 * @param {number} value - Parameter value (can be negative)
 * @returns {number[]} Array of 4 bytes, each < 128, MSB first
 */
export function encodeValue(value) {
  // Truncate to integer
  value = Math.trunc(value);

  // Handle negative values with 28-bit two's complement
  if (value < 0) {
    value = (1 << 28) + value;
  }

  // Extract 4 7-bit bytes (MSB first - matches working scripts)
  return [
    (value >> 21) & 0x7F,
    (value >> 14) & 0x7F,
    (value >> 7) & 0x7F,
    value & 0x7F
  ];
}

/**
 * Decode 4 7-bit bytes back to a parameter value (MSB first)
 * @param {number[]} bytes - Array of 4 bytes (MSB first)
 * @returns {number} Decoded parameter value
 */
export function decodeValue(bytes) {
  if (!Array.isArray(bytes) || bytes.length !== 4) {
    return 0;
  }

  // Combine bytes (MSB first)
  let value = (bytes[0] << 21) | (bytes[1] << 14) | (bytes[2] << 7) | bytes[3];

  // Handle signed values (28-bit two's complement)
  if (value >= (1 << 27)) {
    value = value - (1 << 28);
  }

  return value;
}

/**
 * Generate complete SysEx message for a LIVE parameter write (0x22)
 * @param {number} sysexId - SysEx ID for the parameter (NOT offset!)
 * @param {number} value - Parameter value
 * @returns {string} Hex string with spaces (e.g., "F0 00 01 38 ...")
 */
export function makeSysEx(sysexId, value) {
  const { page, param } = getPageAndParam(sysexId);
  const valBytes = encodeValue(value);

  // Build message bytes (matches apply_preset_live.py)
  const bytes = [
    0xF0,           // SysEx start
    ...TC_ID,       // Manufacturer ID (3 bytes)
    DEVICE_ID,      // Device ID
    MODEL_ID,       // Model ID
    CMD_PARAM_WRITE, // Command (0x22)
    page,           // Page (sysex_id >> 7)
    param,          // Param (sysex_id & 0x7F)
    ...valBytes,    // Value (4 bytes, MSB first)
    0xF7            // SysEx end
  ];

  // Format as hex string with spaces
  return bytes.map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
}

/**
 * Parse a SysEx hex string and extract sysex_id/value
 * @param {string} hexString - SysEx message (with or without spaces)
 * @returns {object} Parsed result with valid, sysexId, value, page, param, or error
 */
export function parseSysEx(hexString) {
  try {
    // Normalize: remove spaces, convert to uppercase
    const normalized = hexString.replace(/\s+/g, '').toUpperCase();

    // Check for valid hex characters
    if (!/^[0-9A-F]+$/.test(normalized)) {
      return { valid: false, error: 'Invalid hex characters' };
    }

    // Check length (14 bytes = 28 hex chars)
    if (normalized.length !== 28) {
      return { valid: false, error: 'Invalid length: expected 14 bytes (28 hex chars)' };
    }

    // Parse bytes
    const bytes = [];
    for (let i = 0; i < normalized.length; i += 2) {
      bytes.push(parseInt(normalized.substr(i, 2), 16));
    }

    // Validate structure
    if (bytes[0] !== 0xF0) {
      return { valid: false, error: 'Missing SysEx start (F0)' };
    }
    if (bytes[13] !== 0xF7) {
      return { valid: false, error: 'Missing SysEx end (F7)' };
    }

    // Validate manufacturer ID
    if (bytes[1] !== TC_ID[0] || bytes[2] !== TC_ID[1] || bytes[3] !== TC_ID[2]) {
      return { valid: false, error: 'Invalid manufacturer ID (expected TC Helicon: 00 01 38)' };
    }

    // Validate model ID
    if (bytes[5] !== MODEL_ID) {
      return { valid: false, error: 'Invalid model ID (expected VL3X: 6D)' };
    }

    // Validate command
    if (bytes[6] !== CMD_PARAM_WRITE) {
      return { valid: false, error: 'Invalid command (expected parameter write: 22)' };
    }

    // Extract page and param, calculate sysex_id
    const page = bytes[7];
    const param = bytes[8];
    const sysexId = (page << 7) | param;

    // Extract value bytes and decode (MSB first)
    const valBytes = [bytes[9], bytes[10], bytes[11], bytes[12]];
    const value = decodeValue(valBytes);

    return {
      valid: true,
      sysexId,
      value,
      page,
      param
    };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

/**
 * Format a SysEx hex string (add/remove spaces, uppercase)
 * @param {string} hexString - Input hex string
 * @param {boolean} compact - If true, remove spaces; if false, add spaces
 * @returns {string} Formatted hex string
 */
export function formatSysEx(hexString, compact = false) {
  // Normalize: remove all spaces and convert to uppercase
  const normalized = hexString.replace(/\s+/g, '').toUpperCase();

  if (compact) {
    return normalized;
  }

  // Add spaces between each byte pair
  const formatted = [];
  for (let i = 0; i < normalized.length; i += 2) {
    formatted.push(normalized.substr(i, 2));
  }
  return formatted.join(' ');
}

// ============================================================================
// Legacy compatibility - getChunkAndLocal for preset data (NOT for 0x22)
// ============================================================================

/** Parameters per chunk (for preset data only, not 0x22) */
const PARAMS_PER_CHUNK = 50;

/**
 * Calculate chunk number and local offset from parameter offset
 * NOTE: This is for PRESET DATA only, not for 0x22 LIVE writes!
 * @param {number} offset - Parameter offset (0-471)
 * @returns {{chunk: number, local: number}} Chunk and local offset
 */
export function getChunkAndLocal(offset) {
  const chunk = Math.floor(offset / PARAMS_PER_CHUNK);
  const local = offset % PARAMS_PER_CHUNK;
  return { chunk, local };
}
