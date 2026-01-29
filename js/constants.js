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
  buttonmap: 'ButtonMap',
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

// Effects view groupings - 4 high-level categories
export const EFFECTS_GROUPS = {
  'Pitch': ['Harmony', 'HardTune', 'Octaver'],
  'Tone': ['Amp', 'Drive', 'Comp', 'Transducer', 'Wah'],
  'Time': ['Delay', 'Reverb'],
  'Texture': ['Double', 'Choir', 'uMod', 'Rhythmic', 'Synth', 'Stutter']
};

// Category descriptions for Effects View (educational, human, performer-focused)
export const EFFECTS_DESCRIPTIONS = {
  'Pitch': {
    headline: 'How Factory Presets Bend Notes',
    text: 'Explore how VL3X designers use harmony, tuning correction, and octave shifts. See which presets layer vocal and guitar pitch effects together. Getting pitch right is essential for vocals that cut through the mix.',
    benefits: [
      { strong: 'Harmony Styles', text: 'Discover which interval combinations create lush backing vocals vs. tight unisons' },
      { strong: 'HardTune Character', text: 'See how subtle correction differs from full robotic effect in real presets' },
      { strong: 'Vocal + Guitar Layers', text: 'Learn when stacking harmonies with octaver creates power vs. mud' }
    ]
  },
  'Tone': {
    headline: 'How Factory Presets Shape Character',
    text: 'Your tone is your fingerprint. Study the amp models, drive levels, and compression settings that define each preset. Understanding gain staging helps you dial in sounds that feel right under your fingers.',
    benefits: [
      { strong: 'Amp Personalities', text: 'See why certain presets use clean Fender-style vs. crunchy Marshall-style voicings' },
      { strong: 'Drive Stacking', text: 'Learn how designers balance amp gain with pedal drive for responsive feel' },
      { strong: 'Voice Shaping', text: 'Discover how transducer effects transform vocals from intimate to megaphone-loud' }
    ]
  },
  'Time': {
    headline: 'How Factory Presets Create Space',
    text: 'Delay and reverb place you in an environment. A tight room feels intimate. A long hall feels epic. See how designers use time-based effects to set the emotional stage for each preset.',
    benefits: [
      { strong: 'Rhythmic Delays', text: 'Learn which subdivisions create groove vs. wash for different tempos' },
      { strong: 'Reverb Character', text: 'See how short plates differ from long halls in creating presence vs. distance' },
      { strong: 'The Mix Balance', text: 'Understand why some presets push effects forward while others keep them subtle' }
    ]
  },
  'Texture': {
    headline: 'How Factory Presets Add Layers',
    text: 'One voice can sound like many. Doubling adds width. Choir adds mass. Modulation adds shimmer. See how designers use these effects to make a solo performer sound like a full production.',
    benefits: [
      { strong: 'Subtle vs. Obvious', text: 'Learn when light doubling beats heavy choir for natural thickness' },
      { strong: 'Movement & Life', text: 'See how modulation rate and depth add interest without making listeners seasick' },
      { strong: 'Creative Textures', text: 'Discover how synth and stutter effects turn voice into instrument' }
    ]
  }
};

// Pan parameter offsets (8 total)
export const PAN_PARAM_OFFSETS = [341, 343, 345, 347, 349, 351, 353, 355];

// Global preset threshold (490-494 are factory GBL presets)
export const GLOBAL_PRESET_THRESHOLD = 490;

// Total parameters and presets
export const TOTAL_PARAMETERS = 472;
export const TOTAL_PRESETS = 259;
