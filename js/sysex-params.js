/**
 * sysex-params.js - Complete VL3X parameter database
 * Generated from preset-layouts.js (SOT display order)
 * Auto-fixed: enum max values, missing params
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
        "unit": "%",
        "display": "value x 10"
      },
      {
        "name": "PREGAIN",
        "offset": 263,
        "min": -9,
        "max": 60,
        "enum": null,
        "unit": "dB",
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
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "MID POST",
        "offset": 17,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIGH POST",
        "offset": 14,
        "min": 0,
        "max": 100,
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
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HI PRE",
        "offset": 5,
        "min": 0,
        "max": 1,
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
        "unit": "Hz",
        "display": null
      },
      {
        "name": "MID F PRE",
        "offset": 7,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HI F PRE",
        "offset": 4,
        "min": 800,
        "max": 960,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "MODE",
        "offset": 261,
        "min": 0,
        "max": 3,
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
        "max": 100,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "MID F POST",
        "offset": 16,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HI F POST",
        "offset": 13,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "LO BW POST",
        "offset": 12,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "BW",
        "display": null
      },
      {
        "name": "MID BW POST",
        "offset": 18,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "BW",
        "display": null
      },
      {
        "name": "HI BW POST",
        "offset": 15,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "BW",
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
        "unit": "Hz",
        "display": null
      },
      {
        "name": "SPKR BW",
        "offset": 268,
        "min": 0,
        "max": 16,
        "enum": null,
        "unit": "SPKR_BW",
        "display": null
      },
      {
        "name": "LOCUT FC",
        "offset": 262,
        "min": 0,
        "max": 72,
        "enum": null,
        "unit": "Hz",
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
        "name": "TYPE",
        "offset": 264,
        "min": 0,
        "max": 2,
        "enum": "drive_style",
        "unit": null,
        "display": null
      },
      {
        "name": "PREGAIN",
        "offset": 266,
        "min": -9,
        "max": 60,
        "enum": null,
        "unit": "dB",
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
    "Delay": [
      {
        "name": "TYPE",
        "offset": 150,
        "min": 0,
        "max": 18,
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
        "unit": "%",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 382,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
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
        "offset": 164,
        "min": 0,
        "max": 4,
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
        "unit": "%",
        "display": null
      },
      {
        "name": "MODSPEED",
        "offset": 162,
        "min": 10,
        "max": 1000,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "DUCK THRES",
        "offset": 174,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
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
        "unit": "ms",
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
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 166,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "WIDTH",
        "offset": 168,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "name": "GLOBAL",
        "offset": 456,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Reverb": [
      {
        "name": "TYPE",
        "offset": 190,
        "min": 0,
        "max": 50,
        "enum": "reverb_style_guitar",
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
        "name": "TRAIL LEVEL",
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
        "unit": "ms",
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
        "name": "LOCOLOR",
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
        "unit": "dB",
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
        "unit": "ms",
        "display": null
      },
      {
        "name": "WIDTH",
        "offset": 385,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
    "Comp": [
      {
        "name": "TYPE",
        "offset": 252,
        "min": 0,
        "max": 4,
        "enum": "comp_style",
        "unit": null,
        "display": null
      },
      {
        "name": "THRESHOLD",
        "offset": 254,
        "min": -50,
        "max": 0,
        "enum": null,
        "unit": "dB",
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
        "name": "HIT CONTROL",
        "offset": 299,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
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
        "name": "RESONANCE",
        "offset": 246,
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
        "name": "LEVEL",
        "offset": 249,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
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
        "name": "TYPE",
        "offset": 240,
        "min": 0,
        "max": 2,
        "enum": "wah_subtype",
        "unit": null,
        "display": null
      },
      {
        "name": "FMAX",
        "offset": 244,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
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
        "enum": "wah_response",
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
        "enum": "umod_style_guitar",
        "unit": null,
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 379,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
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
        "unit": "Hz",
        "display": null
      },
      {
        "name": "DETUNE",
        "offset": 128,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "cents",
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 129,
        "min": 3,
        "max": 11,
        "enum": null,
        "unit": "%",
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
        "name": "WIDTH",
        "offset": 380,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "PHASE",
        "offset": 126,
        "min": 0,
        "max": 180,
        "enum": null,
        "unit": "deg",
        "display": null
      },
      {
        "name": "WAVE",
        "offset": 127,
        "min": 0,
        "max": 4,
        "enum": "waveform",
        "unit": null,
        "display": null
      },
      {
        "name": "INV PHASE",
        "offset": 132,
        "min": 0,
        "max": 1,
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
        "unit": "ms",
        "display": null
      },
      {
        "name": "DELAY RIGHT",
        "offset": 120,
        "min": 0,
        "max": 230,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "LOW CUT",
        "offset": 130,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HIGH CUT",
        "offset": 131,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "FEEDBACK L",
        "offset": 121,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "FEEDBACK R",
        "offset": 123,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "XFB L",
        "offset": 122,
        "min": 0,
        "max": 500,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "XFB R",
        "offset": 124,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "name": "SHIFT",
        "offset": 238,
        "min": -24,
        "max": 24,
        "enum": null,
        "unit": "st",
        "display": null
      },
      {
        "name": "MIX",
        "offset": 237,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "unit": "%",
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
        "max": 6,
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
        "unit": "BPM",
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
        "name": "GLOBAL",
        "offset": 462,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Expr Pedal": [
      {
        "name": "TYPE",
        "offset": 388,
        "min": 0,
        "max": 37,
        "enum": "expr_pedal_function",
        "unit": null,
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 303,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
    ],
    "Preset": [
      {
        "name": "GUITAR LEVEL TRIM",
        "offset": 387,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "GTR PAN",
        "offset": 270,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
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
  "Vocal": {
    "Harmony": [
      {
        "name": "STYLE",
        "offset": 29,
        "min": 0,
        "max": 29,
        "enum": "harmony_style",
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD LEVEL",
        "offset": 336,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 357,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 285,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
        "display": null
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
        "enum": "voice_mode",
        "unit": "None",
        "display": null
      },
      {
        "name": "MODE V2",
        "offset": 51,
        "min": 0,
        "max": 5,
        "enum": "voice_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "MODE V3",
        "offset": 60,
        "min": 0,
        "max": 5,
        "enum": "voice_mode",
        "unit": null,
        "display": null
      },
      {
        "name": "MODE V4",
        "offset": 69,
        "min": 0,
        "max": 5,
        "enum": "voice_mode",
        "unit": null,
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
        "name": "V1 LEVEL",
        "offset": 340,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V2 LEVEL",
        "offset": 342,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V3 LEVEL",
        "offset": 344,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V4 LEVEL",
        "offset": 346,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
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
        "name": "V2 GENDER",
        "offset": 58,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "name": "V4 GENDER",
        "offset": 76,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V1 PAN",
        "offset": 341,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V2 PAN",
        "offset": 343,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 PAN",
        "offset": 345,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 PAN",
        "offset": 347,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "max": 6,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 PORTA",
        "offset": 68,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
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
        "name": "V4 SMOOTH",
        "offset": 75,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LOW FREQ",
        "offset": 19,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "Hz",
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
        "unit": "Hz",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "MID GAIN",
        "offset": 26,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "MID FREQ",
        "offset": 25,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "MID BW",
        "offset": 27,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "BW",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 445,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
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
        "name": "HUMAN STYLE",
        "offset": 81,
        "min": 0,
        "max": 6,
        "enum": "human_style",
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
        "name": "V1 LEVEL",
        "offset": 348,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V2 LEVEL",
        "offset": 350,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V3 LEVEL",
        "offset": 352,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V4 LEVEL",
        "offset": 354,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V1 PAN",
        "offset": 349,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V2 PAN",
        "offset": 351,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V3 PAN",
        "offset": 353,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "V4 PAN",
        "offset": 355,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "max": 8,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 VOICING",
        "offset": 88,
        "min": 0,
        "max": 8,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 VOICING",
        "offset": 93,
        "min": 0,
        "max": 8,
        "enum": "voice_voicing",
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 VOICING",
        "offset": 98,
        "min": 0,
        "max": 8,
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
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
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
        "display": null
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
        "name": "LEAD LEVEL",
        "offset": 337,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 356,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 286,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 446,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Delay": [
      {
        "name": "TYPE",
        "offset": 134,
        "min": 0,
        "max": 14,
        "enum": "delay_style_voice",
        "unit": "None",
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
        "name": "HIT CONTROL",
        "offset": 283,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
        "name": "DIV R",
        "offset": 137,
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
        "max": 100,
        "enum": null,
        "unit": "ms",
        "display": null
      },
      {
        "name": "DELAY R",
        "offset": 139,
        "min": 0,
        "max": 100,
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
        "unit": null,
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
        "name": "XFB L TO R",
        "offset": 142,
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
        "name": "FEEDBACK",
        "offset": 144,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
      },
      {
        "name": "FILTERSTYLE",
        "offset": 146,
        "min": 0,
        "max": 4,
        "enum": "delay_filter",
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
        "name": "LEAD TO DLY",
        "offset": 334,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HARM TO DLY",
        "offset": 366,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "uMOD TO DLY",
        "offset": 368,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "CHOIR TO DLY",
        "offset": 367,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "name": "LEVEL",
        "offset": 375,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "WIDTH",
        "offset": 376,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "name": "GLOBAL",
        "offset": 443,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Reverb": [
      {
        "name": "TYPE",
        "offset": 177,
        "min": 0,
        "max": 51,
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
        "unit": "s",
        "display": {
          "type": "offset_if_negative",
          "offset": 128
        }
      },
      {
        "name": "HIT CONTROL",
        "offset": 284,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
        "name": "DRY LEVEL",
        "offset": 189,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
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
        "name": "DUCKING",
        "offset": 203,
        "min": 0,
        "max": 1,
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
      },
      {
        "name": "LEAD TO REVERB",
        "offset": 335,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HARM TO REVERB",
        "offset": 363,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DELAY TO REVERB",
        "offset": 366,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "CHOIR TO REVERB",
        "offset": 364,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 377,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "WIDTH",
        "offset": 378,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 444,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
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
        "unit": null,
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
        "name": "NOTE ENABLE",
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
        "unit": null,
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
        "name": "LEVEL",
        "offset": 358,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 292,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
        "unit": "dB",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 450,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Transducer": [
      {
        "name": "TYPE",
        "offset": 220,
        "min": 0,
        "max": 12,
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
        "unit": null,
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
        "name": "THRESHOLD",
        "offset": 28,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "name": "GLOBAL",
        "offset": 447,
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
        "offset": 103,
        "min": 0,
        "max": 10,
        "enum": "umod_style_voice",
        "unit": "None",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 373,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 282,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
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
        "name": "WIDTH",
        "offset": 374,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
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
        "max": 4,
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
      },
      {
        "name": "LEAD TO uMOD",
        "offset": 333,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HARM TO uMOD",
        "offset": 362,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD LEVEL",
        "offset": 338,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "CHOIR TO uMOD",
        "offset": 363,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 442,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
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
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD TO CHOIR",
        "offset": 359,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "HARM TO CHOIR",
        "offset": 360,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 451,
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
        "offset": 317,
        "min": 0,
        "max": 10,
        "enum": "rhythmic_style",
        "unit": null,
        "display": null
      },
      {
        "name": "TARGET",
        "offset": 320,
        "min": 0,
        "max": 6,
        "enum": "rhythmic_target",
        "unit": null,
        "display": null
      },
      {
        "name": "DEPTH",
        "offset": 319,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 290,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "DIVISION",
        "offset": 318,
        "min": 0,
        "max": 19,
        "enum": "note_division",
        "unit": null,
        "display": null
      },
      {
        "name": "WAVE TYPE",
        "offset": 321,
        "min": 0,
        "max": 22,
        "enum": "umod_waveform",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 449,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
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
        "enum": "delay_division",
        "unit": "None",
        "display": null
      },
      {
        "name": "DIRECTION",
        "offset": 325,
        "min": 0,
        "max": 1,
        "enum": "stutter_direction",
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT CONTROL",
        "offset": 291,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "PATH",
        "offset": 326,
        "min": 0,
        "max": 1,
        "enum": "stutter_path",
        "unit": "None",
        "display": null
      },
      {
        "name": "CAPTURE",
        "offset": 324,
        "min": 0,
        "max": 2,
        "enum": "stutter_capture",
        "unit": "None",
        "display": null
      },
      {
        "name": "GLOBAL",
        "offset": 450,
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
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "INPUT TYPE",
        "offset": 20,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MIC CLIP PROTECTION",
        "offset": 124,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "USB MODE",
        "offset": 139,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL PITCH CORRECT",
        "offset": 61,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD MUTE",
        "offset": 68,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "AUX GAIN",
        "offset": 74,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "AUX VOCAL CANCEL",
        "offset": 28,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MONITOR GAIN",
        "offset": 73,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "ROOMSENSE AUTO-DETECT",
        "offset": 24,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LEAD DELAY",
        "offset": 27,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "OUTPUT": [
      {
        "name": "XLR OUTPUT",
        "offset": 96,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "XLR OUTPUT LEVEL",
        "offset": 25,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GUITAR JACK MODE",
        "offset": 140,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "TALK TRIM",
        "offset": 75,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "USB OUTPUT MODE",
        "offset": 26,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "USB OUTPUT TRIM",
        "offset": 95,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "GUITAR": [
      {
        "name": "INPUT GAIN",
        "offset": 70,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "PHASE",
        "offset": 21,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SPEAKER SIM ENABLE",
        "offset": 60,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OUTPUT MODE",
        "offset": 94,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GATE THRESHOLD",
        "offset": 51,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "MIDI": [
      {
        "name": "SOURCE",
        "offset": 9,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MIDI TEMPO",
        "offset": 19,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "INPUT CHANNEL",
        "offset": 10,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OUTPUT CHANNEL",
        "offset": 11,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "INPUT FILTER",
        "offset": 12,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "OUTPUT FILTER",
        "offset": 13,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "TRANSPOSE",
        "offset": 18,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "PITCHBEND RANGE",
        "offset": 17,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SPLIT NOTE",
        "offset": 16,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SPLIT DIRECTION",
        "offset": 15,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "VIBRATO BOOST",
        "offset": 58,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SYSEX ID",
        "offset": 14,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "MIDI TX DELAY",
        "offset": 138,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "TONE": [
      {
        "name": "TONE",
        "offset": 62,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "SHAPE",
        "offset": 32,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "COMPRESS",
        "offset": 35,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "DE-ESS",
        "offset": 39,
        "min": 0,
        "max": 100,
        "enum": null,
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
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL PRESET",
        "offset": 122,
        "min": 0,
        "max": 500,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL KEY/SCALE",
        "offset": 7,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "ALL GUITAR FX GLOBAL",
        "offset": 121,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "GLOBAL NATPLAY SOURCE",
        "offset": 59,
        "min": 0,
        "max": 6,
        "enum": "global_natplay_source",
        "unit": null,
        "display": null
      },
      {
        "name": "MIX ROOMSENSE TO NP",
        "offset": 128,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "TUNER REFERENCE",
        "offset": 4,
        "min": 800,
        "max": 960,
        "enum": null,
        "unit": "Hz",
        "display": null
      },
      {
        "name": "HIT BEHAVIOR",
        "offset": 5,
        "min": 0,
        "max": 1,
        "enum": "hit_behavior",
        "unit": null,
        "display": null
      },
      {
        "name": "AUX IN TYPE",
        "offset": 76,
        "min": 0,
        "max": 1,
        "enum": "aux_in_type",
        "unit": null,
        "display": null
      },
      {
        "name": "CONTRAST",
        "offset": 0,
        "min": 0,
        "max": 10,
        "enum": null,
        "unit": "%",
        "display": "value x 10"
      },
      {
        "name": "MIX SCREEN TIMEOUT",
        "offset": 129,
        "min": 3,
        "max": 11,
        "enum": "mix_screen_timeout",
        "unit": null,
        "display": null
      }
    ]
  }
};

export const ENUMS = {
  "amp_mode": [
    "CLEAN",
    "TUBE",
    "CRUNCH",
    "HIGH GAIN"
  ],
  "amp_style": [
    "ACOUSTIC",
    "CLEAN BRIT",
    "CALI CLEAN",
    "UK CLEAN",
    "DEEP CLEAN",
    "BRIGHT SWITCH",
    "WARM",
    "LITTLE THING",
    "CHICKEN PICKER",
    "BRIT OD",
    "AC CRUNCH",
    "CHUNKY BRIT",
    "LIL CHAMPION",
    "CHIME DRIVE",
    "2X12 COMBO",
    "4X12 CRUNCH",
    "SWAMPTONE",
    "NASALTONE",
    "BROWN",
    "SCOOPED",
    "METALLIC",
    "TC DARK MATTER",
    "OD PEDAL",
    "DARK OD PEDAL",
    "DISTORTION PEDAL",
    "BODYREZ 1",
    "BODYREZ 2",
    "BODYREZ 3",
    "BODYREZ 4",
    "BODYREZ 5"
  ],
  "choir_style": [
    "SMALL 1",
    "SMALL 2",
    "MEDIUM 1",
    "MEDIUM 2",
    "MEDIUM 3",
    "LARGE",
    "LOOSE",
    "EUROPEAN",
    "AMERICAN",
    "TIGHT",
    "PITCHY",
    "SPEAKING",
    "CHAOS"
  ],
  "comp_style": [
    "SUBTLE TUBE",
    "SUBTLE SUSTAIN",
    "SUSTAIN ATTACK",
    "SUSTAIN POP",
    "PUMPING"
  ],
  "correct_scale": [
    "MAJOR",
    "MINOR NAT",
    "MINOR HARM",
    "MINOR ASC",
    "CHROMATIC",
    "CUSTOM (NOTE ENABLE)"
  ],
  "delay_division": [
    "8X1/4",
    "7X1/4",
    "6X1/4",
    "4X1/4",
    "1/2 DOT",
    "1/2",
    "1/2 TRIP",
    "1/4 DOT",
    "1/4 2-DOT",
    "1/4",
    "1/4 TRIP",
    "1/8 DOT",
    "1/8",
    "1/8 TRIP",
    "1/16 DOT",
    "1/16",
    "1/16 TRIP",
    "1/32 DOT",
    "1/32",
    "1/32 TRIP"
  ],
  "delay_filter": [
    "OFF",
    "BRIGHT",
    "ANALOG",
    "DARK",
    "LO-FI"
  ],
  "delay_source": [
    "MANUAL",
    "TEMPO"
  ],
  "delay_style_guitar": [
    "HALF",
    "QUARTER",
    "EIGTH",
    "TRIPLET",
    "DOTTED 1/8",
    "DOTTED 1/4",
    "1/4 TRIPLET",
    "SIXTEENTH",
    "PING PONG 1",
    "PING PONG 2",
    "PING PONG 3",
    "MULTITAP 1",
    "MULTITAP 2",
    "MULTITAP 3",
    "MULTITAP 4",
    "MULTITAP 5",
    "MULTITAP 6",
    "CLASSIC SLAP",
    "SET TIME"
  ],
  "delay_style_voice": [
    "FLASHBACK 2290",
    "FLASHBACK ANALOG",
    "FLASHBACK TAPE",
    "FLASHBACK LO-FI",
    "FLASHBACK SLAP",
    "EDGE-Y MOD",
    "ANALOG MODULAR",
    "QUARTER",
    "DOTTED 1/8",
    "PING-PONG",
    "PING-PONG FX",
    "MULTI-TAP",
    "300MS",
    "LONG & THIN",
    "REVERB TANK"
  ],
  "double_style": [
    "1 VOICE TIGHT",
    "1 VOICE LOOSE",
    "2 VOICES WIDE",
    "4 VOICES TIGHT",
    "4 VOICES WIDE",
    "MIXED DOUBLES",
    "4 VOICES MONO",
    "OCTAVE DOWN DOUBLE",
    "OCTAVE UP DOUBLE",
    "OCTAVE DOWN GROUP",
    "OCTAVE UP GROUP",
    "MIXED OCTAVES"
  ],
  "drive_style": [
    "BOOST",
    "DRIVE",
    "DRIVE & BOOST"
  ],
  "expr_pedal_function": [
    "OFF",
    "LEAD OCT DOWN",
    "LEAD OCT UP",
    "HARM OCT DOWN",
    "HARM OCT UP",
    "HARM & DOUBLE LEVEL",
    "DELAY/REVERB LEVEL",
    "HARMONY LEVEL",
    "DOUBLE LEVEL",
    "VOC UMOD LEVEL",
    "VOC DELAY LEVEL",
    "VOC REVERB LEVEL",
    "SYNTH LEVEL",
    "LEAD LEVEL",
    "VOC UMOD/DLY/REV LVL",
    "VOC LEVEL",
    "AUX LEVEL",
    "VOC DELAY SENDS",
    "VOC REVERB SENDS",
    "RHYTHMIC DEPTH",
    "RHYTHMIC DIVISION",
    "STUTTER DIV",
    "GTR UMOD LEVEL",
    "GTR DELAY LEVEL",
    "GTR REVERB LEVEL",
    "GTR DELAY REVERB",
    "GTR RHYTHMIC DEPTH",
    "GTR RHYTHMIC DIV",
    "GTR AMP POST GAIN",
    "GTR AMP PRE GAIN",
    "GTR LEVEL",
    "GTR PAN",
    "LOOPER LEVEL",
    "HEADPHONE LEVEL",
    "GTR DELAY SEND",
    "GTR REVERB SEND",
    "SMART WAH",
    "CONTEXT DELAY SEND"
  ],
  "hardtune_style": [
    "POP",
    "COUNTRY GLISS",
    "CORRECT NATURAL",
    "CORRECT CHROMATIC",
    "GENDER BENDER",
    "ROBOT",
    "PEDAL"
  ],
  "harmony_style": [
    "HIGH",
    "LOW",
    "HIGH & LOW",
    "HIGH & HIGHER",
    "LOW & LOWER",
    "HIGHER & LOWER",
    "BASS & HIGH",
    "GOSPEL CHOIR",
    "UPPER CHOIR",
    "LOWER CHOIR",
    "HIGH & PEDAL + O",
    "HIGH & SCALE -3RD",
    "LOW & FIXED -12",
    "LOWER & PEDAL -5",
    "HIGH & SHIFT +7",
    "BIG MIXED MODE",
    "HIGH & LOW & PEDALS",
    "PEDAL OCTAVE CHOIR",
    "PEDAL BASS GROUP",
    "LOWER MONKS",
    "UPPER MONKS",
    "FIFTH UP",
    "-4TH DOWN",
    "OCTAVE UP GROUP",
    "OCTAVE DOWN GROUP",
    "HARMONIZED NOTES",
    "TIGHT NOTES",
    "MALE NOTES",
    "FEMALE NOTES",
    "4CHNL NOTES"
  ],
  "hit_control": [
    "OFF",
    "ON",
    "HIT ON",
    "HIT OFF"
  ],
  "human_style": [
    "OFF",
    "TIGHT",
    "NATURAL",
    "RELAXED",
    "LOOSE",
    "RANDOM",
    "TIME & PITCH"
  ],
  "key": [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ],
  "key_source": [
    "FOLLOW HARMONY",
    "MANUAL / CUSTOM",
    "ROBOT MODE",
    "PEDAL MODE"
  ],
  "natplay_input": {
    "0": "AUTOSENSE",
    "1": "GUITAR",
    "2": "MIDI",
    "3": "AUX/MON",
    "4": "ROOMSENSE",
    "5": "TRACK/USB"
  },
  "note_division": [
    "8 X 1/4",
    "7 X 1/4",
    "6 X 1/4",
    "4 X 1/4",
    "1/2 DOT",
    "1/2",
    "1/2 TRIP",
    "1/4 DOT",
    "1/4 2-DOT",
    "1/4",
    "1/4 TRIP",
    "1/8 DOT",
    "1/8 DOT",
    "1/8 TRIP",
    "1/16 DOT",
    "1/16",
    "1/16 TRIP",
    "1/32 DOT",
    "1/32",
    "1/32 TRIP"
  ],
  "octaver_style": [
    "OCTAVE DOWN",
    "MIX OCTAVE DOWN",
    "FOURTH DOWN",
    "FIFTH UP",
    "OCTAVE UP",
    "2 OCT DOWN"
  ],
  "on_off": [
    "OFF",
    "ON"
  ],
  "reverb_style_guitar": [
    "HALL OF FAME AMB",
    "HALL OF FAME TILE",
    "HALL OF FAME ROOM",
    "HALL OF FAME LOFI",
    "HALL OF FAME SPRING",
    "HALL OF FAME PLATE",
    "HALL OF FAME HALL",
    "HALL OF FAME CHURCH",
    "WOOL AMBIENCE",
    "MICROSPACE SLAP",
    "ALMOST SLAP",
    "COZY CORNER",
    "AMBIENT SCATTER",
    "LIBRARY",
    "DARK ROOM",
    "BOUNCY ROOM",
    "STUDIO ROOM",
    "DARK BLOOM",
    "SHOWER STALL",
    "SNAPPY ROOM",
    "MUSIC CLUB",
    "WAREHOUSE",
    "SCATTER",
    "BRIGHT & LIVELY",
    "DARK CHAMBER",
    "THIN PLATE",
    "QUICK PLATE",
    "SHORT SPRING",
    "REAL PLATE",
    "JAZZ PLATE",
    "BROADWAY HALL",
    "AMSTERDAM HALL",
    "WOODEN CHAMBER",
    "DOME CHAPEL",
    "REFLECTION PLATE",
    "BASKETBALL COURT",
    "SOFT HALL",
    "REAL PLATE LONG",
    "SPRING-ISH",
    "BRIGHT PLATE",
    "MUSEUM",
    "RINGY",
    "BRIGHT CHAMBER",
    "ST.JOSEPH CHURCH",
    "INDOOR ARENA",
    "SMOOTH PLATE",
    "THIN SPRING",
    "HOCKEY ARENA",
    "FULL SPRING",
    "LONG BRIGHT MOD",
    "LONG SPRING"
  ],
  "reverb_style_voice": [
    "HALL OF FAME AMB",
    "HALL OF FAME TILE",
    "HALL OF FAME ROOM",
    "HALL OF FAME LOFI",
    "HALL OF FAME SPRING",
    "HALL OF FAME PLATE",
    "HALL OF FAME HALL",
    "HALL OF FAME CHURCH",
    "WOOL AMBIENCE",
    "MICROSPACE SLAP",
    "ALMOST SLAP",
    "COZY CORNER",
    "AMBIENT SCATTER",
    "LIBRARY",
    "DARK ROOM",
    "BOUNCY ROOM",
    "STUDIO ROOM",
    "DARK BLOOM",
    "SHOWER STALL",
    "SNAPPY ROOM",
    "MUSIC CLUB",
    "WAREHOUSE",
    "SCATTER",
    "BRIGHT & LIVELY",
    "DARK CHAMBER",
    "THIN PLATE",
    "QUICK PLATE",
    "SHORT SPRING",
    "REAL PLATE",
    "JAZZ PLATE",
    "BROADWAY HALL",
    "AMSTERDAM HALL",
    "WOODEN CHAMBER",
    "DOME CHAPEL",
    "REFLECTION PLATE",
    "SHIMMER MOD",
    "BASKETBALL COURT",
    "SOFT HALL",
    "REAL PLATE LONG",
    "SPRING-ISH",
    "BRIGHT PLATE",
    "MUSEUM",
    "RINGY",
    "BRIGHT CHAMBER",
    "ST.JOSEPH CHURCH",
    "INDOOR ARENA",
    "SMOOTH PLATE",
    "THIN SPRING",
    "HOCKEY ARENA",
    "FULL SPRING",
    "LONG BRIGHT MOD",
    "LONG SPRING"
  ],
  "rhythm_style_guitar": [
    "CHOPPER",
    "TREMOLO",
    "SOFT PANNER",
    "HARD PANNER",
    "SOFT SAW",
    "SAW PANNER",
    "CHOP SAW"
  ],
  "rhythmic_style": [
    "CHOPPER",
    "TREMOLO",
    "GENDER MOD",
    "SOFT PANNER",
    "HARD PANNER",
    "GENDER RANDOM",
    "SYNCOPATED CHOP",
    "SLOWDOWN",
    "SPACE GENDER",
    "GRANULAR",
    "FLUTTER PAN"
  ],
  "rhythmic_target": [
    "LEVEL",
    "PAN",
    "FILTER",
    "PITCH",
    "HARMONY",
    "UMOD",
    "DELAY"
  ],
  "umod_waveform": [
    "SQUARE",
    "TRIANGLE",
    "SINE",
    "SAWTOOTH UP",
    "SAWTOOTH DOWN",
    "SAMPLE AND HOLD",
    "SIXTEENTH ACC",
    "8TH & 16THS",
    "SYNCOPATED",
    "SYNCOPATED ACC",
    "16TH TO 8THS",
    "SWUNG EIGHTHS",
    "STRAIGHT EIGHTHS",
    "EIGHTH TRIPLETS",
    "LATINO ACCENTS",
    "LATINO",
    "8THT & 2T",
    "MILITARY",
    "BHANGRA",
    "SLOWDOWN",
    "SPEEDUP",
    "3/4 TIME 1",
    "3/4 TIME 2"
  ],
  "stutter_capture": [
    "START",
    "FULL",
    "END"
  ],
  "stutter_direction": [
    "FORWARD",
    "REVERSE"
  ],
  "stutter_path": [
    "PRE",
    "POST"
  ],
  "stutter_style": [
    "STUTTER",
    "REVERSE SAMPLE",
    "FORWARD SAMPLE",
    "EIGTH SAMPLE"
  ],
  "synth_style": [
    "SYNTH 1",
    "SYNTH 2",
    "SYNTH HARMONY 1",
    "SYNTH HARMONY 2",
    "BASS VOCODE",
    "SYNTH 3",
    "SYNTH 4",
    "SYNTH 5",
    "GUITAR TALKBOX",
    "GUITAR TALKBOX 2",
    "SYNTH 6",
    "SYNTH 7",
    "PULSE DOUBLE"
  ],
  "transducer_style": [
    "DIGITAL",
    "TAPE",
    "ANALOG",
    "RADIO",
    "MEGA PHONE",
    "CELL PHONE",
    "LO-FI",
    "HI CUT 1",
    "HI CUT 2",
    "HI CUT 3",
    "LO CUT 1",
    "LO CUT 2",
    "LO CUT 3"
  ],
  "tuning": [
    "EQUAL",
    "JUST",
    "BARBERSHOP"
  ],
  "umod_style_guitar": [
    "CORONA CHORUS 12:00",
    "CORONA CHORUS FAST",
    "CORONA CHORUS SLOW",
    "VORTEX FLANGER 12:00",
    "VORTEX FLANGER FAST",
    "SILKY DETUNE",
    "MEDIUM DETUNE",
    "MONO CHORUS",
    "FAST ROTOR",
    "FLANGER",
    "FLANGE FEEDBACK",
    "FLANGE NEGATIVE",
    "MONO FLANGE",
    "SOFT FLANGE"
  ],
  "umod_style_voice": [
    "CHOPPER",
    "TREMOLO",
    "GENDER MOD",
    "SOFT PANNER",
    "HARD PANNER",
    "GENDER RANDOM",
    "SYNCOPATED CHOP",
    "SLOWDOWN",
    "SPACE GENDER",
    "GRANULAR",
    "FLUTTER PAN"
  ],
  "vibrato_style": [
    "OFF",
    "EASY",
    "BALLAD",
    "JAZZ",
    "DELICATE",
    "FLUTTER",
    "MOURNFUL",
    "OLD TIME"
  ],
  "voice_mode": [
    "OFF",
    "NATURAL PLAY",
    "SCALE",
    "SHIFT",
    "PEDAL",
    "FIXED"
  ],
  "voice_voicing": [
    "2 OCTAVE DOWN",
    "OCTAVE DOWN",
    "BASS",
    "LOWER",
    "LOW",
    "UNISON",
    "HIGH",
    "HIGHER",
    "OCTAVE UP"
  ],
  "wah_order": [
    "2ND",
    "4TH"
  ],
  "wah_response": [
    "100 MS",
    "200 MS",
    "300 MS",
    "400 MS",
    "500 MS",
    "600 MS",
    "700 MS",
    "800 MS",
    "900 MS",
    "1000 MS",
    "2000 MS",
    "3000 MS"
  ],
  "wah_style": [
    "CLASSIC WAH",
    "REZ WAH",
    "FILTER WAH",
    "FAST RES TOUCH",
    "RESONANT TOUCH",
    "SLOW RES TOUCH",
    "FAST SOFT TOUCH",
    "SLOW SOFT TOUCH",
    "FILTER TREMOLO",
    "AUTO FILTER"
  ],
  "wah_subtype": [
    "CLASSIC",
    "TOUCH",
    "AUTOWAH"
  ],
  "waveform": [
    "SQUARE",
    "TRIANGLE",
    "SINE",
    "SAWTOOTH UP",
    "SAWTOOTH DOWN"
  ]
};

export function getCategories() {
  return Object.keys(VL3X_PARAMS);
}

export function getSubcategories(category) {
  return VL3X_PARAMS[category] ? Object.keys(VL3X_PARAMS[category]) : [];
}

export function getParameters(category, subcategory) {
  return VL3X_PARAMS[category]?.[subcategory] || [];
}

export function getEnumValues(enumName) {
  return ENUMS[enumName] || [];
}

export function findParamByOffset(offset) {
  for (const category of Object.keys(VL3X_PARAMS)) {
    for (const subcategory of Object.keys(VL3X_PARAMS[category])) {
      const param = VL3X_PARAMS[category][subcategory].find(p => p.offset === offset);
      if (param) {
        return { ...param, category, subcategory };
      }
    }
  }
  return null;
}
