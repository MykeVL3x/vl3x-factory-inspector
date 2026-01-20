/**
 * constants.js - Application constants for VL3X Inspector
 * Extracted from monolithic index.html for modular architecture
 */

// Guitar effect subtabs (12 total)
export const GUITAR_SUBS = [
  'Amp',
  'Drive',
  'Delay',
  'Reverb',
  'Comp',
  'Wah',
  'uMod',
  'Octaver',
  'Rhythmic',
  'Buttonmap',
  'Expr Pedal',
  'Preset'
];

// Vocal effect subtabs (12 total)
export const VOCAL_SUBS = [
  'Harmony',
  'Double',
  'Delay',
  'Reverb',
  'HardTune',
  'Synth',
  'Transducer',
  'uMod',
  'Choir',
  'Rhythmic',
  'Stutter',
  'Buttonmap'
];

// Main category tabs for preset view
export const CATEGORIES = {
  vocal_params: 'Vocal',
  guitar_params: 'Guitar',
  looper: 'Looper',
  pedal_control: 'Expr Pedal'
};

// Setup view categories
export const SETUP_CATEGORIES = {
  INPUT: 'Input',
  OUTPUT: 'Output',
  GUITAR: 'Guitar',
  MIDI: 'MIDI',
  TONE: 'Tone',
  SYSTEM: 'System'
};

// Effects view groupings - maps group name to effect subtabs
export const EFFECTS_GROUPS = {
  'Pitch/Harmony': ['Harmony', 'HardTune', 'Octaver'],
  'Delay': ['Delay'],
  'Reverb': ['Reverb'],
  'Modulation': ['uMod', 'Rhythmic'],
  'Tone/EQ': ['Amp', 'Transducer'],
  'Dynamics': ['Comp'],
  'Drive': ['Drive'],
  'Expression': ['Wah', 'Expr Pedal'],
  'Double/Choir': ['Double', 'Choir'],
  'Synth': ['Synth']
};

// Pan parameter offsets (8 total)
export const PAN_PARAM_OFFSETS = [341, 343, 345, 347, 349, 351, 353, 355];

// Global preset threshold (490-494 are factory GBL presets)
export const GLOBAL_PRESET_THRESHOLD = 490;

// Total parameters and presets
export const TOTAL_PARAMETERS = 472;
export const TOTAL_PRESETS = 259;
