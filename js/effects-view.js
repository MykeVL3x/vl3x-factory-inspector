/**
 * effects-view.js - Effect-centric view for performing musicians
 * Groups effects by function (Pitch, Tone, Time, Texture),
 * shows prominent on/off status, highlights TYPE/STYLE,
 * provides consistency checking
 */

import { EFFECTS_GROUPS, EFFECTS_DESCRIPTIONS } from './constants.js';
import { getState, setState } from './state.js';
import { getDisplayValue } from './value-transforms.js';
import { parsePresetValues } from './data-loader.js';
import { EFFECT_DEFINITIONS } from './effect-definitions.js';
import { checkEffectsConsistency } from './consistency-checker.js';

/**
 * Render effects group tabs
 */
export function renderEffectsGroupTabs(container, onChange) {
  const activeGroup = getState('activeEffectGroup');

  let html = '';
  for (const group of Object.keys(EFFECTS_GROUPS)) {
    const isActive = group === activeGroup;
    html += `<button class="tab-btn ${isActive ? 'active' : ''}" data-group="${group}">${group}</button>`;
  }

  container.innerHTML = html;

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      setState('activeEffectGroup', group);

      container.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.group === group);
      });

      if (onChange) {
        onChange(group);
      }
    });
  });
}

/**
 * Render effects parameters - effect-centric approach
 */
export function renderEffectsParams(container, data, preset) {
  if (!data) {
    container.innerHTML = '<div class="loading">Data not loaded</div>';
    return 0;
  }

  const activeGroup = getState('activeEffectGroup');
  const values = preset ? parsePresetValues(preset, data.labels.length) : null;

  // Get effects for this group
  const groupEffects = EFFECTS_GROUPS[activeGroup] || [];
  const effects = {};

  for (const effectName of groupEffects) {
    if (EFFECT_DEFINITIONS[effectName]) {
      effects[effectName] = EFFECT_DEFINITIONS[effectName];
    }
  }

  // Check if we have effect definitions for this group
  if (Object.keys(effects).length > 0) {
    return renderEffectCardsView(container, data, values, activeGroup, effects);
  }

  // Fallback to legacy view if no effect definitions
  return renderLegacyEffectsView(container, data, values, activeGroup);
}

/**
 * Render effect cards view for any category
 */
function renderEffectCardsView(container, data, values, groupName, effects) {
  if (!values) {
    container.innerHTML = `<div class="empty-state">
      <p>Select a preset to view ${groupName} effects</p>
    </div>`;
    return 0;
  }

  // Get consistency check results
  const consistency = checkEffectsConsistency(values, effects);
  const description = EFFECTS_DESCRIPTIONS[groupName];

  let html = '';

  // Relationship Summary
  html += `<div class="effects-summary compact">
    <div class="summary-stats">
      <span class="stat-compact"><strong>${Object.keys(effects).length}</strong> Effects</span>
      <span class="stat-divider">|</span>
      <span class="stat-compact"><strong>${consistency.vocalCount}</strong> Vocal</span>
      <span class="stat-divider">|</span>
      <span class="stat-compact"><strong>${consistency.guitarCount}</strong> Guitar</span>
    </div>
    <div class="consistency-checks">
      ${consistency.checks.map(c =>
        `<span class="consistency-check ${c.type}">${c.message}</span>`
      ).join('')}
    </div>
  </div>`;

  // View Description (unique per category)
  if (description) {
    // Wrap first word in span for emphasis
    const textWords = description.text.split(' ');
    const firstWord = textWords[0];
    const restOfText = textWords.slice(1).join(' ');

    html += `<div class="effects-view-intro">
      <p class="intro-text"><span class="intro-first-word">${firstWord}</span> ${restOfText}</p>
      <div class="intro-benefits">
        ${description.benefits.map(b => `
          <div class="benefit-item">
            <span class="benefit-icon">&#9679;</span>
            <span class="benefit-text"><strong>${b.strong}</strong> ${b.text}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
  }

  // Effect Cards
  html += '<div class="effect-cards">';

  for (const [key, effect] of Object.entries(effects)) {
    html += renderEffectCard(key, effect, values, data);
  }

  html += '</div>';

  container.innerHTML = html;

  return Object.keys(effects).length;
}

/**
 * Render individual effect card
 */
function renderEffectCard(key, effect, values, data) {
  // Get TYPE/STYLE display value - this defines the effect's character
  const typeValue = values[effect.typeOffset];
  const typeDisplay = getDisplayValue(effect.typeOffset, typeValue, values, data);

  let html = `<div class="effect-card" data-effect="${key}">
    <div class="effect-header">
      <div class="effect-title">
        <span class="effect-name">${effect.displayName}</span>
        <span class="domain-tag ${effect.domain}">${effect.domain.toUpperCase()}</span>
      </div>
    </div>

    <div class="effect-type-display">
      <span class="type-label">TYPE:</span>
      <span class="type-value">${typeDisplay}</span>
    </div>

    <div class="key-params-grid">`;

  // Render key parameters
  for (const param of effect.keyParams) {
    const val = values[param.offset];
    const displayVal = getDisplayValue(param.offset, val, values, data);

    let valClass = 'param-value';
    if (val === 0) {
      valClass += ' zero';
    } else if (val < 0) {
      valClass += ' negative';
    }

    html += `<div class="key-param">
      <span class="param-name">${param.label}</span>
      <span class="${valClass}">${displayVal}</span>
    </div>`;
  }

  html += '</div></div>';

  return html;
}

/**
 * Legacy view for groups without effect definitions
 */
function renderLegacyEffectsView(container, data, values, activeGroup) {
  const subs = EFFECTS_GROUPS[activeGroup];

  if (!values) {
    container.innerHTML = `<div class="empty-state">
      <p>Select a preset to view ${activeGroup} effects</p>
    </div>`;
    return 0;
  }

  let html = '<div class="params-grid">';
  let count = 0;

  for (let i = 0; i < data.labels.length; i++) {
    const isVocal = data.categories[i] === 'vocal_params';
    const isGuitar = data.categories[i] === 'guitar_params';

    if (!isVocal && !isGuitar) {
      continue;
    }

    const sub = isVocal ? data.vocal_subs[i] : data.guitar_subs[i];

    if (!subs.includes(sub)) {
      continue;
    }

    const prefix = isVocal ? 'v.' : 'g.';
    const val = values ? values[i] : null;
    const displayVal = values ? getDisplayValue(i, val, values, data) : '-';

    let valClass = 'param-value';
    if (val === 0) {
      valClass += ' zero';
    } else if (val !== null && val < 0) {
      valClass += ' negative';
    }

    const cleanLabel = data.labels[i].replace(/^(Guitar |Vocal |Voice)/, '');

    html += `<div class="param-item">
      <span class="param-label">${prefix}${sub}-${cleanLabel}</span>
      <span class="${valClass}">${displayVal}</span>
    </div>`;

    count++;
  }

  html += '</div>';

  if (count === 0) {
    html = '<div class="empty-state"><p>No parameters in this group</p></div>';
  }

  container.innerHTML = html;

  return count;
}

/**
 * Update header for effects view
 */
export function updateEffectsHeader(titleEl, infoEl) {
  titleEl.textContent = 'Effects View';
  infoEl.textContent = 'Parameters grouped by effect type';
}

/**
 * Show/hide effects-specific UI elements
 */
export function toggleEffectsUI(elements, show) {
  if (elements.subtabs) {
    elements.subtabs.style.display = 'none';
  }
}
