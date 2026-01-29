/**
 * consistency-checker.js - Relationship analysis for effect configurations
 * Focuses on how effects relate to each other, not ON/OFF state
 */

import { EFFECT_DEFINITIONS } from './effect-definitions.js';

/**
 * Analyze relationships for any effects group
 * @param {number[]} values - Preset values array
 * @param {Object} effects - Effects to analyze (subset of EFFECT_DEFINITIONS)
 * @returns {Object} Relationship analysis results
 */
export function checkEffectsConsistency(values, effects) {
  const results = {
    vocalCount: 0,
    guitarCount: 0,
    sharedCount: 0,
    checks: []
  };

  // Count effects by domain
  for (const [key, effect] of Object.entries(effects)) {
    if (effect.domain === 'vocal') {
      results.vocalCount++;
    } else if (effect.domain === 'guitar') {
      results.guitarCount++;
    } else if (effect.domain === 'shared') {
      results.sharedCount++;
    }
  }

  // Run category-specific relationship analysis
  analyzeRelationships(values, effects, results);

  return results;
}

/**
 * Analyze relationships based on which effects are present
 */
function analyzeRelationships(values, effects, results) {
  const effectKeys = Object.keys(effects);

  // Pitch category relationships
  if (effectKeys.includes('Harmony') && effectKeys.includes('HardTune')) {
    analyzePitchRelationships(values, effects, results);
  }

  // Time category relationships
  if (effectKeys.includes('Delay') && effectKeys.includes('Reverb')) {
    analyzeTimeRelationships(values, effects, results);
  }

  // Tone category relationships
  if (effectKeys.includes('Amp') || effectKeys.includes('Drive')) {
    analyzeToneRelationships(values, effects, results);
  }

  // Texture category relationships
  if (effectKeys.includes('Double') || effectKeys.includes('Choir')) {
    analyzeTextureRelationships(values, effects, results);
  }

  // Default relationship note if none found
  if (results.checks.length === 0) {
    if (results.vocalCount > 0 && results.guitarCount > 0) {
      results.checks.push({
        type: 'info',
        message: 'Cross-domain configuration (vocal + guitar effects)'
      });
    }
  }
}

/**
 * Pitch relationship analysis
 */
function analyzePitchRelationships(values, effects, results) {
  // Compare Harmony and HardTune key sources
  const harmonyKey = effects.Harmony ? values[30] : null; // KEY offset
  const hardtuneKey = effects.HardTune ? values[272] : null; // KEY offset

  if (harmonyKey !== null && hardtuneKey !== null) {
    if (harmonyKey === hardtuneKey) {
      results.checks.push({
        type: 'pass',
        message: 'Harmony & HardTune share same key source'
      });
    } else {
      results.checks.push({
        type: 'info',
        message: 'Harmony & HardTune use different key sources'
      });
    }
  }

  // Check for cross-domain pitch layering
  if (effects.Harmony && effects.Octaver) {
    results.checks.push({
      type: 'info',
      message: 'Vocal harmony + Guitar octaver (layered pitch design)'
    });
  }

  // Humanize relationship
  if (effects.Harmony) {
    const humanize = values[32];
    const vibrato = values[33];
    if (humanize > 50 && vibrato > 30) {
      results.checks.push({
        type: 'pass',
        message: 'High humanize + vibrato (natural-sounding harmonies)'
      });
    } else if (humanize < 20 && vibrato < 10) {
      results.checks.push({
        type: 'info',
        message: 'Low humanize + vibrato (tight, robotic harmonies)'
      });
    }
  }
}

/**
 * Time relationship analysis (Delay/Reverb)
 */
function analyzeTimeRelationships(values, effects, results) {
  if (!effects.Delay || !effects.Reverb) return;

  const delayFeedback = values[54]; // FDBK offset
  const reverbDecay = values[63]; // DECAY offset

  // Analyze feedback vs decay relationship
  if (delayFeedback > 60 && reverbDecay > 70) {
    results.checks.push({
      type: 'warn',
      message: 'High delay feedback + long reverb (washy, ambient design)'
    });
  } else if (delayFeedback < 30 && reverbDecay < 40) {
    results.checks.push({
      type: 'pass',
      message: 'Tight delay + short reverb (clear, defined space)'
    });
  } else {
    results.checks.push({
      type: 'info',
      message: 'Balanced delay/reverb relationship'
    });
  }
}

/**
 * Tone relationship analysis (Amp/Drive/Comp)
 */
function analyzeToneRelationships(values, effects, results) {
  const hasAmp = !!effects.Amp;
  const hasDrive = !!effects.Drive;
  const hasComp = !!effects.Comp;

  if (hasAmp && hasDrive) {
    const ampDrive = values[179]; // Amp DRIVE
    const pedalDrive = values[193]; // Drive DRIVE

    if (ampDrive > 50 && pedalDrive > 50) {
      results.checks.push({
        type: 'warn',
        message: 'High amp gain + high pedal drive (stacked gain staging)'
      });
    } else if (ampDrive < 30 && pedalDrive > 60) {
      results.checks.push({
        type: 'pass',
        message: 'Clean amp + driven pedal (pedal-forward tone)'
      });
    } else if (ampDrive > 60 && pedalDrive < 30) {
      results.checks.push({
        type: 'pass',
        message: 'Driven amp + light pedal (amp-forward tone)'
      });
    }
  }

  if (hasComp && hasDrive) {
    results.checks.push({
      type: 'info',
      message: 'Compression + drive (sustained, even response)'
    });
  }

  if (effects.Transducer && effects.Amp) {
    results.checks.push({
      type: 'info',
      message: 'Voice transducer + guitar amp (dual-domain tone shaping)'
    });
  }
}

/**
 * Texture relationship analysis (Double/Choir/Mod)
 */
function analyzeTextureRelationships(values, effects, results) {
  const hasDouble = !!effects.Double;
  const hasChoir = !!effects.Choir;
  const hasUmod = !!effects.uMod;

  if (hasDouble && hasChoir) {
    results.checks.push({
      type: 'info',
      message: 'Double + Choir configured (layered thickness options)'
    });
  }

  if (hasDouble && !hasChoir) {
    const doubleAmount = values[36];
    if (doubleAmount > 70) {
      results.checks.push({
        type: 'info',
        message: 'Heavy doubling (wide stereo spread)'
      });
    } else if (doubleAmount < 30) {
      results.checks.push({
        type: 'pass',
        message: 'Subtle doubling (natural width enhancement)'
      });
    }
  }

  if (hasUmod) {
    const modRate = values[70];
    const modDepth = values[71];
    if (modRate > 60 && modDepth > 60) {
      results.checks.push({
        type: 'info',
        message: 'Fast, deep modulation (obvious effect character)'
      });
    } else if (modRate < 30 && modDepth < 30) {
      results.checks.push({
        type: 'pass',
        message: 'Slow, subtle modulation (gentle movement)'
      });
    }
  }
}

/**
 * Legacy function for backward compatibility
 */
export function checkPitchHarmonyConsistency(values) {
  const pitchEffects = {
    'Harmony': EFFECT_DEFINITIONS['Harmony'],
    'HardTune': EFFECT_DEFINITIONS['HardTune'],
    'Octaver': EFFECT_DEFINITIONS['Octaver']
  };
  return checkEffectsConsistency(values, pitchEffects);
}
