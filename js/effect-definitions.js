/**
 * effect-definitions.js - Effect metadata for effect-centric view
 * Defines effects with their key parameters for sound design
 */

// All Effect Definitions by subtab name
export const EFFECT_DEFINITIONS = {
  // === PITCH EFFECTS ===
  'Harmony': {
    displayName: 'Vocal Harmony',
    domain: 'vocal',
    hitControlOffset: 285,
    typeOffset: 29,
    typeEnum: 'harmony_style',
    keyParams: [
      { offset: 32, label: 'HUMANIZE', unit: '%' },
      { offset: 33, label: 'VIBRATO', unit: '%' },
      { offset: 357, label: 'LEVEL', unit: 'dB' }
    ],
    advancedOffsets: [30, 31, 336, 340, 342, 344, 346, 341, 343, 345, 347]
  },
  'HardTune': {
    displayName: 'HardTune',
    domain: 'vocal',
    hitControlOffset: 288,
    typeOffset: 271,
    typeEnum: 'hardtune_style',
    keyParams: [
      { offset: 273, label: 'AMOUNT', unit: '%' },
      { offset: 275, label: 'RATE', unit: '%' },
      { offset: 276, label: 'SHIFT', unit: 'st' },
      { offset: 277, label: 'GENDER', unit: '' }
    ],
    advancedOffsets: [272, 274, 278, 279, 280]
  },
  'Octaver': {
    displayName: 'Guitar Octaver',
    domain: 'guitar',
    hitControlOffset: 301,
    typeOffset: 236,
    typeEnum: 'octaver_type',
    keyParams: [
      { offset: 237, label: 'MIX', unit: '%' },
      { offset: 238, label: 'SHIFT', unit: 'st' }
    ],
    advancedOffsets: []
  },

  // === TONE EFFECTS ===
  'Amp': {
    displayName: 'Guitar Amp',
    domain: 'guitar',
    hitControlOffset: 300,
    typeOffset: 0,
    typeEnum: 'amp_style',
    keyParams: [
      { offset: 263, label: 'PREGAIN', unit: '' },
      { offset: 259, label: 'POSTGAIN', unit: '' },
      { offset: 261, label: 'MODE', unit: '' }
    ],
    advancedOffsets: [258, 262, 267, 268, 269]
  },
  'Drive': {
    displayName: 'Guitar Drive',
    domain: 'guitar',
    hitControlOffset: 295,
    typeOffset: 264,
    typeEnum: 'drive_style',
    keyParams: [
      { offset: 266, label: 'PREGAIN', unit: '' },
      { offset: 265, label: 'POSTGAIN', unit: '' }
    ],
    advancedOffsets: []
  },
  'Comp': {
    displayName: 'Guitar Comp',
    domain: 'guitar',
    hitControlOffset: 299,
    typeOffset: 252,
    typeEnum: 'comp_style',
    keyParams: [
      { offset: 253, label: 'RATIO', unit: '' },
      { offset: 254, label: 'THRESHOLD', unit: '' },
      { offset: 257, label: 'MAKEUP', unit: '' }
    ],
    advancedOffsets: [255, 256]
  },
  'Transducer': {
    displayName: 'Transducer',
    domain: 'vocal',
    hitControlOffset: 287,
    typeOffset: 220,
    typeEnum: 'transducer_style',
    keyParams: [
      { offset: 221, label: 'ROUTING', unit: '' },
      { offset: 222, label: 'DISTORT', unit: '' }
    ],
    advancedOffsets: [223, 224, 225, 226, 228, 229, 230]
  },
  'Wah': {
    displayName: 'Guitar Wah',
    domain: 'guitar',
    hitControlOffset: 294,
    typeOffset: 239,
    typeEnum: 'wah_style',
    keyParams: [
      { offset: 242, label: 'SENSITIVITY', unit: '' },
      { offset: 246, label: 'RESONANCE', unit: '' }
    ],
    advancedOffsets: [241, 243, 244, 245, 247, 248, 249, 250, 251]
  },

  // === TIME EFFECTS ===
  'Delay': {
    displayName: 'Vocal Delay',
    domain: 'vocal',
    hitControlOffset: 283,
    typeOffset: 134,
    typeEnum: 'delay_style_voice',
    keyParams: [
      { offset: 136, label: 'DIV L', unit: '' },
      { offset: 144, label: 'FEEDBACK', unit: '%' }
    ],
    advancedOffsets: [133, 135, 137, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149]
  },
  'Reverb': {
    displayName: 'Vocal Reverb',
    domain: 'vocal',
    hitControlOffset: 284,
    typeOffset: 177,
    typeEnum: 'reverb_style_voice',
    keyParams: [
      { offset: 179, label: 'DECAY', unit: '' },
      { offset: 181, label: 'DIFFUSE', unit: '' }
    ],
    advancedOffsets: [182, 183, 184, 185, 186, 187, 188, 189, 203, 204, 205, 206]
  },

  // === TEXTURE EFFECTS ===
  'Double': {
    displayName: 'Doubling',
    domain: 'vocal',
    hitControlOffset: 286,
    typeOffset: 80,
    typeEnum: 'double_style',
    keyParams: [
      { offset: 82, label: 'HUMANIZE', unit: '' },
      { offset: 356, label: 'LEVEL', unit: '' }
    ],
    advancedOffsets: [81, 83, 84, 85, 86, 87]
  },
  'Choir': {
    displayName: 'Choir',
    domain: 'vocal',
    hitControlOffset: 289,
    typeOffset: 78,
    typeEnum: 'choir_style',
    keyParams: [
      { offset: 79, label: 'LEVEL', unit: '' }
    ],
    advancedOffsets: []
  },
  'uMod': {
    displayName: 'Mod Effects',
    domain: 'vocal',
    hitControlOffset: 282,
    typeOffset: 103,
    typeEnum: 'umod_style_voice',
    keyParams: [
      { offset: 110, label: 'SPEED', unit: '' },
      { offset: 114, label: 'DEPTH', unit: '' }
    ],
    advancedOffsets: [104, 105, 106, 107, 108, 109, 111, 112, 113, 115, 116, 117]
  },
  'Rhythmic': {
    displayName: 'Rhythmic',
    domain: 'vocal',
    hitControlOffset: 290,
    typeOffset: 317,
    typeEnum: 'rhythmic_style',
    keyParams: [
      { offset: 318, label: 'DIVISION', unit: '' },
      { offset: 319, label: 'DEPTH', unit: '' }
    ],
    advancedOffsets: [320]
  },
  'Synth': {
    displayName: 'Vocal Synth',
    domain: 'vocal',
    hitControlOffset: 292,
    typeOffset: 211,
    typeEnum: 'synth_style',
    keyParams: [
      { offset: 212, label: 'LEAD MIX', unit: '' },
      { offset: 216, label: 'GENDER', unit: '' }
    ],
    advancedOffsets: [213, 214, 215, 217, 218, 219, 358, 392, 393]
  },
  'Stutter': {
    displayName: 'Stutter',
    domain: 'vocal',
    hitControlOffset: 291,
    typeOffset: 322,
    typeEnum: 'stutter_style',
    keyParams: [
      { offset: 323, label: 'DIVISION', unit: '' },
      { offset: 324, label: 'CAPTURE', unit: '' }
    ],
    advancedOffsets: [325, 326]
  }
};

// Legacy export for backward compatibility
export const PITCH_HARMONY_EFFECTS = {
  'Harmony': EFFECT_DEFINITIONS['Harmony'],
  'HardTune': EFFECT_DEFINITIONS['HardTune'],
  'Octaver': EFFECT_DEFINITIONS['Octaver']
};

// HitControl status values
export const HIT_STATUS = {
  0: { label: 'OFF', class: 'off', isActive: false },
  1: { label: 'ON', class: 'on', isActive: true },
  2: { label: 'TOGGLE', class: 'toggle', isActive: true },
  3: { label: 'HIT', class: 'hit', isActive: true }
};

/**
 * Get effect status from HitControl value
 */
export function getEffectStatus(hitValue) {
  return HIT_STATUS[hitValue] || HIT_STATUS[0];
}
