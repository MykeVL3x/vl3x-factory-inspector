/**
 * sysex-params.js - Complete VL3X parameter database
 * Auto-generated from gold_standard_reference.json
 * Total parameters: 568
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
        "name": "LO F PRE",
        "offset": 1,
        "min": 0,
        "max": 240,
        "enum": null,
        "unit": "Hz",
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
        "name": "LO BW PRE",
        "offset": 3,
        "min": 0,
        "max": 24,
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
        "unit": "Hz",
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
        "name": "HI BW PRE",
        "offset": 6,
        "min": 0,
        "max": 24,
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
        "unit": "Hz",
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
        "name": "MID BW PRE",
        "offset": 9,
        "min": 0,
        "max": 24,
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
        "unit": "Hz",
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
        "name": "LO BW POST",
        "offset": 12,
        "min": 0,
        "max": 24,
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
        "unit": "Hz",
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
        "name": "HI BW POST",
        "offset": 15,
        "min": 0,
        "max": 24,
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
        "unit": "Hz",
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
        "name": "MID BW POST",
        "offset": 18,
        "min": 0,
        "max": 24,
        "enum": null,
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
        "name": "POSTGAIN",
        "offset": 259,
        "min": -40,
        "max": 18,
        "enum": null,
        "unit": "dB",
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
        "name": "LOCUT FC",
        "offset": 262,
        "min": 0,
        "max": 72,
        "enum": null,
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
        "name": "SPKR GAIN",
        "offset": 267,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
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
        "name": "SPKR FC",
        "offset": 269,
        "min": 0,
        "max": 240,
        "enum": null,
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
        "name": "FEEDBACK L",
        "offset": 121,
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
        "name": "FEEDBACK R",
        "offset": 123,
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
        "name": "SPEED",
        "offset": 125,
        "min": 5,
        "max": 1000,
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
        "name": "INV PHASE",
        "offset": 132,
        "min": 0,
        "max": 3,
        "enum": "on_off",
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
        "name": "SOURCE",
        "offset": 151,
        "min": 0,
        "max": 1,
        "enum": "delay_source",
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
        "name": "DIV R",
        "offset": 153,
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
        "name": "DELAY R",
        "offset": 155,
        "min": 0,
        "max": 2500,
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
        "name": "FEEDBACK R",
        "offset": 157,
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
        "name": "XFB R TO L",
        "offset": 159,
        "min": 0,
        "max": 100,
        "enum": null,
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
        "name": "TRAILS",
        "offset": 163,
        "min": 0,
        "max": 1,
        "enum": "on_off",
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
        "name": "DUCKING",
        "offset": 173,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
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
        "name": "PREDELAY",
        "offset": 193,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
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
        "name": "DIFFUSE",
        "offset": 194,
        "min": -50,
        "max": 50,
        "enum": null,
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
        "name": "EARLY RFLCT",
        "offset": 200,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
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
        "name": "TAIL LEVEL",
        "offset": 202,
        "min": -25,
        "max": 0,
        "enum": null,
        "unit": "dB",
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
      }
    ],
    "null": [
      {
        "name": "DC GAIN",
        "offset": 260,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "dB",
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
      }
    ],
    "Preset": [
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
      }
    ],
    "Rhythmic": [
      {
        "name": "TYPE",
        "offset": 327,
        "min": 0,
        "max": 6,
        "enum": "rhythmic_style",
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
        "name": "DIVISION",
        "offset": 329,
        "min": 0,
        "max": 19,
        "enum": "note_division",
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
        "name": "TREM BPM",
        "offset": 331,
        "min": 45,
        "max": 300,
        "enum": null,
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
    ]
  },
  "Hit Control": {
    "Octaver": [
      {
        "name": "HitControl.Gtr Shift",
        "offset": 301,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "uMod": [
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
        "name": "HitControl.Gtr Micromod",
        "offset": 296,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Delay": [
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
        "name": "HitControl.Gtr Delay",
        "offset": 297,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Reverb": [
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
        "name": "HitControl.Gtr Reverb",
        "offset": 298,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Harmony": [
      {
        "name": "HIT CONTROL",
        "offset": 285,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "Double": [
      {
        "name": "HIT CONTROL",
        "offset": 286,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "Transducer": [
      {
        "name": "HIT CONTROL",
        "offset": 287,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "HardTune": [
      {
        "name": "HIT CONTROL",
        "offset": 288,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "Choir": [
      {
        "name": "HIT CONTROL",
        "offset": 289,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "Rhythmic": [
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
        "name": "HitControl.Gtr Rhythmic",
        "offset": 302,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Stutter": [
      {
        "name": "HIT CONTROL",
        "offset": 291,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "Synth": [
      {
        "name": "HIT CONTROL",
        "offset": 292,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": "None",
        "display": null
      }
    ],
    "null": [
      {
        "name": "HitControl.VocWhammy",
        "offset": 293,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      },
      {
        "name": "HitState.Vocal",
        "offset": 303,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Hit State",
        "offset": 304,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "Wah": [
      {
        "name": "HitControl.Gtr Wah",
        "offset": 294,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Drive": [
      {
        "name": "HitControl.Gtr Boost",
        "offset": 295,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Comp": [
      {
        "name": "HitControl.Gtr Compressor",
        "offset": 299,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ],
    "Amp": [
      {
        "name": "Hit Control",
        "offset": 300,
        "min": 0,
        "max": 3,
        "enum": "hit_control",
        "unit": null,
        "display": null
      }
    ]
  },
  "Global": {
    "Octaver": [
      {
        "name": "OCTAVER GLOBAL",
        "offset": 461,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "uMod": [
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
        "name": "REVERB GLOBAL",
        "offset": 457,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Harmony": [
      {
        "name": "GLOBAL",
        "offset": 445,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "Double": [
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
    "HardTune": [
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
        "name": "GLOBAL",
        "offset": 450,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ],
    "null": [
      {
        "name": "Global.Voc Whammy",
        "offset": 452,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Global.LoopTrigger",
        "offset": 466,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "Transducer": [
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
    "Choir": [
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
        "name": "uMOD GLOBAL",
        "offset": 455,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      },
      {
        "name": "RHYTHMIC GLOBAL",
        "offset": 462,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Stutter": [
      {
        "name": "DELAY GLOBAL",
        "offset": 456,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Amp": [
      {
        "name": "AMP GLOBAL",
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
        "name": "DRIVE GLOBAL",
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
        "name": "COMP GLOBAL",
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
        "name": "WAH GLOBAL",
        "offset": 463,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Button Map": [
      {
        "name": "GLOBAL",
        "offset": 464,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": null,
        "display": null
      }
    ],
    "Expr Pedal": [
      {
        "name": "GLOBAL",
        "offset": 465,
        "min": 0,
        "max": 1,
        "enum": "on_off",
        "unit": "None",
        "display": null
      }
    ]
  },
  "Vocal": {
    "null": [
      {
        "name": "LOW FREQ",
        "offset": 19,
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
        "name": "LOW GAIN",
        "offset": 20,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
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
        "name": "HIGH GAIN",
        "offset": 23,
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
        "display": null
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
        "name": "MID FREQ",
        "offset": 25,
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
        "min": -12,
        "max": 12,
        "enum": null,
        "unit": "dB",
        "display": null
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
        "name": "V1 VOICING",
        "offset": 43,
        "min": 0,
        "max": 8,
        "enum": null,
        "unit": "None",
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
        "name": "V2 PEDAL",
        "offset": 55,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
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
        "name": "V3 PEDAL",
        "offset": 64,
        "min": -36,
        "max": 36,
        "enum": null,
        "unit": "None",
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
      }
    ],
    "Transducer": [
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
        "name": "PRE GAIN",
        "offset": 225,
        "min": -20,
        "max": 20,
        "enum": null,
        "unit": "dB",
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
        "name": "DISTORTION TYPE",
        "offset": 227,
        "min": 0,
        "max": 14,
        "enum": null,
        "unit": "None",
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
      }
    ],
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
        "name": "NOTES PORTA",
        "offset": 37,
        "min": 0,
        "max": 200,
        "enum": null,
        "unit": null,
        "display": null
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
        "name": "V1 GENDER",
        "offset": 49,
        "min": -50,
        "max": 50,
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
        "name": "MODE V2",
        "offset": 51,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
        "display": null
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
        "name": "V2 GENDER",
        "offset": 58,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
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
        "name": "MODE V3",
        "offset": 60,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
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
        "name": "V3 GENDER",
        "offset": 67,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
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
        "name": "MODE V4",
        "offset": 69,
        "min": 0,
        "max": 5,
        "enum": "harmony_mode",
        "unit": "None",
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
        "name": "V4 GENDER",
        "offset": 76,
        "min": -50,
        "max": 50,
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
        "name": "V1 VOICING",
        "offset": 83,
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
        "name": "V1 GENDER",
        "offset": 85,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
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
        "name": "OctShift.V1",
        "offset": 87,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
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
        "name": "V2 GENDER",
        "offset": 90,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
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
        "name": "OctShift.V2",
        "offset": 92,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
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
        "name": "V3 GENDER",
        "offset": 95,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
        "display": null
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
        "name": "OctShift.V3",
        "offset": 97,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
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
        "name": "V4 GENDER",
        "offset": 100,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
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
        "name": "OctShift.V4",
        "offset": 102,
        "min": -1200,
        "max": 1200,
        "enum": null,
        "unit": null,
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
        "name": "FEEDBACK L",
        "offset": 106,
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
        "name": "FEEDBACK R",
        "offset": 108,
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
        "name": "SPEED",
        "offset": 110,
        "min": 5,
        "max": 1000,
        "enum": null,
        "unit": "Hz",
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
        "max": 2,
        "enum": "waveform",
        "unit": "None",
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
        "name": "INV PHASE",
        "offset": 117,
        "min": 0,
        "max": 3,
        "enum": null,
        "unit": "None",
        "display": null
      }
    ],
    "Delay": [
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
        "name": "TYPE",
        "offset": 134,
        "min": 0,
        "max": 18,
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
        "max": 2500,
        "enum": null,
        "unit": "ms",
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
        "max": 12,
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
        "name": "PREDELAY",
        "offset": 180,
        "min": 0,
        "max": 100,
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
        "name": "DIFFUSE",
        "offset": 181,
        "min": -50,
        "max": 50,
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
        "name": "LEAD MIX",
        "offset": 212,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "name": "GENDER",
        "offset": 216,
        "min": -50,
        "max": 50,
        "enum": null,
        "unit": "None",
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
        "name": "RES",
        "offset": 218,
        "min": 1,
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
        "name": "PORTAMENTO",
        "offset": 392,
        "min": 0,
        "max": 5000,
        "enum": null,
        "unit": "ms",
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
        "name": "KEY SOURCE",
        "offset": 272,
        "min": 0,
        "max": 3,
        "enum": "key_source",
        "unit": "None",
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
        "name": "RATE",
        "offset": 275,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": "%",
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
        "name": "GENDER",
        "offset": 277,
        "min": -50,
        "max": 50,
        "enum": null,
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
        "name": "DIVISION",
        "offset": 318,
        "min": 0,
        "max": 19,
        "enum": "note_division",
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
        "name": "TARGET",
        "offset": 320,
        "min": 0,
        "max": 6,
        "enum": "rhythmic_target",
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
        "name": "CAPTURE",
        "offset": 324,
        "min": 0,
        "max": 2,
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
        "name": "PATH",
        "offset": 326,
        "min": 0,
        "max": 1,
        "enum": null,
        "unit": "None",
        "display": null
      }
    ]
  },
  "Mixer": {
    "uMod": [
      {
        "name": "LEAD TO uMOD",
        "offset": 333,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ],
    "Delay": [
      {
        "name": "LEAD TO DLY",
        "offset": 334,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ],
    "Reverb": [
      {
        "name": "LEAD TO REVERB",
        "offset": 335,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ],
    "Harmony": [
      {
        "name": "LEAD LEVEL",
        "offset": 336,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V1 LEVEL",
        "offset": 340,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V1 PAN",
        "offset": 341,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 LEVEL",
        "offset": 342,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V2 PAN",
        "offset": 343,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 LEVEL",
        "offset": 344,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V3 PAN",
        "offset": 345,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 LEVEL",
        "offset": 346,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V4 PAN",
        "offset": 347,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 357,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "HARM TO DLY",
        "offset": 359,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "CHOIR TO DLY",
        "offset": 360,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "uMOD TO DLY",
        "offset": 361,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ],
    "Double": [
      {
        "name": "LEAD LEVEL",
        "offset": 337,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V1 LEVEL",
        "offset": 348,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V1 PAN",
        "offset": 349,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V2 LEVEL",
        "offset": 350,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V2 PAN",
        "offset": 351,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V3 LEVEL",
        "offset": 352,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V3 PAN",
        "offset": 353,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "V4 LEVEL",
        "offset": 354,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "V4 PAN",
        "offset": 355,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 356,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ],
    "null": [
      {
        "name": "VOCAL LEVEL TRIM",
        "offset": 338,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "LEAD PAN",
        "offset": 339,
        "min": -100,
        "max": 100,
        "enum": null,
        "unit": "None",
        "display": null
      },
      {
        "name": "LEVEL",
        "offset": 373,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
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
        "name": "LEVEL",
        "offset": 375,
        "min": -61,
        "max": 6,
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
        "name": "LEVEL",
        "offset": 377,
        "min": -61,
        "max": 6,
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
        "name": "Mixer LW.Level.Gtr uMod",
        "offset": 379,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "Mixer LW.Width.Gtr uMod",
        "offset": 380,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Mixer LW.Level.Gtr Delay",
        "offset": 382,
        "min": -61,
        "max": 0,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "Mixer LW.Width.Gtr Delay",
        "offset": 383,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Mixer LW.Level.Gtr Reverb",
        "offset": 384,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      },
      {
        "name": "Mixer LW.Width.Gtr Reverb",
        "offset": 385,
        "min": 0,
        "max": 100,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Mix.Preset Trim",
        "offset": 386,
        "min": -6,
        "max": 6,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "Mixer L.Preset Trim.Gtr",
        "offset": 387,
        "min": -6,
        "max": 6,
        "enum": null,
        "unit": null,
        "display": null
      }
    ],
    "Synth": [
      {
        "name": "LEVEL",
        "offset": 358,
        "min": -61,
        "max": 6,
        "enum": null,
        "unit": "dB",
        "display": null
      }
    ]
  },
  "Pedal Control": {
    "null": [
      {
        "name": "EXPRESSION PEDAL",
        "offset": 388,
        "min": 0,
        "max": 37,
        "enum": null,
        "unit": "None",
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
      }
    ]
  },
  "Button Map": {
    "Button Map": [
      {
        "name": "uMOD",
        "offset": 394,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "DELAY",
        "offset": 395,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "REVERB",
        "offset": 396,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT",
        "offset": 397,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "COMP",
        "offset": 398,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "DRIVE",
        "offset": 399,
        "min": 0,
        "max": 37,
        "enum": "button_function",
        "unit": "None",
        "display": null
      },
      {
        "name": "uMOD.MODE",
        "offset": 406,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      },
      {
        "name": "DELAY.MODE",
        "offset": 407,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      },
      {
        "name": "REVERB.MODE",
        "offset": 408,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      },
      {
        "name": "HIT.MODE",
        "offset": 409,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      },
      {
        "name": "COMP.MODE",
        "offset": 410,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      },
      {
        "name": "DRIVE.MODE",
        "offset": 411,
        "min": 0,
        "max": 1,
        "enum": "button_modifier",
        "unit": "None",
        "display": null
      }
    ]
  },
  "Looper": {
    "null": [
      {
        "name": "Looper.LoadSlot",
        "offset": 391,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.A",
        "offset": 418,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.B",
        "offset": 419,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.C",
        "offset": 420,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.D",
        "offset": 421,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.E",
        "offset": 422,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.F",
        "offset": 423,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.G",
        "offset": 424,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Slot.H",
        "offset": 425,
        "min": 0,
        "max": 50,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.A",
        "offset": 430,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.B",
        "offset": 431,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.C",
        "offset": 432,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.D",
        "offset": 433,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.E",
        "offset": 434,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.F",
        "offset": 435,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.G",
        "offset": 436,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      },
      {
        "name": "LoopTrigger.Track.H",
        "offset": 437,
        "min": 0,
        "max": 4,
        "enum": null,
        "unit": null,
        "display": null
      }
    ]
  },
  "System": {
    "Settings": [
      {
        "name": "CONTRAST",
        "offset": 0,
        "min": 0,
        "max": 10,
        "system": true
      },
      {
        "name": "Utility.Last_Preset",
        "offset": 1,
        "min": 0,
        "max": 65535,
        "system": true
      },
      {
        "name": "Utility.Active_ButtMap",
        "offset": 2,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Utility.Genre_Filter",
        "offset": 3,
        "min": 0,
        "max": 21,
        "system": true
      },
      {
        "name": "TUNER REFERENCE",
        "offset": 4,
        "min": 800,
        "max": 960,
        "system": true
      },
      {
        "name": "HIT BEHAVIOR",
        "offset": 5,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Utility.GainSetMode.Mi",
        "offset": 6,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "GLOBAL KEY/SCALE",
        "offset": 7,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "GLOBAL TEMPO",
        "offset": 8,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Utility.MIDI_Control",
        "offset": 9,
        "min": 1,
        "max": 2,
        "system": true
      },
      {
        "name": "Utility.MIDI_Channel_I",
        "offset": 10,
        "min": 0,
        "max": 16,
        "system": true
      },
      {
        "name": "Utility.MIDI_Channel_O",
        "offset": 11,
        "min": 0,
        "max": 16,
        "system": true
      },
      {
        "name": "Utility.MIDI_Filter_In",
        "offset": 12,
        "min": 0,
        "max": 7,
        "system": true
      },
      {
        "name": "Utility.MIDI_Filter_Ou",
        "offset": 13,
        "min": 0,
        "max": 3,
        "system": true
      },
      {
        "name": "Utility.SysEx_ID",
        "offset": 14,
        "min": 0,
        "max": 127,
        "system": true
      },
      {
        "name": "SPLIT DIRECTION",
        "offset": 15,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "SPLIT NOTE",
        "offset": 16,
        "min": 0,
        "max": 127,
        "system": true
      },
      {
        "name": "PITCHBEND RANGE",
        "offset": 17,
        "min": 0,
        "max": 12,
        "system": true
      },
      {
        "name": "TRANSPOSE",
        "offset": 18,
        "min": -4,
        "max": 4,
        "system": true
      },
      {
        "name": "MIDI TEMPO",
        "offset": 19,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "INPUT TYPE",
        "offset": 20,
        "min": 0,
        "max": 4,
        "system": true
      },
      {
        "name": "PHASE",
        "offset": 21,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Utility.ExPedalMode",
        "offset": 22,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "Utility.FootSWMode",
        "offset": 23,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "ROOMSENSE AUTO-DETECT",
        "offset": 24,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "XLR OUTPUT LEVEL",
        "offset": 25,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Utility.USBOutMode",
        "offset": 26,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "LEAD DELAY",
        "offset": 27,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "AUX VOCAL CANCEL",
        "offset": 28,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "RoomEQ.Freq",
        "offset": 29,
        "min": 0,
        "max": 104,
        "system": true
      },
      {
        "name": "PreFX.CompThresh",
        "offset": 30,
        "min": -60,
        "max": 0,
        "system": true
      },
      {
        "name": "PreFX.CompRatio",
        "offset": 31,
        "min": 0,
        "max": 14,
        "system": true
      },
      {
        "name": "SHAPE",
        "offset": 32,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "AutoShape.Warmth",
        "offset": 33,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "AutoShape.Auto",
        "offset": 34,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "COMPRESS",
        "offset": 35,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "DynSmooth.Auto",
        "offset": 36,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "DynSmooth.Threshold",
        "offset": 37,
        "min": -30,
        "max": 0,
        "system": true
      },
      {
        "name": "DynSmooth.Ratio",
        "offset": 38,
        "min": 10,
        "max": 40,
        "system": true
      },
      {
        "name": "DE-ESS",
        "offset": 39,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "ParEq.Low_Freq.Voice",
        "offset": 40,
        "min": 0,
        "max": 240,
        "system": true
      },
      {
        "name": "ParEq.Low_Gain.Voice",
        "offset": 41,
        "min": -12,
        "max": 12,
        "system": true
      },
      {
        "name": "ParEq.Low_BW.Voice",
        "offset": 42,
        "min": 0,
        "max": 32,
        "system": true
      },
      {
        "name": "ParEq.Hi_Freq.Voice",
        "offset": 43,
        "min": 0,
        "max": 240,
        "system": true
      },
      {
        "name": "ParEq.Hi_Gain.Voice",
        "offset": 44,
        "min": -12,
        "max": 12,
        "system": true
      },
      {
        "name": "ParEq.Hi_BW.Voice",
        "offset": 45,
        "min": 0,
        "max": 32,
        "system": true
      },
      {
        "name": "ParEq.Par1_Freq.Voice",
        "offset": 46,
        "min": 0,
        "max": 240,
        "system": true
      },
      {
        "name": "ParEq.Par1_Gain.Voice",
        "offset": 47,
        "min": -12,
        "max": 12,
        "system": true
      },
      {
        "name": "ParEq.Par1_BW.Voice",
        "offset": 48,
        "min": 0,
        "max": 32,
        "system": true
      },
      {
        "name": "AutoGate.Mode",
        "offset": 49,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "AutoGate.ManualThresho",
        "offset": 50,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "GATE THRESHOLD",
        "offset": 51,
        "min": -81,
        "max": 0,
        "system": true
      },
      {
        "name": "AutoGateGain.Level.Lea",
        "offset": 52,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "AutoGateGain.Attack.Le",
        "offset": 53,
        "min": 0,
        "max": 45,
        "system": true
      },
      {
        "name": "AutoGateGain.Release.L",
        "offset": 54,
        "min": 0,
        "max": 45,
        "system": true
      },
      {
        "name": "AutoGateGain.Level.Har",
        "offset": 55,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "AutoGateGain.Attack.Ha",
        "offset": 56,
        "min": 0,
        "max": 45,
        "system": true
      },
      {
        "name": "AutoGateGain.Release.H",
        "offset": 57,
        "min": 0,
        "max": 45,
        "system": true
      },
      {
        "name": "VIBRATO BOOST",
        "offset": 58,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "GLOBAL NATPLAY SOURCE",
        "offset": 59,
        "min": 0,
        "max": 6,
        "system": true
      },
      {
        "name": "SPEAKER SIM ENABLE",
        "offset": 60,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "GLOBAL PITCH CORRECT",
        "offset": 61,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "TONE",
        "offset": 62,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Rhythmic.Metronome_Typ",
        "offset": 63,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "Rhythmic.Metronome_Lev",
        "offset": 64,
        "min": -100,
        "max": 0,
        "system": true
      },
      {
        "name": "Looper.InputA",
        "offset": 65,
        "min": 0,
        "max": 4,
        "system": true
      },
      {
        "name": "Looper.InputB",
        "offset": 66,
        "min": 0,
        "max": 4,
        "system": true
      },
      {
        "name": "Looper.InputC",
        "offset": 67,
        "min": 0,
        "max": 5,
        "system": true
      },
      {
        "name": "LEAD MUTE",
        "offset": 68,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "MIC GAIN",
        "offset": 69,
        "min": 0,
        "max": 66,
        "system": true
      },
      {
        "name": "INPUT GAIN",
        "offset": 70,
        "min": 0,
        "max": 18,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 71,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 72,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "MONITOR GAIN",
        "offset": 73,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "AUX GAIN",
        "offset": 74,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "TALK TRIM",
        "offset": 75,
        "min": -9,
        "max": 4,
        "system": true
      },
      {
        "name": "AUX IN TYPE",
        "offset": 76,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Mix.Main.Guitar_Level",
        "offset": 77,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "Mix.Main.Looper_Level",
        "offset": 78,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.Main.Aux_Level",
        "offset": 79,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.Main.Metronome_Lev",
        "offset": 80,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.Main.USB_Level",
        "offset": 81,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.Guitar_Trim",
        "offset": 82,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.Looper_Trim",
        "offset": 83,
        "min": -13,
        "max": 6,
        "system": true
      },
      {
        "name": "Mix.HP.Metronome_Level",
        "offset": 84,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.USB_Level",
        "offset": 85,
        "min": -31,
        "max": 6,
        "system": true
      },
      {
        "name": "Mix.HP.Aux_Level",
        "offset": 86,
        "min": -31,
        "max": 6,
        "system": true
      },
      {
        "name": "Mix.HP.Monitor_Level",
        "offset": 87,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.RoomSense_Level",
        "offset": 88,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.Main_Trim",
        "offset": 89,
        "min": -13,
        "max": 6,
        "system": true
      },
      {
        "name": "Mix.HP.Overall",
        "offset": 90,
        "min": -61,
        "max": 12,
        "system": true
      },
      {
        "name": "FXMix.Voices",
        "offset": 91,
        "min": -61,
        "max": 6,
        "system": true
      },
      {
        "name": "FXMix.Voc_Reverb",
        "offset": 92,
        "min": -61,
        "max": 6,
        "system": true
      },
      {
        "name": "FXMix.Gtr_Reverb",
        "offset": 93,
        "min": -61,
        "max": 6,
        "system": true
      },
      {
        "name": "OUTPUT MODE",
        "offset": 94,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "USB OUTPUT TRIM",
        "offset": 95,
        "min": -12,
        "max": 12,
        "system": true
      },
      {
        "name": "XLR OUTPUT",
        "offset": 96,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "SimpleLim.Threshold.He",
        "offset": 97,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "SimpleLim.Attack.Headp",
        "offset": 98,
        "min": 0,
        "max": 19,
        "system": true
      },
      {
        "name": "SimpleLim.Release.Head",
        "offset": 99,
        "min": 0,
        "max": 19,
        "system": true
      },
      {
        "name": "SimpleLim.Threshold.Ro",
        "offset": 100,
        "min": -61,
        "max": 0,
        "system": true
      },
      {
        "name": "SimpleLim.Attack.RoomS",
        "offset": 101,
        "min": 0,
        "max": 19,
        "system": true
      },
      {
        "name": "SimpleLim.Release.Room",
        "offset": 102,
        "min": 0,
        "max": 19,
        "system": true
      },
      {
        "name": "Pedal.A.Calib",
        "offset": 103,
        "min": 0,
        "max": 2097151,
        "system": true
      },
      {
        "name": "Pedal.B.Calib",
        "offset": 104,
        "min": 0,
        "max": 2097151,
        "system": true
      },
      {
        "name": "Pedal.B.Func",
        "offset": 105,
        "min": 0,
        "max": 36,
        "system": true
      },
      {
        "name": "Pedal.B.MinPos",
        "offset": 106,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "Pedal.B.MaxPos",
        "offset": 107,
        "min": 0,
        "max": 100,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_1",
        "offset": 108,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_2",
        "offset": 109,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_3",
        "offset": 110,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "ButtonMap.StepKey",
        "offset": 111,
        "min": 0,
        "max": 36,
        "system": true
      },
      {
        "name": "ButtonMap.MicSwitch_1",
        "offset": 112,
        "min": 0,
        "max": 27,
        "system": true
      },
      {
        "name": "ButtonMode.StepKey",
        "offset": 113,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_4",
        "offset": 114,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_5",
        "offset": 115,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_6",
        "offset": 116,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_1",
        "offset": 117,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_2",
        "offset": 118,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.ExtFootSw_3",
        "offset": 119,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.MicSwitch_1",
        "offset": 120,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ALL GUITAR FX GLOBAL",
        "offset": 121,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "GLOBAL PRESET",
        "offset": 122,
        "min": 0,
        "max": 500,
        "system": true
      },
      {
        "name": "Mix.Main.Overall",
        "offset": 123,
        "min": -30,
        "max": 0,
        "system": true
      },
      {
        "name": "MIC CLIP PROTECTION",
        "offset": 124,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_4",
        "offset": 125,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_5",
        "offset": 126,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "ButtonMap.ExtFootSw_6",
        "offset": 127,
        "min": 0,
        "max": 54,
        "system": true
      },
      {
        "name": "MIX ROOMSENSE TO NP",
        "offset": 128,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "MIX SCREEN TIMEOUT",
        "offset": 129,
        "min": 3,
        "max": 11,
        "system": true
      },
      {
        "name": "ButtonMap.MicSwitch_2",
        "offset": 130,
        "min": 0,
        "max": 27,
        "system": true
      },
      {
        "name": "ButtonMap.MicSwitch_3",
        "offset": 131,
        "min": 0,
        "max": 27,
        "system": true
      },
      {
        "name": "ButtonMap.MicSwitch_4",
        "offset": 132,
        "min": 0,
        "max": 27,
        "system": true
      },
      {
        "name": "ButtonMode.MicSwitch_2",
        "offset": 133,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.MicSwitch_3",
        "offset": 134,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "ButtonMode.MicSwitch_4",
        "offset": 135,
        "min": 0,
        "max": 1,
        "system": true
      },
      {
        "name": "Mix.Main.Track_Level",
        "offset": 136,
        "min": -31,
        "max": 12,
        "system": true
      },
      {
        "name": "Mix.HP.Track_Level",
        "offset": 137,
        "min": -31,
        "max": 6,
        "system": true
      },
      {
        "name": "MIDI TX DELAY",
        "offset": 138,
        "min": 0,
        "max": 3,
        "system": true
      },
      {
        "name": "USB MODE",
        "offset": 139,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "GUITAR JACK MODE",
        "offset": 140,
        "min": 0,
        "max": 2,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 141,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 142,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 143,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 144,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 145,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 146,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 147,
        "min": null,
        "max": null,
        "system": true
      },
      {
        "name": "<Reserved>",
        "offset": 148,
        "min": null,
        "max": null,
        "system": true
      }
    ]
  }
};

export const ENUMS = {
  "key": [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B"
  ],
  "scale": [
    "Major",
    "Minor",
    "Mixolydian",
    "Dorian",
    "Lydian",
    "HarmonicMinor",
    "Custom"
  ],
  "natplay_input": [
    "AUTOSENSE",
    "GUITAR",
    "MIDI",
    "AUX/MON",
    "ROOMSENSE",
    "TRACK/USB"
  ],
  "harmony_mode": [
    "NaturalPlay",
    "Scale",
    "Shift",
    "Drone",
    "Fixed",
    "Off"
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
  "human_style": [
    "Unison",
    "Duet",
    "Trio",
    "Quartet",
    "Choir",
    "ChoirLg",
    "DirtRd"
  ],
  "vibrato_style": [
    "Slow",
    "MedSlow",
    "Medium",
    "MedFast",
    "Fast",
    "Warble",
    "Psycho",
    "Random"
  ],
  "choir_style": [
    "Choir",
    "2-Part",
    "2-PartW",
    "4-Part",
    "4-PartW",
    "Gospel",
    "GospelW",
    "RockOut",
    "RockOutW",
    "SftBack",
    "SftBackW",
    "Caraoke",
    "OFF"
  ],
  "double_style": [
    "1Voice",
    "1VoiceW",
    "2Voice",
    "2VoiceW",
    "4Voice",
    "4VoiceW",
    "Oct Up",
    "Oct UpW",
    "Oct Down",
    "OctDwnW",
    "Spread",
    "OFF"
  ],
  "delay_style_voice": [
    "HALF",
    "QUARTER",
    "EIGHTH",
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
  "delay_style_guitar": [
    "FLASHBACK 2290",
    "FLASHBACK ANALOG",
    "FLASHBACK TAPE",
    "FLASHBACK LOFI",
    "FLASHBACK SLAP",
    "EDGE-y MOD",
    "ANALOG MODULBR",
    "QUARTER",
    "DOTTED 1/8",
    "PING PONG",
    "PING PONG FX",
    "MULTITAP",
    "300 MS",
    "LONG & THIN",
    "REVERB TANK"
  ],
  "reverb_style_voice": [
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
    "ST. JOSEPH CHURCH",
    "INDOOR ARENA",
    "SMOOTH PLATE",
    "THIN SPRING",
    "HOCKEY ARENA",
    "FULL SPRING",
    "LONG BRIGHT MOD",
    "LONG SPRING"
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
    "SHIMMER MOD",
    "BASKETBALL COURT",
    "SOFT HALL",
    "REAL PLATE LONG",
    "SPRING-ISH",
    "BRIGHT PLATE",
    "MUSEUM",
    "RINGY",
    "BRIGHT CHAMBER",
    "ST. JOSEPH CHURCH",
    "INDOOR ARENA",
    "SMOOTH PLATE",
    "THIN SPRING",
    "HOCKEY ARENA",
    "FULL SPRING",
    "LONG BRIGHT MOD",
    "LONG SPRING"
  ],
  "synth_style": [
    "Lead 1",
    "Lead 2",
    "Lead 3",
    "Bass 1",
    "Bass 2",
    "Strings 1",
    "Strings 2",
    "Pad 1",
    "Pad 2",
    "Organ 1",
    "Organ 2",
    "Vocoder",
    "OFF"
  ],
  "transducer_style": [
    "Megaphone",
    "Radio",
    "OnThePhone",
    "Distortion",
    "LoFi",
    "RingMod",
    "Boombox",
    "Transistor",
    "Fuzz",
    "OFF"
  ],
  "hardtune_style": [
    "Natural",
    "HiNote",
    "LoNote",
    "HiVibe",
    "LoVibe",
    "Robot",
    "OFF"
  ],
  "correct_scale": [
    "Major",
    "Minor",
    "Chromatic",
    "Mixolydian",
    "Dorian",
    "Custom"
  ],
  "rhythmic_style": [
    "Tremolo",
    "Filter 1",
    "Filter 2",
    "Filter 3",
    "Pan 1",
    "Pan 2",
    "Volume 1",
    "Volume 2",
    "Volume 3",
    "Vocoder",
    "OFF"
  ],
  "stutter_style": [
    "Gate",
    "Stutter1",
    "Stutter2",
    "OFF"
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
  "guitar_comp_style": [
    "Off",
    "Opto",
    "VCA",
    "FET",
    "Squash"
  ],
  "wah_style": [
    "Classic",
    "Bass",
    "Shaft",
    "Hi-Q",
    "Phaser",
    "Flanger",
    "Tremolo",
    "AutoPan",
    "Ring",
    "OFF"
  ],
  "micromod_style_voice": [
    "Micro1",
    "Micro2",
    "Micro3",
    "Chorus1",
    "Chorus2",
    "Chorus3",
    "Detune1",
    "Detune2",
    "Detune3",
    "Flange1",
    "Flange2",
    "Flange3",
    "Rotor1",
    "Rotor2",
    "Rotor3",
    "TremL",
    "TremR",
    "VibShort",
    "VibMed",
    "VibLong",
    "Dimension",
    "Pitch1",
    "OFF"
  ],
  "micromod_style_guitar": [
    "CORONA CHORUS",
    "SILKY DETUNE",
    "FAST ROTOR",
    "VORTEX FLANGER",
    "FLANGER",
    "FLANGE FEEDBACK",
    "FLANGE NEGATIVE",
    "MONO FLANGE",
    "SOFT FLANGE",
    "FLANGER",
    "FLANGE FEEDBACK",
    "FLANGE NEGATIVE",
    "MONO FLANGE",
    "SOFT FLANGE"
  ],
  "hit_control": [
    "Off",
    "On",
    "Toggle",
    "OnInv"
  ],
  "button_modifier": [
    "LATCHED",
    "MOMENTARY"
  ],
  "button_function": [
    "uMod",
    "DELAY",
    "REVERB",
    "VOC HIT",
    "DOUBLE",
    "HARMONY",
    "TRANSDUCER",
    "HARDTUNE",
    "RHYTHMIC",
    "STUTTER",
    "CHOIR",
    "SYNTH",
    "WARM HOLD",
    "SET KEY",
    "TAP TEMPO",
    "BYPASS",
    "G uMOD",
    "G DELAY",
    "G REVERB",
    "G HIT",
    "G COMP",
    "G DRIVE",
    "G AMP",
    "G RHYTHM",
    "G OCTAVER",
    "G WAH",
    "G MUTE",
    "ALL HIT",
    "1BUTLOOPER",
    "LOOPTRIG A",
    "LOOPTRIG B",
    "LOOPTRIG C",
    "LOOPTRIG D",
    "LOOPTRIG E",
    "LOOPTRIG F",
    "LOOPTRIG G",
    "LOOPTRIG H",
    "TRACK START"
  ],
  "delay_filter_style": [
    "DIGITAL",
    "TAPE",
    "ANALOG",
    "RADIO",
    "MEGAPHONE",
    "CELL PHONE",
    "LO-FI",
    "HI CUT 1",
    "HI CUT 2",
    "HI CUT 3",
    "LOW CUT 1",
    "LOW CUT 2",
    "LOW CUT 3"
  ],
  "delay_division": [
    "8 x 1/4",
    "7 x 1/4",
    "6 x 1/4",
    "4 x 1/4",
    "1/2 DOT",
    "1/2",
    "1/2 Trip",
    "1/4 DOT",
    "1/4 2-DOT",
    "1/4",
    "1/4 Trip",
    "1/8 DOT",
    "1/8",
    "1/8 Trip",
    "1/16 DOT",
    "1/16",
    "1/16 TRIP",
    "1/32 DOT",
    "1/32",
    "1/32 TRIP"
  ]
};

// Helper functions
export function getCategories() {
  return Object.keys(VL3X_PARAMS);
}

export function getSubcategories(category) {
  return VL3X_PARAMS[category] ? Object.keys(VL3X_PARAMS[category]) : [];
}

export function getParameters(category, subcategory) {
  return VL3X_PARAMS[category]?.[subcategory] || [];
}

export function findParamByOffset(offset) {
  for (const cat of Object.keys(VL3X_PARAMS)) {
    for (const subcat of Object.keys(VL3X_PARAMS[cat])) {
      const param = VL3X_PARAMS[cat][subcat].find(p => p.offset === offset);
      if (param) return { category: cat, subcategory: subcat, param };
    }
  }
  return null;
}

export function getEnumValues(enumName) {
  return ENUMS[enumName] || [];
}

export function getAllParamsFlat() {
  const all = [];
  for (const cat of Object.keys(VL3X_PARAMS)) {
    for (const subcat of Object.keys(VL3X_PARAMS[cat])) {
      for (const param of VL3X_PARAMS[cat][subcat]) {
        all.push({ category: cat, subcategory: subcat, ...param });
      }
    }
  }
  return all;
}

