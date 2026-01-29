/**
 * preset-layouts.js - 4-column grid layouts for effect subcategories
 */

const VOCAL_HARMONY = {
  rows: [
    [{ offset: 29, label: 'TYPE/STYLE' }, { offset: 336, label: 'LEAD LEVEL' }, { offset: 357, label: 'LEVEL' }, { offset: 285, label: 'HIT CONTROL' }],
    [{ offset: 30, label: 'HUMAN STYLE' }, { offset: 32, label: 'HUMANIZE' }, { offset: 31, label: 'VIB STYLE' }, { offset: 33, label: 'VIBRATO' }],
    [{ offset: 38, label: 'NATPLAY SRC' }, { offset: 41, label: 'TUNING' }],
    [{ offset: 42, label: 'MODE V1' }, { offset: 51, label: 'MODE V2' }, { offset: 60, label: 'MODE V3' }, { offset: 69, label: 'MODE V4' }],
    [{ offset: 43, label: 'V1 VOICING' }],
    [{ offset: 340, label: 'V1 LEVEL' }, { offset: 342, label: 'V2 LEVEL' }, { offset: 344, label: 'V3 LEVEL' }, { offset: 346, label: 'V4 LEVEL' }],
    [{ offset: 49, label: 'V1 GENDER' }, { offset: 58, label: 'V2 GENDER' }, { offset: 67, label: 'V3 GENDER' }, { offset: 76, label: 'V4 GENDER' }],
    [{ offset: 341, label: 'V1 PAN' }, { offset: 343, label: 'V2 PAN' }, { offset: 345, label: 'V3 PAN' }, { offset: 347, label: 'V4 PAN' }],
    [{ offset: 50, label: 'V1 PORTA' }, { offset: 59, label: 'V2 PORTA' }, { offset: 68, label: 'V3 PORTA' }, { offset: 77, label: 'V4 PORTA' }],
    [{ offset: 48, label: 'V1 SMOOTH' }, { offset: 57, label: 'V2 SMOOTH' }, { offset: 66, label: 'V3 SMOOTH' }, { offset: 75, label: 'V4 SMOOTH' }],
    [{ offset: 471, label: 'HOLD RELEASE' }],
    [{ offset: 20, label: 'LOW GAIN' }, { offset: 19, label: 'LOW FREQ' }, { offset: 23, label: 'HIGH GAIN' }, { offset: 22, label: 'HIGH FREQ' }],
    [{ offset: 26, label: 'MID GAIN' }, { offset: 25, label: 'MID FREQ' }, { offset: 27, label: 'MID BW' }],
    [{ offset: 445, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Delay layout - 10 rows
 */
const VOCAL_DELAY = {
  rows: [
    [{ offset: 134, label: 'TYPE' }, { offset: 135, label: 'SOURCE' }, { offset: 133, label: 'TEMPO' }, { offset: 283, label: 'HIT CONTROL' }],
    [{ offset: 136, label: 'DIV L' }, { offset: 137, label: 'DIV R' }, { offset: 138, label: 'DELAY L' }, { offset: 139, label: 'DELAY R' }],
    [{ offset: 140, label: 'FEEDBACK L' }, { offset: 141, label: 'FEEDBACK R' }, { offset: 142, label: 'XFB L TO R' }, { offset: 143, label: 'XFB TO L' }],
    [{ offset: 144, label: 'FEEDBACK' }, { offset: 145, label: 'TRAILS' }],
    [{ offset: 146, label: 'FILTERSTYLE' }, { offset: 147, label: 'LOW CUT' }, { offset: 148, label: 'HI CUT' }, { offset: 149, label: 'EQ INSERT' }],
    [{ offset: 334, label: 'LEAD TO DLY' }, { offset: 366, label: 'HARM TO DLY' }, { offset: 368, label: 'uMOD TO DLY' }, { offset: 367, label: 'CHOIR TO DLY' }],
    [{ offset: 169, label: 'DUCKING' }, { offset: 170, label: 'DUCK THRES' }, { offset: 171, label: 'DUCK AMT' }, { offset: 172, label: 'DUCK TIME' }],
    [{ offset: 375, label: 'LEVEL' }, { offset: 376, label: 'WIDTH' }, { offset: 365, label: 'PAN' }],
    [{ offset: 443, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Double layout - 10 rows
 */
const VOCAL_DOUBLE = {
  rows: [
    [{ offset: 80, label: 'TYPE' }],
    [{ offset: 81, label: 'HUMAN STYLE' }, { offset: 82, label: 'HUMANIZE' }],
    [{ offset: 348, label: 'V1 LEVEL' }, { offset: 350, label: 'V2 LEVEL' }, { offset: 352, label: 'V3 LEVEL' }, { offset: 354, label: 'V4 LEVEL' }],
    [{ offset: 349, label: 'V1 PAN' }, { offset: 351, label: 'V2 PAN' }, { offset: 353, label: 'V3 PAN' }, { offset: 355, label: 'V4 PAN' }],
    [{ offset: 85, label: 'V1 GENDER' }, { offset: 90, label: 'V2 GENDER' }, { offset: 95, label: 'V3 GENDER' }, { offset: 100, label: 'V4 GENDER' }],
    [{ offset: 83, label: 'V1 VOICING' }, { offset: 88, label: 'V2 VOICING' }, { offset: 93, label: 'V3 VOICING' }, { offset: 98, label: 'V4 VOICING' }],
    [{ offset: 84, label: 'V1 PORTA' }, { offset: 89, label: 'V2 PORTA' }, { offset: 94, label: 'V3 PORTA' }, { offset: 99, label: 'V4 PORTA' }],
    [{ offset: 86, label: 'V1 SMOOTH' }, { offset: 91, label: 'V2 SMOOTH' }, { offset: 96, label: 'V3 SMOOTH' }, { offset: 101, label: 'V4 SMOOTH' }],
    [{ offset: 337, label: 'LEAD LEVEL' }, { offset: 356, label: 'LEVEL' }, { offset: 286, label: 'HIT CONTROL' }],
    [{ offset: 446, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Reverb layout - 8 rows
 */
const VOCAL_REVERB = {
  rows: [
    [{ offset: 177, label: 'TYPE' }, { offset: 178, label: 'REVERB TYPE' }, { offset: 179, label: 'DECAY' }, { offset: 284, label: 'HIT CONTROL' }],
    [{ offset: 180, label: 'PREDELAY' }, { offset: 187, label: 'EARLY RFLCT' }, { offset: 188, label: 'TRAIL LEVEL' }, { offset: 189, label: 'DRY LEVEL' }],
    [{ offset: 182, label: 'LOCOLOR' }, { offset: 183, label: 'HICOLOR' }, { offset: 184, label: 'HIFACTOR' }, { offset: 181, label: 'DIFFUSE' }],
    [{ offset: 185, label: 'MODSPEED' }, { offset: 186, label: 'MODDEPTH' }],
    [{ offset: 203, label: 'DUCKING' }, { offset: 204, label: 'DUCK THRES' }, { offset: 205, label: 'DUCK AMT' }, { offset: 206, label: 'DUCK TIME' }],
    [{ offset: 335, label: 'LEAD TO REVERB' }, { offset: 363, label: 'HARM TO REVERB' }, { offset: 366, label: 'DELAY TO REVERB' }, { offset: 364, label: 'CHOIR TO REVERB' }],
    [{ offset: 377, label: 'LEVEL' }, { offset: 378, label: 'WIDTH' }],
    [{ offset: 444, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.HardTune layout - 6 rows
 */
const VOCAL_HARDTUNE = {
  rows: [
    [{ offset: 271, label: 'TYPE' }, { offset: 277, label: 'GENDER' }, { offset: 276, label: 'SHIFT' }, { offset: 288, label: 'HIT CONTROL' }],
    [{ offset: 272, label: 'KEY SOURCE' }, { offset: 275, label: 'RATE' }],
    [{ offset: 273, label: 'AMOUNT' }, { offset: 274, label: 'WINDOW' }],
    [{ offset: 279, label: 'MANUAL KEY' }],
    [{ offset: 280, label: 'MANUAL SCALE' }, { offset: 278, label: 'NOTE ENABLE' }],
    [{ offset: 448, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Synth layout - 4 rows
 */
const VOCAL_SYNTH = {
  rows: [
    [{ offset: 211, label: 'TYPE' }, { offset: 216, label: 'GENDER' }, { offset: 358, label: 'LEVEL' }, { offset: 292, label: 'HIT CONTROL' }],
    [{ offset: 213, label: 'CARRIER' }, { offset: 212, label: 'LEAD MIX' }, { offset: 217, label: 'NOTE SOURCE' }, { offset: 392, label: 'PORTAMENTO' }],
    [{ offset: 214, label: 'CARR SHIFT' }, { offset: 215, label: 'CARR MIX' }, { offset: 218, label: 'RES' }, { offset: 393, label: 'ESS LEVEL' }],
    [{ offset: 450, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Transducer layout - 5 rows
 */
const VOCAL_TRANSDUCER = {
  rows: [
    [{ offset: 220, label: 'TYPE' }, { offset: 221, label: 'ROUTING' }, { offset: 226, label: 'POST GAIN' }, { offset: 287, label: 'HIT CONTROL' }],
    [{ offset: 227, label: 'DISTORTION TYPE' }, { offset: 222, label: 'DISTORTION AMOUNT' }],
    [{ offset: 223, label: 'LOW CUT' }, { offset: 224, label: 'HIGH CUT' }, { offset: 28, label: 'THRESHOLD' }],
    [{ offset: 228, label: 'PRES GAIN' }, { offset: 229, label: 'PRES FC' }, { offset: 230, label: 'PRES BW' }],
    [{ offset: 447, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.uMod layout - 8 rows
 */
const VOCAL_UMOD = {
  rows: [
    [{ offset: 103, label: 'TYPE' }, { offset: 373, label: 'LEVEL' }, { offset: 282, label: 'HIT CONTROL' }],
    [{ offset: 110, label: 'SPEED' }, { offset: 113, label: 'DETUNE' }, { offset: 114, label: 'DEPTH' }],
    [{ offset: 374, label: 'WIDTH' }, { offset: 111, label: 'PHASE' }, { offset: 112, label: 'WAVE' }, { offset: 117, label: 'INV PHASE' }],
    [{ offset: 104, label: 'DELAY LEFT' }, { offset: 105, label: 'DELAY RIGHT' }, { offset: 115, label: 'LOW CUT' }, { offset: 116, label: 'HIGH CUT' }],
    [{ offset: 106, label: 'FEEDBACK L' }, { offset: 108, label: 'FEEDBACK R' }, { offset: 107, label: 'XFB L' }, { offset: 109, label: 'XFB R' }],
    [{ offset: 333, label: 'LEAD TO uMOD' }, { offset: 362, label: 'HARM TO uMOD' }],
    [{ offset: 338, label: 'LEAD LEVEL' }, { offset: 363, label: 'CHOIR TO uMOD' }],
    [{ offset: 442, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Choir layout - 3 rows
 */
const VOCAL_CHOIR = {
  rows: [
    [{ offset: 78, label: 'TYPE' }, { offset: 79, label: 'LEVEL' }, { offset: 289, label: 'HIT CONTROL' }],
    [{ offset: 359, label: 'LEAD TO CHOIR' }, { offset: 360, label: 'HARM TO CHOIR' }],
    [{ offset: 451, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Rhythmic layout - 3 rows
 */
const VOCAL_RHYTHMIC = {
  rows: [
    [{ offset: 317, label: 'TYPE' }, { offset: 320, label: 'TARGET' }, { offset: 319, label: 'DEPTH' }, { offset: 290, label: 'HIT CONTROL' }],
    [{ offset: 318, label: 'DIVISION' }, { offset: 321, label: 'WAVE TYPE' }],
    [{ offset: 449, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Stutter layout - 3 rows
 */
const VOCAL_STUTTER = {
  rows: [
    [{ offset: 322, label: 'TYPE' }, { offset: 323, label: 'DIVISION' }, { offset: 325, label: 'DIRECTION' }, { offset: 291, label: 'HIT CONTROL' }],
    [{ offset: 326, label: 'PATH' }, { offset: 324, label: 'CAPTURE' }],
    [{ offset: 450, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Amp layout - 9 rows
 */
const GUITAR_AMP = {
  rows: [
    [{ offset: 0, label: 'TYPE' }, { offset: 263, label: 'PREGAIN' }, { offset: 259, label: 'POSTGAIN' }, { offset: 300, label: 'HIT CONTROL' }],
    [{ offset: 11, label: 'LOW POST' }, { offset: 17, label: 'MID POST' }, { offset: 14, label: 'HIGH POST' }],
    [{ offset: 2, label: 'LO PRE' }, { offset: 8, label: 'MID PRE' }, { offset: 5, label: 'HI PRE' }],
    [{ offset: 1, label: 'LO F PRE' }, { offset: 7, label: 'MID F PRE' }, { offset: 4, label: 'HI F PRE' }],
    [{ offset: 263, label: 'PREGAIN' }, { offset: 259, label: 'POSTGAIN' }, { offset: 261, label: 'MODE' }, { offset: 258, label: 'AMP SAG' }],
    [{ offset: 10, label: 'LO F POST' }, { offset: 16, label: 'MID F POST' }, { offset: 13, label: 'HI F POST' }],
    [{ offset: 12, label: 'LO BW POST' }, { offset: 18, label: 'MID BW POST' }, { offset: 15, label: 'HI BW POST' }],
    [{ offset: 267, label: 'SPKR GAIN' }, { offset: 269, label: 'SPKR FC' }, { offset: 268, label: 'SPKR BW' }, { offset: 262, label: 'LOCUT FC' }],
    [{ offset: 458, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Drive layout - 2 rows
 */
const GUITAR_DRIVE = {
  rows: [
    [{ offset: 264, label: 'TYPE' }, { offset: 266, label: 'PREGAIN' }, { offset: 265, label: 'POST GAIN' }, { offset: 295, label: 'HIT CONTROL' }],
    [{ offset: 459, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Reverb layout - 7 rows
 */
const GUITAR_REVERB = {
  rows: [
    [{ offset: 190, label: 'TYPE' }, { offset: 192, label: 'DECAY' }, { offset: 201, label: 'LEVEL' }, { offset: 298, label: 'HIT CONTROL' }],
    [{ offset: 200, label: 'EARLY RFLCT' }, { offset: 202, label: 'TRAIL LEVEL' }, { offset: 193, label: 'PREDELAY' }, { offset: 207, label: 'DUCKING' }],
    [{ offset: 195, label: 'LOCOLOR' }, { offset: 196, label: 'HICOLOR' }, { offset: 197, label: 'HIFACTOR' }, { offset: 194, label: 'DIFFUSE' }],
    [{ offset: 198, label: 'MODSPEED' }, { offset: 199, label: 'MODDEPTH' }],
    [{ offset: 208, label: 'DUCK THRES' }, { offset: 209, label: 'DUCK AMT' }, { offset: 210, label: 'DUCK TIME' }],
    [{ offset: 385, label: 'WIDTH' }],
    [{ offset: 457, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Delay layout - 8 rows
 */
const GUITAR_DELAY = {
  rows: [
    [{ offset: 150, label: 'TYPE' }, { offset: 160, label: 'FEEDBACK' }, { offset: 382, label: 'LEVEL' }, { offset: 297, label: 'HIT CONTROL' }],
    [{ offset: 151, label: 'SOURCE' }, { offset: 133, label: 'TEMPO' }, { offset: 164, label: 'FILTERSTYLE' }, { offset: 173, label: 'DUCKING' }],
    [{ offset: 152, label: 'DIV L' }, { offset: 154, label: 'DELAY L' }, { offset: 153, label: 'DIV R' }, { offset: 155, label: 'DELAY R' }],
    [{ offset: 161, label: 'MODDEPTH' }, { offset: 162, label: 'MODSPEED' }],
    [{ offset: 174, label: 'DUCK THRES' }, { offset: 175, label: 'DUCK AMT' }, { offset: 176, label: 'DUCK TIME' }],
    [{ offset: 156, label: 'FEEDBACK L' }, { offset: 158, label: 'XFB L TO R' }, { offset: 157, label: 'FEEDBACK R' }, { offset: 159, label: 'XFB R TO L' }],
    [{ offset: 165, label: 'LOW CUT' }, { offset: 166, label: 'HIGH CUT' }, { offset: 168, label: 'WIDTH' }, { offset: 163, label: 'TRAILS' }],
    [{ offset: 456, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Comp layout - 3 rows
 */
const GUITAR_COMP = {
  rows: [
    [{ offset: 252, label: 'TYPE' }, { offset: 254, label: 'THRESHOLD' }, { offset: 253, label: 'RATIO' }, { offset: 299, label: 'HIT CONTROL' }],
    [{ offset: 255, label: 'ATTACK' }, { offset: 256, label: 'RELEASE' }, { offset: 257, label: 'MAKEUP GAIN' }],
    [{ offset: 460, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Wah layout - 4 rows
 */
const GUITAR_WAH = {
  rows: [
    [{ offset: 239, label: 'TYPE' }, { offset: 246, label: 'RESONANCE' }, { offset: 249, label: 'LEVEL' }, { offset: 294, label: 'HIT CONTROL' }],
    [{ offset: 240, label: 'TYPE' }, { offset: 244, label: 'FMAX' }, { offset: 242, label: 'SENSITIVITY' }, { offset: 243, label: 'RESPONSE' }],
    [{ offset: 241, label: 'ORDER' }],
    [{ offset: 463, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.uMod layout - 6 rows
 */
const GUITAR_UMOD = {
  rows: [
    [{ offset: 118, label: 'TYPE' }, { offset: 379, label: 'LEVEL' }, { offset: 296, label: 'HIT CONTROL' }],
    [{ offset: 125, label: 'SPEED' }, { offset: 128, label: 'DETUNE' }, { offset: 129, label: 'DEPTH' }, { offset: 381, label: 'DRY GAIN' }],
    [{ offset: 380, label: 'WIDTH' }, { offset: 126, label: 'PHASE' }, { offset: 127, label: 'WAVE' }, { offset: 132, label: 'INV PHASE' }],
    [{ offset: 119, label: 'DELAY LEFT' }, { offset: 120, label: 'DELAY RIGHT' }, { offset: 130, label: 'LOW CUT' }, { offset: 131, label: 'HIGH CUT' }],
    [{ offset: 121, label: 'FEEDBACK L' }, { offset: 123, label: 'FEEDBACK R' }, { offset: 122, label: 'XFB L' }, { offset: 124, label: 'XFB R' }],
    [{ offset: 455, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Octaver layout - 2 rows
 */
const GUITAR_OCTAVER = {
  rows: [
    [{ offset: 236, label: 'TYPE' }, { offset: 238, label: 'SHIFT' }, { offset: 237, label: 'MIX' }, { offset: 301, label: 'HIT CONTROL' }],
    [{ offset: 461, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Rhythmic layout - 3 rows
 */
const GUITAR_RHYTHMIC = {
  rows: [
    [{ offset: 327, label: 'TYPE' }, { offset: 329, label: 'DIVISION' }, { offset: 328, label: 'DEPTH' }, { offset: 302, label: 'HIT CONTROL' }],
    [{ offset: 332, label: 'TARGET' }, { offset: 331, label: 'TREM BPM' }, { offset: 330, label: 'WAVEFORM' }],
    [{ offset: 462, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Expr Pedal layout - 2 rows
 */
const GUITAR_EXPR_PEDAL = {
  rows: [
    [{ offset: 388, label: 'EXPRESSION PEDAL' }, { offset: 389, label: 'EXP MINPOS' }, { offset: 390, label: 'EXP MAXPOS' }],
    [{ offset: 465, label: 'GLOBAL' }]
  ]
};

/**
 * Vocal.Buttonmap layout - 5 rows
 */
const VOCAL_BUTTONMAP = {
  rows: [
    [{ offset: 394, label: 'uMOD' }, { offset: 395, label: 'DELAY' }, { offset: 396, label: 'REVERB' }],
    [{ offset: 406, label: 'MODE' }, { offset: 407, label: 'MODE' }, { offset: 408, label: 'MODE' }],
    [{ offset: 397, label: 'HIT' }, { offset: 398, label: 'COMP' }, { offset: 399, label: 'DRIVE' }],
    [{ offset: 409, label: 'MODE' }, { offset: 410, label: 'MODE' }, { offset: 411, label: 'MODE' }],
    [{ offset: 454, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Buttonmap layout - 5 rows
 */
const GUITAR_BUTTONMAP = {
  rows: [
    [{ offset: 394, label: 'uMOD' }, { offset: 395, label: 'DELAY' }, { offset: 396, label: 'REVERB' }],
    [{ offset: 406, label: 'MODE' }, { offset: 407, label: 'MODE' }, { offset: 408, label: 'MODE' }],
    [{ offset: 397, label: 'HIT' }, { offset: 398, label: 'COMP' }, { offset: 399, label: 'DRIVE' }],
    [{ offset: 409, label: 'MODE' }, { offset: 410, label: 'MODE' }, { offset: 411, label: 'MODE' }],
    [{ offset: 464, label: 'GLOBAL' }]
  ]
};

/**
 * Guitar.Preset layout - 1 row
 */
const GUITAR_PRESET = {
  rows: [
    [{ offset: 387, label: 'GUITAR LEVEL TRIM' }, { offset: 270, label: 'GTR PAN' }]
  ]
};

export const PRESET_LAYOUTS = {
  'guitar_params.Amp': GUITAR_AMP,
  'guitar_params.Drive': GUITAR_DRIVE,
  'guitar_params.Delay': GUITAR_DELAY,
  'guitar_params.Reverb': GUITAR_REVERB,
  'guitar_params.Comp': GUITAR_COMP,
  'guitar_params.Wah': GUITAR_WAH,
  'guitar_params.uMod': GUITAR_UMOD,
  'guitar_params.Octaver': GUITAR_OCTAVER,
  'guitar_params.Rhythmic': GUITAR_RHYTHMIC,
  'guitar_params.Expr Pedal': GUITAR_EXPR_PEDAL,
  'guitar_params.Buttonmap': GUITAR_BUTTONMAP,
  'guitar_params.Preset': GUITAR_PRESET,
  'vocal_params.Harmony': VOCAL_HARMONY,
  'vocal_params.Double': VOCAL_DOUBLE,
  'vocal_params.Delay': VOCAL_DELAY,
  'vocal_params.Reverb': VOCAL_REVERB,
  'vocal_params.HardTune': VOCAL_HARDTUNE,
  'vocal_params.Synth': VOCAL_SYNTH,
  'vocal_params.Transducer': VOCAL_TRANSDUCER,
  'vocal_params.uMod': VOCAL_UMOD,
  'vocal_params.Choir': VOCAL_CHOIR,
  'vocal_params.Rhythmic': VOCAL_RHYTHMIC,
  'vocal_params.Stutter': VOCAL_STUTTER,
  'vocal_params.Buttonmap': VOCAL_BUTTONMAP
};

export function getLayout(category, subtab) {
  return PRESET_LAYOUTS[`${category}.${subtab}`] || null;
}

export function hasLayout(category, subtab) {
  return `${category}.${subtab}` in PRESET_LAYOUTS;
}
