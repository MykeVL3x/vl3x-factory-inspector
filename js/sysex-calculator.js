/**
 * sysex-calculator.js - VL3X SysEx message generator and parser
 *
 * Generates exact SysEx messages for VL3X parameter control.
 * Uses the discovered encoding format from reverse engineering.
 *
 * IMPORTANT: VL3X uses sysex_id (not chunk/offset) for 0x22 parameter writes.
 * The sysex_id is a separate field in the reference data, and the page/param
 * are calculated as: page = sysex_id >> 7, param = sysex_id & 0x7F
 */

// ============================================================================
// Constants
// ============================================================================

/** Scale factor for value encoding (2^21) */
export const SCALE_FACTOR = 2097152;

/** TC Helicon manufacturer ID */
export const TC_ID = [0x00, 0x01, 0x38];

/** Device ID (0 = all devices) */
export const DEVICE_ID = 0x00;

/** VL3X Model ID */
export const MODEL_ID = 0x6D;

/** Parameter Write command */
export const CMD_PARAM_WRITE = 0x22;

/** Parameters per chunk (used for preset data, not parameter writes) */
const PARAMS_PER_CHUNK = 50;

// ============================================================================
// Offset to SysEx ID Mapping
// ============================================================================

/**
 * Mapping from preset offset (0-471) to sysex_id for 0x22 parameter writes.
 * Generated from gold_standard_reference.json preset_parameters.by_offset.
 * Not all offsets have a known sysex_id (375 of 472 mapped).
 */
export const OFFSET_TO_SYSEX_ID = {
  0: 33, 1: 84, 2: 85, 3: 86, 4: 87, 5: 88, 6: 89, 7: 90,
  8: 91, 9: 92, 10: 94, 11: 95, 12: 96, 13: 97, 14: 98, 15: 99,
  16: 100, 17: 101, 18: 102, 19: 104, 20: 105, 22: 107, 23: 108, 25: 110,
  26: 111, 27: 112, 29: 126, 30: 127, 31: 128, 32: 129, 33: 130, 34: 139,
  35: 140, 36: 141, 37: 142, 38: 145, 39: 147, 40: 148, 41: 149, 42: 150,
  43: 151, 44: 152, 45: 153, 46: 154, 47: 155, 48: 157, 49: 159, 50: 160,
  51: 161, 52: 162, 53: 163, 54: 164, 55: 165, 56: 166, 57: 168, 58: 170,
  59: 171, 60: 172, 61: 173, 62: 174, 63: 175, 64: 176, 65: 177, 66: 179,
  67: 181, 68: 182, 69: 183, 70: 184, 71: 185, 72: 186, 73: 187, 74: 188,
  75: 190, 76: 192, 77: 193, 78: 196, 79: 197, 80: 214, 81: 215, 82: 216,
  83: 217, 84: 218, 85: 219, 86: 220, 87: 221, 88: 222, 89: 223, 90: 224,
  91: 225, 92: 226, 93: 227, 94: 228, 95: 229, 96: 230, 97: 231, 98: 232,
  99: 233, 100: 234, 101: 235, 102: 236, 103: 239, 104: 242, 105: 243, 106: 244,
  107: 245, 108: 246, 109: 247, 110: 250, 111: 251, 112: 252, 113: 970, 114: 971,
  115: 253, 116: 254, 117: 255, 118: 256, 119: 259, 120: 260, 121: 261, 122: 262,
  123: 263, 124: 264, 125: 267, 126: 268, 127: 269, 128: 972, 129: 973, 130: 270,
  131: 271, 132: 272, 133: 273, 134: 274, 135: 275, 136: 276, 137: 277, 138: 278,
  139: 279, 140: 280, 141: 281, 142: 282, 143: 283, 144: 284, 145: 285, 146: 286,
  147: 287, 148: 288, 149: 289, 150: 290, 151: 291, 152: 292, 153: 293, 154: 294,
  155: 295, 156: 296, 157: 297, 158: 298, 159: 299, 160: 300, 161: 974, 162: 975,
  163: 301, 164: 302, 165: 303, 166: 304, 168: 306, 169: 307, 170: 308, 171: 309,
  172: 310, 173: 311, 174: 312, 175: 313, 176: 314, 177: 315, 178: 316, 179: 317,
  180: 318, 181: 319, 182: 320, 183: 321, 184: 322, 185: 323, 186: 324, 187: 325,
  188: 326, 189: 327, 190: 328, 191: 329, 192: 330, 193: 331, 194: 332, 195: 333,
  196: 334, 197: 335, 198: 336, 199: 337, 200: 338, 201: 339, 202: 340, 203: 341,
  204: 342, 205: 343, 206: 344, 207: 345, 208: 346, 209: 347, 210: 348, 211: 349,
  212: 350, 213: 351, 214: 352, 215: 353, 216: 354, 217: 355, 218: 356, 219: 357,
  220: 662, 221: 663, 222: 664, 223: 665, 224: 666, 225: 667, 226: 668, 227: 669,
  228: 670, 229: 671, 230: 672, 236: 694, 237: 695, 238: 696, 239: 697, 240: 698,
  241: 699, 242: 700, 243: 701, 244: 702, 245: 703, 246: 704, 247: 705, 248: 706,
  249: 707, 250: 708, 251: 709, 252: 710, 253: 711, 254: 712, 255: 713, 256: 714,
  257: 715, 258: 721, 259: 722, 260: 723, 261: 724, 262: 725, 263: 726, 264: 727,
  265: 728, 266: 729, 267: 730, 268: 731, 269: 732, 270: 734, 271: 735, 272: 736,
  273: 737, 274: 738, 275: 739, 276: 740, 277: 742, 279: 744, 280: 747, 281: 748,
  282: 773, 283: 774, 284: 775, 285: 776, 286: 777, 287: 778, 288: 779, 289: 780,
  290: 781, 291: 782, 292: 783, 317: 808, 318: 809, 319: 812, 320: 821, 321: 822,
  322: 827, 323: 828, 324: 829, 325: 830, 326: 831, 327: 833, 328: 834, 329: 835,
  330: 836, 331: 838, 332: 839, 333: 849, 334: 850, 335: 851, 336: 852, 337: 853,
  338: 854, 339: 866, 340: 867, 341: 868, 342: 869, 343: 870, 344: 871, 345: 872,
  346: 873, 347: 874, 348: 875, 349: 876, 350: 877, 351: 878, 352: 879, 353: 880,
  354: 881, 355: 882, 356: 883, 357: 884, 358: 885, 365: 305, 373: 901, 374: 902,
  375: 903, 376: 904, 377: 905, 378: 906, 379: 907, 380: 908, 382: 909, 383: 910,
  384: 911, 385: 912, 388: 964, 389: 965, 390: 966, 392: 1132,
  393: 1135, 394: 987, 395: 988, 396: 989, 397: 990, 398: 991, 399: 992, 406: 1001,
  407: 1002, 408: 1003, 409: 1004, 410: 1005, 411: 1006, 442: 1046, 443: 1047, 444: 1048,
  445: 1049, 446: 1050, 447: 1051, 448: 1052, 449: 1053, 450: 1054, 451: 1055, 453: 1057,
  454: 1058, 455: 1059, 456: 1060, 457: 1061, 458: 1062, 459: 1063, 460: 1064, 461: 1065,
  462: 1066, 463: 1067, 464: 1068, 465: 1069, 469: 133, 470: 135, 471: 137,
};

/**
 * Mapping from system parameter offset (0-149) to sysex_id for 0x22 parameter writes.
 * System parameters use a DIFFERENT offset namespace than preset parameters.
 * Generated from gold_standard_reference.json system_parameters.by_offset.
 *
 * IMPORTANT: Same offset number = DIFFERENT parameter!
 *   - Preset offset 4 = Guitar Amp Hi Freq (sysex_id 87)
 *   - System offset 4 = TUNER REFERENCE (sysex_id 3)
 */
export const SYSTEM_OFFSET_TO_SYSEX_ID = {
  0: 1071,   // SYSTEM.CONTRAST (value * 10 = percent)
  4: 3,      // SYSTEM.TUNER REFERENCE (encoded Hz)
  5: 977,    // SYSTEM.HIT BEHAVIOR
  7: 4,      // SYSTEM.GLOBAL KEY/SCALE
  8: 5,      // SYSTEM.GLOBAL TEMPO
  59: 146,   // SYSTEM.GLOBAL NATPLAY SOURCE
  76: 979,   // SYSTEM.AUX IN TYPE
  121: 1044, // SYSTEM.ALL GUITAR FX GLOBAL
  122: 1045, // SYSTEM.GLOBAL PRESET (value + 512 = preset number)
  128: 1087, // SYSTEM.MIX ROOMSENSE TO NP
  129: 1089, // SYSTEM.MIX SCREEN TIMEOUT (3-10 seconds, 11 = OFF)
};

/**
 * Reverse mapping: sysex_id to preset offset (built at module load time)
 */
export const SYSEX_ID_TO_OFFSET = Object.fromEntries(
  Object.entries(OFFSET_TO_SYSEX_ID).map(([offset, sysexId]) => [sysexId, parseInt(offset)])
);

/**
 * Reverse mapping: sysex_id to system offset (built at module load time)
 */
export const SYSEX_ID_TO_SYSTEM_OFFSET = Object.fromEntries(
  Object.entries(SYSTEM_OFFSET_TO_SYSEX_ID).map(([offset, sysexId]) => [sysexId, parseInt(offset)])
);

// ============================================================================
// Core Functions
// ============================================================================

/**
 * Get sysex_id for a given preset parameter offset
 * @param {number} offset - Parameter offset (0-471)
 * @returns {number|null} sysex_id or null if not mapped
 */
export function getSysexId(offset) {
  return OFFSET_TO_SYSEX_ID[offset] ?? null;
}

/**
 * Get sysex_id for a given system parameter offset
 * System parameters use a separate offset namespace (0-149) from preset parameters.
 * @param {number} offset - System parameter offset (0-149)
 * @returns {number|null} sysex_id or null if not mapped
 */
export function getSystemSysexId(offset) {
  return SYSTEM_OFFSET_TO_SYSEX_ID[offset] ?? null;
}

/**
 * Get offset for a given sysex_id
 * @param {number} sysexId - SysEx ID
 * @returns {number|null} offset or null if not mapped
 */
export function getOffsetFromSysexId(sysexId) {
  return SYSEX_ID_TO_OFFSET[sysexId] ?? null;
}

/**
 * Calculate page and param from sysex_id
 * @param {number} sysexId - SysEx ID
 * @returns {{page: number, param: number}} Page and param values
 */
export function getPageAndParam(sysexId) {
  const page = sysexId >> 7;
  const param = sysexId & 0x7F;
  return { page, param };
}

/**
 * Calculate sysex_id from page and param
 * @param {number} page - Page number
 * @param {number} param - Parameter within page
 * @returns {number} sysex_id
 */
export function getSysexIdFromPageParam(page, param) {
  return (page << 7) | param;
}

/**
 * Calculate chunk number and local offset from parameter offset
 * NOTE: This is for preset data storage (0x21 chunks), NOT for 0x22 parameter writes.
 * For 0x22 writes, use getSysexId() and getPageAndParam() instead.
 * @param {number} offset - Parameter offset (0-471)
 * @returns {{chunk: number, local: number}} Chunk and local offset
 * @deprecated Use getSysexId() and getPageAndParam() for parameter writes
 */
export function getChunkAndLocal(offset) {
  const chunk = Math.floor(offset / PARAMS_PER_CHUNK);
  const local = offset % PARAMS_PER_CHUNK;
  return { chunk, local };
}

/**
 * Encode a parameter value into 4 7-bit bytes
 * @param {number} value - Parameter value (can be negative)
 * @returns {number[]} Array of 4 bytes, each < 128
 */
export function encodeValue(value) {
  // Truncate to integer
  value = Math.trunc(value);

  // Scale the value
  let scaled = value * SCALE_FACTOR;

  // Handle negative values with 28-bit two's complement
  if (scaled < 0) {
    scaled = scaled & 0x0FFFFFFF;
  }

  // Extract 4 7-bit bytes (LSB first)
  const b0 = scaled & 0x7F;
  const b1 = (scaled >> 7) & 0x7F;
  const b2 = (scaled >> 14) & 0x7F;
  const b3 = (scaled >> 21) & 0x7F;

  return [b0, b1, b2, b3];
}

/**
 * Decode 4 7-bit bytes back to a parameter value
 * @param {number[]} bytes - Array of 4 bytes
 * @returns {number} Decoded parameter value
 */
export function decodeValue(bytes) {
  if (!Array.isArray(bytes) || bytes.length !== 4) {
    return 0;
  }

  // Combine bytes (LSB first)
  let scaled = bytes[0] | (bytes[1] << 7) | (bytes[2] << 14) | (bytes[3] << 21);

  // Handle signed values (check if sign bit set in 28-bit range)
  if (scaled >= (1 << 27)) {
    scaled = scaled - (1 << 28);
  }

  // Unscale
  return Math.round(scaled / SCALE_FACTOR);
}

/**
 * Generate complete SysEx message for a parameter write
 * @param {number} offset - Parameter offset (0-471)
 * @param {number} value - Parameter value
 * @returns {string} Hex string with spaces (e.g., "F0 00 01 38 ..."), or error message
 */
export function makeSysEx(offset, value) {
  // Look up sysex_id from offset
  const sysexId = getSysexId(offset);

  if (sysexId === null) {
    // Return error indicator for unmapped offsets
    return `ERROR: No sysex_id mapping for offset ${offset}`;
  }

  // Calculate page and param from sysex_id
  const { page, param } = getPageAndParam(sysexId);
  const valBytes = encodeValue(value);

  // Build message bytes
  const bytes = [
    0xF0,           // SysEx start
    ...TC_ID,       // Manufacturer ID (3 bytes)
    DEVICE_ID,      // Device ID
    MODEL_ID,       // Model ID
    CMD_PARAM_WRITE, // Command
    page,           // Page (from sysex_id >> 7)
    param,          // Param (from sysex_id & 0x7F)
    ...valBytes,    // Value (4 bytes)
    0xF7            // SysEx end
  ];

  // Format as hex string with spaces
  return bytes.map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
}

/**
 * Generate complete SysEx message for a SYSTEM parameter write
 * System parameters use a separate offset namespace and sysex_id mapping.
 * @param {number} offset - System parameter offset (0-149)
 * @param {number} value - Parameter value
 * @returns {string} Hex string with spaces (e.g., "F0 00 01 38 ..."), or error message
 */
export function makeSysExForSystem(offset, value) {
  // Look up sysex_id from system offset
  const sysexId = getSystemSysexId(offset);

  if (sysexId === null) {
    // Return error indicator for unmapped offsets
    return `ERROR: No sysex_id mapping for system offset ${offset}`;
  }

  // Calculate page and param from sysex_id
  const { page, param } = getPageAndParam(sysexId);
  const valBytes = encodeValue(value);

  // Build message bytes
  const bytes = [
    0xF0,           // SysEx start
    ...TC_ID,       // Manufacturer ID (3 bytes)
    DEVICE_ID,      // Device ID
    MODEL_ID,       // Model ID
    CMD_PARAM_WRITE, // Command
    page,           // Page (from sysex_id >> 7)
    param,          // Param (from sysex_id & 0x7F)
    ...valBytes,    // Value (4 bytes)
    0xF7            // SysEx end
  ];

  // Format as hex string with spaces
  return bytes.map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
}

/**
 * Parse a SysEx hex string and extract offset/value
 * @param {string} hexString - SysEx message (with or without spaces)
 * @returns {object} Parsed result with valid, offset, value, sysexId, page, param, or error
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

    // Extract page and param (these are the raw bytes from the message)
    const page = bytes[7];
    const param = bytes[8];

    // Calculate sysex_id from page and param
    const sysexId = getSysexIdFromPageParam(page, param);

    // Look up offset from sysex_id
    const offset = getOffsetFromSysexId(sysexId);

    // Extract value bytes and decode
    const valBytes = [bytes[9], bytes[10], bytes[11], bytes[12]];
    const value = decodeValue(valBytes);

    return {
      valid: true,
      offset,       // May be null if sysex_id not in mapping
      value,
      sysexId,      // The calculated sysex_id
      page,         // Raw page byte
      param         // Raw param byte
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
