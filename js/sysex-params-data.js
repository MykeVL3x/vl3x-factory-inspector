/**
 * sysex-params-data.js - VL3X Parameter Definitions
 * 
 * Complete parameter definitions organized by Category > Subcategory
 * Refactored from sysex-params.js for maintainability.
 */

export const VL3X_PARAMS = {
  "Guitar": {
    "Amp": [
      {
        "name": "TYPE",
        "offset": 0,
        "min": 0,
        "max": 29,
        "enum": "amp_style",
        "unit": null,
        "display": null
      },
      {
        "name": "PREGAIN",
        "offset": 263,
        "min": -9,
        "max": 60,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "POSTGAIN",
        "offset": 259,
        "min": -40,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 300,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "LOW POST",
        "offset": 11,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "MID POST",
        "offset": 17,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIGH POST",
        "offset": 14,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LO PRE",
        "offset": 2,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "MID PRE",
        "offset": 8,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIGH PRE",
        "offset": 5,
        "min": -18,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LO F PRE",
        "offset": 1,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MID F PRE",
        "offset": 7,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIGH F PRE",
        "offset": 4,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LO BW PRE",
        "offset": 3,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MID BW PRE",
        "offset": 9,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HI BW PRE",
        "offset": 6,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MODE",
        "offset": 261,
        "min": 0,
        "max": 1,
        "enum": "amp_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "AMP SAG",
        "offset": 258,
        "min": 0,
        "max": 10,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LO F POST",
        "offset": 10,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MID F POST",
        "offset": 16,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HI F POST",
        "offset": 13,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LO BW POST",
        "offset": 12,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MID BW POST",
        "offset": 18,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HI BW POST",
        "offset": 15,
        "min": 0,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SPKR GAIN",
        "offset": 267,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "SPKR FC",
        "offset": 269,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SPKR BW",
        "offset": 268,
        "min": 0,
        "max": 16,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LOCUT FC",
        "offset": 262,
        "min": 0,
        "max": 72,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GTR PAN",
        "offset": 270,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 458,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Drive": [
      {
        "name": "STYLE",
        "offset": 264,
        "min": 0,
        "max": 2,
        "enum": "drive_style",
        "unit": null,
        "display": null
      },
      {
        "name": "POST GAIN",
        "offset": 265,
        "min": -40,
        "max": 18,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "PREGAIN",
        "offset": 266,
        "min": -9,
        "max": 60,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 295,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 459,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Comp": [
      {
        "name": "TYPE",
        "offset": 252,
        "min": 0,
        "max": 4,
        "enum": "guitar_comp_style",
        "unit": null,
        "display": null
      },
      {
        "name": "RATIO",
        "offset": 253,
        "min": 0,
        "max": 14,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "THRESHOLD",
        "offset": 254,
        "min": -50,
        "max": 0,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "ATTACK",
        "offset": 255,
        "min": 0,
        "max": 19,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "RELEASE",
        "offset": 256,
        "min": 0,
        "max": 19,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MAKEUP GAIN",
        "offset": 257,
        "min": 0,
        "max": 30,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 299,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 460,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Wah": [
      {
        "name": "TYPE",
        "offset": 239,
        "min": 0,
        "max": 9,
        "enum": "wah_style",
        "unit": null,
        "display": null
      },
      {
        "name": "TYPE",
        "offset": 240,
        "min": 0,
        "max": 2,
        "enum": "wah_subtype",
        "unit": null,
        "display": null
      },
      {
        "name": "ORDER",
        "offset": 241,
        "min": 0,
        "max": 1,
        "enum": "wah_order",
        "unit": null,
        "display": null
      },
      {
        "name": "SENSITIVITY",
        "offset": 242,
        "min": 0,
        "max": 10,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "RESPONSE",
        "offset": 243,
        "min": 0,
        "max": 11,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "FMAX",
        "offset": 244,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 245,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "RESONANCE",
        "offset": 246,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "BPM",
        "offset": 247,
        "min": 20,
        "max": 600,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "SHAPE",
        "offset": 248,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 249,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "EXP MINPOS",
        "offset": 250,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "EXP MAXPOS",
        "offset": 251,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 294,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 463,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "uMod": [
      {
        "name": "TYPE",
        "offset": 118,
        "min": 0,
        "max": 13,
        "enum": "micromod_style_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 296,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "SPEED",
        "offset": 125,
        "min": 5,
        "max": 1000,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DETUNE",
        "offset": 128,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 129,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DRY GAIN",
        "offset": 381,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "PHASE",
        "offset": 126,
        "min": 0,
        "max": 180,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "WAVE",
        "offset": 127,
        "min": 0,
        "max": 2,
        "enum": "waveform",
        "unit": null,
        "display": null
      },
      {
        "name": "INV PHASE",
        "offset": 132,
        "min": 0,
        "max": 3,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY LEFT",
        "offset": 119,
        "min": 0,
        "max": 230,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY RIGHT",
        "offset": 120,
        "min": 0,
        "max": 230,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LOW CUT",
        "offset": 130,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 131,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "FEEDBACK L",
        "offset": 121,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "FEEDBACK R",
        "offset": 123,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "XFB L",
        "offset": 122,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "XFB R",
        "offset": 124,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 282,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 442,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 451,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Delay": [
      {
        "name": "TYPE",
        "offset": 150,
        "min": 0,
        "max": 14,
        "enum": "delay_style_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "FEEDBACK",
        "offset": 160,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 297,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "SOURCE",
        "offset": 151,
        "min": 0,
        "max": 1,
        "enum": "delay_source",
        "unit": null,
        "display": null
      },
      {
        "name": "FILTERSTYLE",
        "offset": 164,
        "min": 0,
        "max": 12,
        "enum": "delay_filter",
        "unit": null,
        "display": null
      },
      {
        "name": "DUCKING",
        "offset": 173,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "DIV L",
        "offset": 152,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY L",
        "offset": 154,
        "min": 0,
        "max": 2500,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DIV R",
        "offset": 153,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY R",
        "offset": 155,
        "min": 0,
        "max": 2500,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "MODDEPTH",
        "offset": 161,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MODSPEED",
        "offset": 162,
        "min": 10,
        "max": 1000,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DUCK THRES",
        "offset": 174,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DUCK AMT",
        "offset": 175,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK TIME",
        "offset": 176,
        "min": 0,
        "max": 36,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "FEEDBACK L",
        "offset": 156,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "XFB L TO R",
        "offset": 158,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "FEEDBACK R",
        "offset": 157,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "XFB R TO L",
        "offset": 159,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LOW CUT",
        "offset": 165,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 166,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "WIDTH",
        "offset": 168,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "TRAILS",
        "offset": 163,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 283,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 443,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 447,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Reverb": [
      {
        "name": "TYPE",
        "offset": 190,
        "min": 0,
        "max": 51,
        "enum": "reverb_style_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "TYPE",
        "offset": 191,
        "min": 0,
        "max": 13,
        "enum": "reverb_type_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "DECAY",
        "offset": 192,
        "min": 1,
        "max": 290,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 201,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 298,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "EARLY RFLCT",
        "offset": 200,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "TAIL LEVEL",
        "offset": 202,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "PREDELAY",
        "offset": 193,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DUCKING",
        "offset": 207,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "LO COLOR",
        "offset": 195,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HICOLOR",
        "offset": 196,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIFACTOR",
        "offset": 197,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DIFFUSE",
        "offset": 194,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MODSPEED",
        "offset": 198,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MODDEPTH",
        "offset": 199,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DUCK THRES",
        "offset": 208,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DUCK AMT",
        "offset": 209,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK TIME",
        "offset": 210,
        "min": 0,
        "max": 36,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 284,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 444,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 449,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 457,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Octaver": [
      {
        "name": "TYPE",
        "offset": 236,
        "min": 0,
        "max": 5,
        "enum": "octaver_style",
        "unit": null,
        "display": null
      },
      {
        "name": "MIX",
        "offset": 237,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SHIFT",
        "offset": 238,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 301,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 461,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Rhythmic": [
      {
        "name": "TYPE",
        "offset": 327,
        "min": 0,
        "max": 6,
        "enum": "rhythm_style_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "DIVISION",
        "offset": 329,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": null,
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 328,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 302,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "TARGET",
        "offset": 332,
        "min": 0,
        "max": 1,
        "enum": "rhythmic_target",
        "unit": null,
        "display": null
      },
      {
        "name": "TREM BPM",
        "offset": 331,
        "min": 45,
        "max": 300,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "WAVEFORM",
        "offset": 330,
        "min": 0,
        "max": 4,
        "enum": "waveform",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 290,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 455,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 462,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "HardTune": [
      {
        "name": "PRE/POST",
        "offset": 281,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Expr Pedal": [
      {
        "name": "EXPRESSION PEDAL",
        "offset": 388,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "EXP MINPOS",
        "offset": 389,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "EXP MAXPOS",
        "offset": 390,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 465,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ]
  },
  "Vocal": {
    "Harmony": [
      {
        "name": "STYLE",
        "offset": 29,
        "min": 0,
        "max": 29,
        "enum": "harmony_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 285,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "HUMAN STYLE",
        "offset": 30,
        "min": 0,
        "max": 6,
        "enum": "human_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "HUMANIZE",
        "offset": 32,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "VIB STYLE",
        "offset": 31,
        "min": 0,
        "max": 7,
        "enum": "vibrato_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "VIBRATO",
        "offset": 33,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "NATPLAY SRC",
        "offset": 38,
        "min": 0,
        "max": 5,
        "enum": "natplay_input",
        "unit": "None",
        "display": null
      },
      {
        "name": "TUNING",
        "offset": 41,
        "min": 0,
        "max": 2,
        "enum": "tuning",
        "unit": "None",
        "display": null
      },
      {
        "name": "MODE V1",
        "offset": 42,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
        "display": null
      },
      {
        "name": "MODE V2",
        "offset": 51,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
        "display": null
      },
      {
        "name": "MODE V3",
        "offset": 60,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
        "display": null
      },
      {
        "name": "MODE V4",
        "offset": 69,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 VOICING",
        "offset": 43,
        "min": 0,
        "max": 8,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 PEDAL",
        "offset": 55,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 PEDAL",
        "offset": 64,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 PORTA",
        "offset": 50,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V2 PORTA",
        "offset": 59,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V3 PORTA",
        "offset": 68,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V4 PORTA",
        "offset": 77,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V1 SMOOTH",
        "offset": 48,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "NOTES SMOOTH",
        "offset": 35,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V2 SMOOTH",
        "offset": 57,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "NOTES PORTA",
        "offset": 37,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 SMOOTH",
        "offset": 66,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V1 GENDER",
        "offset": 49,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 SMOOTH",
        "offset": 75,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V2 GENDER",
        "offset": 58,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HOLD RELEASE",
        "offset": 471,
        "min": 0,
        "max": 2000,
        "enum": null,
        "unit": "ms",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "LOW GAIN",
        "offset": 20,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V3 GENDER",
        "offset": 67,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LOW FREQ",
        "offset": 19,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V4 GENDER",
        "offset": 76,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HIGH GAIN",
        "offset": 23,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIGH FREQ",
        "offset": 22,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "MID GAIN",
        "offset": 26,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "MID FREQ",
        "offset": 25,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "MID BW",
        "offset": 27,
        "min": 0,
        "max": 32,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 445,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      },
      {
        "name": "Low BW.Harm",
        "offset": 21,
        "min": 0,
        "max": 32,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "Hi BW.Harm",
        "offset": 24,
        "min": 0,
        "max": 32,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "NOTES PAN",
        "offset": 34,
        "min": 0,
        "max": 2,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "NOTES GENDER",
        "offset": 36,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "KEY",
        "offset": 39,
        "min": 0,
        "max": 11,
        "enum": "key",
        "unit": null,
        "display": null
      },
      {
        "name": "SCALE",
        "offset": 40,
        "min": 0,
        "max": 6,
        "enum": "scale",
        "unit": null,
        "display": null
      },
      {
        "name": "V1 INTERVAL",
        "offset": 44,
        "min": 0,
        "max": 28,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V1 SHIFT",
        "offset": 45,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V1 PEDAL",
        "offset": 46,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 FIXED",
        "offset": 47,
        "min": -36,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V2 VOICING",
        "offset": 52,
        "min": 0,
        "max": 8,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 INTERVAL",
        "offset": 53,
        "min": 0,
        "max": 28,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V2 SHIFT",
        "offset": 54,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V2 FIXED",
        "offset": 56,
        "min": -36,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 VOICING",
        "offset": 61,
        "min": 0,
        "max": 8,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 INTERVAL",
        "offset": 62,
        "min": 0,
        "max": 28,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 SHIFT",
        "offset": 63,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 FIXED",
        "offset": 65,
        "min": -36,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 VOICING",
        "offset": 70,
        "min": 0,
        "max": 8,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 INTERVAL",
        "offset": 71,
        "min": 0,
        "max": 28,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 SHIFT",
        "offset": 72,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 PEDAL",
        "offset": 73,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 FIXED",
        "offset": 74,
        "min": -36,
        "max": 25,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "ATTACK",
        "offset": 469,
        "min": 0,
        "max": 1000,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "RELEASE",
        "offset": 470,
        "min": 0,
        "max": 2000,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      }
    ],
    "Double": [
      {
        "name": "TYPE",
        "offset": 80,
        "min": 0,
        "max": 11,
        "enum": "double_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "HUMANIZE",
        "offset": 82,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 286,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "HUMAN STYLE",
        "offset": 81,
        "min": 0,
        "max": 6,
        "enum": "human_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 GENDER",
        "offset": 85,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 GENDER",
        "offset": 90,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 GENDER",
        "offset": 95,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 GENDER",
        "offset": 100,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 VOICING",
        "offset": 83,
        "min": 0,
        "max": 3,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 VOICING",
        "offset": 88,
        "min": 0,
        "max": 3,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 VOICING",
        "offset": 93,
        "min": 0,
        "max": 3,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 VOICING",
        "offset": 98,
        "min": 0,
        "max": 3,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V1 PORTA",
        "offset": 84,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V2 PORTA",
        "offset": 89,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V3 PORTA",
        "offset": 94,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V4 PORTA",
        "offset": 99,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V1 SMOOTH",
        "offset": 86,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V2 SMOOTH",
        "offset": 91,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V3 SMOOTH",
        "offset": 96,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "V4 SMOOTH",
        "offset": 101,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "OctShift.V1",
        "offset": 87,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OctShift.V2",
        "offset": 92,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OctShift.V3",
        "offset": 97,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OctShift.V4",
        "offset": 102,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 446,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Delay": [
      {
        "name": "TYPE",
        "offset": 134,
        "min": 0,
        "max": 18,
        "enum": "delay_style_voice",
        "unit": "None",
        "display": null
      },
      {
        "name": "FEEDBACK",
        "offset": 144,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "SOURCE",
        "offset": 135,
        "min": 0,
        "max": 1,
        "enum": "delay_source",
        "unit": "None",
        "display": null
      },
      {
        "name": "TEMPO",
        "offset": 133,
        "min": 45,
        "max": 300,
        "enum": null,
        "unit": "BPM",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "FILTERSTYLE",
        "offset": 146,
        "min": 0,
        "max": 12,
        "enum": "delay_filter",
        "unit": "None",
        "display": null
      },
      {
        "name": "DUCKING",
        "offset": 169,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DIV L",
        "offset": 136,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": "None",
        "display": null
      },
      {
        "name": "DELAY L",
        "offset": 138,
        "min": 0,
        "max": 2500,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DIV R",
        "offset": 137,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": "None",
        "display": null
      },
      {
        "name": "DELAY R",
        "offset": 139,
        "min": 0,
        "max": 2500,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "FEEDBACK L",
        "offset": 140,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "XFB L TO R",
        "offset": 142,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "FEEDBACK R",
        "offset": 141,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "XFB TO L",
        "offset": 143,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LOW CUT",
        "offset": 147,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HI CUT",
        "offset": 148,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "EQ INSERT",
        "offset": 149,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DUCK THRES",
        "offset": 170,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK AMT",
        "offset": 171,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK TIME",
        "offset": 172,
        "min": 0,
        "max": 36,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "PAN",
        "offset": 365,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "TRAILS",
        "offset": 145,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      }
    ],
    "Reverb": [
      {
        "name": "TYPE",
        "offset": 177,
        "min": 0,
        "max": 42,
        "enum": "reverb_style_voice",
        "unit": "None",
        "display": null
      },
      {
        "name": "REVERB TYPE",
        "offset": 178,
        "min": 0,
        "max": 13,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DECAY",
        "offset": 179,
        "min": 1,
        "max": 290,
        "enum": null,
        "unit": "ms",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "DRY LEVEL",
        "offset": 189,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "EARLY RFLCT",
        "offset": 187,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "TRAIL LEVEL",
        "offset": 188,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "PREDELAY",
        "offset": 180,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DUCKING",
        "offset": 203,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LOCOLOR",
        "offset": 182,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "HICOLOR",
        "offset": 183,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "HIFACTOR",
        "offset": 184,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DIFFUSE",
        "offset": 181,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "MODSPEED",
        "offset": 185,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "MODDEPTH",
        "offset": 186,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DUCK THRES",
        "offset": 204,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK AMT",
        "offset": 205,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "DUCK TIME",
        "offset": 206,
        "min": 0,
        "max": 36,
        "enum": null,
        "unit": "ms",
        "display": null
      }
    ],
    "HardTune": [
      {
        "name": "TYPE",
        "offset": 271,
        "min": 0,
        "max": 6,
        "enum": "hardtune_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "GENDER",
        "offset": 277,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "SHIFT",
        "offset": 276,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 288,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "KEY SOURCE",
        "offset": 272,
        "min": 0,
        "max": 3,
        "enum": "key_source",
        "unit": "None",
        "display": null
      },
      {
        "name": "RATE",
        "offset": 275,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "AMOUNT",
        "offset": 273,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "WINDOW",
        "offset": 274,
        "min": 0,
        "max": 60,
        "enum": null,
        "unit": "c",
        "display": null
      },
      {
        "name": "MANUAL KEY",
        "offset": 279,
        "min": 0,
        "max": 11,
        "enum": "key",
        "unit": "None",
        "display": null
      },
      {
        "name": "MANUAL SCALE",
        "offset": 280,
        "min": 0,
        "max": 5,
        "enum": "correct_scale",
        "unit": "None",
        "display": null
      },
      {
        "name": "Note Select",
        "offset": 278,
        "min": 0,
        "max": 4095,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 448,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Synth": [
      {
        "name": "TYPE",
        "offset": 211,
        "min": 0,
        "max": 12,
        "enum": "synth_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "GENDER",
        "offset": 216,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 292,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "CARRIER",
        "offset": 213,
        "min": 0,
        "max": 11,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LEAD MIX",
        "offset": 212,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "NOTE SOURCE",
        "offset": 217,
        "min": 0,
        "max": 3,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "PORTAMENTO",
        "offset": 392,
        "min": 0,
        "max": 5000,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "CARR SHIFT",
        "offset": 214,
        "min": 0,
        "max": 3,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "CARR MIX",
        "offset": 215,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "RES",
        "offset": 218,
        "min": 1,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "ESS LEVEL",
        "offset": 393,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "HARMONIES",
        "offset": 219,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 450,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Transducer": [
      {
        "name": "TYPE",
        "offset": 220,
        "min": 0,
        "max": 9,
        "enum": "transducer_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "ROUTING",
        "offset": 221,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "POST GAIN",
        "offset": 226,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 287,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "DISTORTION TYPE",
        "offset": 227,
        "min": 0,
        "max": 14,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DISTORTION AMOUNT",
        "offset": 222,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "LOW CUT",
        "offset": 223,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 224,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "PRES GAIN",
        "offset": 228,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "PRES FC",
        "offset": 229,
        "min": 100,
        "max": 195,
        "enum": null,
        "unit": "Hz",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "PRES BW",
        "offset": 230,
        "min": 0,
        "max": 16,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "ManualThresholdT",
        "offset": 28,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "PRE GAIN",
        "offset": 225,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 453,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "uMod": [
      {
        "name": "TYPE",
        "offset": 103,
        "min": 0,
        "max": 22,
        "enum": "micromod_style_voice",
        "unit": "None",
        "display": null
      },
      {
        "name": "SPEED",
        "offset": 110,
        "min": 5,
        "max": 1000,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "DETUNE",
        "offset": 113,
        "min": -25,
        "max": 25,
        "enum": null,
        "unit": "cents",
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 114,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "PHASE",
        "offset": 111,
        "min": 0,
        "max": 180,
        "enum": null,
        "unit": "deg",
        "display": null
      },
      {
        "name": "WAVE",
        "offset": 112,
        "min": 0,
        "max": 2,
        "enum": "waveform",
        "unit": "None",
        "display": null
      },
      {
        "name": "INV PHASE",
        "offset": 117,
        "min": 0,
        "max": 3,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DELAY LEFT",
        "offset": 104,
        "min": 0,
        "max": 230,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DELAY RIGHT",
        "offset": 105,
        "min": 0,
        "max": 230,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "LOW CUT",
        "offset": 115,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 116,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "FEEDBACK L",
        "offset": 106,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "FEEDBACK R",
        "offset": 108,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "XFB L",
        "offset": 107,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "XFB R",
        "offset": 109,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      }
    ],
    "Choir": [
      {
        "name": "TYPE",
        "offset": 78,
        "min": 0,
        "max": 12,
        "enum": "choir_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 79,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 289,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 454,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Rhythmic": [
      {
        "name": "TYPE",
        "offset": 317,
        "min": 0,
        "max": 10,
        "enum": "rhythmic_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "TARGET",
        "offset": 320,
        "min": 0,
        "max": 6,
        "enum": "rhythmic_target",
        "unit": "None",
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 319,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "DIVISION",
        "offset": 318,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": "None",
        "display": null
      },
      {
        "name": "WAVE TYPE",
        "offset": 321,
        "min": 0,
        "max": 22,
        "enum": null,
        "unit": "None",
        "display": null
      }
    ],
    "Stutter": [
      {
        "name": "TYPE",
        "offset": 322,
        "min": 0,
        "max": 3,
        "enum": "stutter_style",
        "unit": "None",
        "display": null
      },
      {
        "name": "DIVISION",
        "offset": 323,
        "min": 9,
        "max": 19,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "DIRECTION",
        "offset": 325,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 291,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      },
      {
        "name": "PATH",
        "offset": 326,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "CAPTURE",
        "offset": 324,
        "min": 0,
        "max": 2,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 456,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Buttonmap": [
      {
        "name": "uMOD",
        "offset": 394,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "uMOD.MODE",
        "offset": 406,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY",
        "offset": 395,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY.MODE",
        "offset": 407,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "REVERB",
        "offset": 396,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "REVERB.MODE",
        "offset": 408,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT",
        "offset": 397,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT.MODE",
        "offset": 409,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "COMP",
        "offset": 398,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "COMP.MODE",
        "offset": 410,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "DRIVE",
        "offset": 399,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "DRIVE.MODE",
        "offset": 411,
        "min": 0,
        "max": 1,
        "enum": "button_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 464,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ]
  },
  "Setup": {
    "INPUT": [
      {
        "name": "MIC GAIN",
        "offset": 69,
        "min": 0,
        "max": 66,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "INPUT TYPE",
        "offset": 20,
        "min": 0,
        "max": 4,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "MIC CLIP PROTECTION",
        "offset": 124,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "USB MODE",
        "offset": 139,
        "min": 0,
        "max": 2,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL PITCH CORRECT",
        "offset": 61,
        "min": 0,
        "max": 100,
        "type": "percent",
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD MUTE",
        "offset": 68,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "AUX GAIN",
        "offset": 74,
        "min": -31,
        "max": 12,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "AUX VOCAL CANCEL",
        "offset": 28,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "MONITOR GAIN",
        "offset": 73,
        "min": -31,
        "max": 12,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "ROOMSENSE AUTO-DETECT",
        "offset": 24,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD DELAY",
        "offset": 27,
        "min": 0,
        "max": 2,
        "type": "enum",
        "unit": null,
        "display": null
      }
    ],
    "OUTPUT": [
      {
        "name": "XLR OUTPUT",
        "offset": 96,
        "min": 0,
        "max": 2,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "XLR OUTPUT LEVEL",
        "offset": 25,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "GUITAR JACK MODE",
        "offset": 140,
        "min": 0,
        "max": 2,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "TALK TRIM",
        "offset": 75,
        "min": -9,
        "max": 4,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "USB OUTPUT TRIM",
        "offset": 95,
        "min": -12,
        "max": 12,
        "type": "dB",
        "unit": null,
        "display": null
      }
    ],
    "GUITAR": [
      {
        "name": "INPUT GAIN",
        "offset": 70,
        "min": 0,
        "max": 18,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "PHASE",
        "offset": 21,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "SPEAKER SIM ENABLE",
        "offset": 60,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "OUTPUT MODE",
        "offset": 94,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "GATE THRESHOLD",
        "offset": 51,
        "min": -81,
        "max": 0,
        "type": "special",
        "unit": null,
        "display": null
      }
    ],
    "MIDI": [
      {
        "name": "MIDI TEMPO",
        "offset": 19,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "TRANSPOSE",
        "offset": 18,
        "min": -4,
        "max": 4,
        "type": "semitones",
        "unit": null,
        "display": null
      },
      {
        "name": "PITCHBEND RANGE",
        "offset": 17,
        "min": 0,
        "max": 12,
        "type": "semitones",
        "unit": null,
        "display": null
      },
      {
        "name": "SPLIT NOTE",
        "offset": 16,
        "min": 0,
        "max": 127,
        "type": "midi_note",
        "unit": null,
        "display": null
      },
      {
        "name": "SPLIT DIRECTION",
        "offset": 15,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "VIBRATO BOOST",
        "offset": 58,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "MIDI TX DELAY",
        "offset": 138,
        "min": 0,
        "max": 3,
        "type": "enum",
        "unit": null,
        "display": null
      }
    ],
    "TONE": [
      {
        "name": "TONE",
        "offset": 62,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "SHAPE",
        "offset": 32,
        "min": 0,
        "max": 100,
        "type": "value",
        "unit": null,
        "display": null
      },
      {
        "name": "COMPRESS",
        "offset": 35,
        "min": 0,
        "max": 100,
        "type": "value",
        "unit": null,
        "display": null
      },
      {
        "name": "DE-ESS",
        "offset": 39,
        "min": 0,
        "max": 100,
        "type": "value",
        "unit": null,
        "display": null
      },
      {
        "name": "WARMTH",
        "offset": 33,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "EQ MODE",
        "offset": 34,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "COMPRESSION MODE",
        "offset": 36,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "GATE",
        "offset": 49,
        "min": 0,
        "max": 2,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD ATTEN",
        "offset": 52,
        "min": -12,
        "max": 0,
        "type": "dB",
        "unit": null,
        "display": null
      },
      {
        "name": "WARM ATTN",
        "offset": 55,
        "min": -12,
        "max": 0,
        "type": "dB",
        "unit": null,
        "display": null
      }
    ],
    "SYSTEM": [
      {
        "name": "GLOBAL TEMPO",
        "offset": 8,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL PRESET",
        "offset": 122,
        "min": 0,
        "max": 500,
        "type": "special",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL KEY/SCALE",
        "offset": 7,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "ALL GUITAR FX GLOBAL",
        "offset": 121,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL NATPLAY SOURCE",
        "offset": 59,
        "min": 0,
        "max": 6,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "MIX ROOMSENSE TO NP",
        "offset": 128,
        "min": 0,
        "max": 1,
        "type": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "TUNER REFERENCE",
        "offset": 4,
        "min": 800,
        "max": 960,
        "type": "special",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT BEHAVIOR",
        "offset": 5,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "AUX IN TYPE",
        "offset": 76,
        "min": 0,
        "max": 1,
        "type": "enum",
        "unit": null,
        "display": null
      },
      {
        "name": "CONTRAST",
        "offset": 0,
        "min": 0,
        "max": 10,
        "type": "special",
        "unit": null,
        "display": null
      },
      {
        "name": "MIX SCREEN TIMEOUT",
        "offset": 129,
        "min": 3,
        "max": 11,
        "type": "value",
        "unit": null,
        "display": null
      }
    ]
  }
};
