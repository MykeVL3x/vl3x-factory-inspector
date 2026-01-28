/**
 * state.js - Global state management for VL3X Inspector
 * Simple reactive state store with subscription support
 */

// Default state values
const DEFAULT_STATE = {
  currentView: 'presets',        // 'presets' | 'setup' | 'effects'
  activeCategory: 'vocal_params', // 'vocal_params' | 'guitar_params' | 'looper' | 'pedal_control'
  activeGuitarSub: 'Amp',        // Current guitar subtab
  activeVocalSub: 'Harmony',     // Current vocal subtab
  activeEffectGroup: 'Pitch/Harmony', // Current effects view group
  selectedPreset: null,          // Currently selected preset object
  data: null,                    // Loaded preset data
  setupData: null                // Loaded setup data
};

// Current state
let state = { ...DEFAULT_STATE };

// Subscribers list
let subscribers = [];

/**
 * Create initial state (returns a copy of defaults)
 */
export function createState() {
  return { ...DEFAULT_STATE };
}

/**
 * Get state value(s)
 * @param {string} [key] - Optional key to get specific value
 * @returns {*} State value or full state object
 */
export function getState(key) {
  if (key === undefined) {
    return { ...state };
  }
  return state[key];
}

/**
 * Set state value(s)
 * @param {string|object} keyOrObject - Key to set or object with multiple updates
 * @param {*} [value] - Value to set (when key is string)
 */
export function setState(keyOrObject, value) {
  let changedKey = null;

  if (typeof keyOrObject === 'string') {
    state[keyOrObject] = value;
    changedKey = keyOrObject;
  } else if (typeof keyOrObject === 'object') {
    Object.assign(state, keyOrObject);
    changedKey = Object.keys(keyOrObject)[0]; // First key for notification
  }

  // Notify subscribers
  notifySubscribers(changedKey);
}

/**
 * Subscribe to state changes
 * @param {function} callback - Called with (newState, changedKey)
 * @returns {function} Unsubscribe function
 */
export function subscribe(callback) {
  subscribers.push(callback);

  return function unsubscribe() {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
}

/**
 * Reset state to defaults
 */
export function resetState() {
  state = { ...DEFAULT_STATE };
}

/**
 * Notify all subscribers of state change
 * @param {string} changedKey - Key that changed
 */
function notifySubscribers(changedKey) {
  const stateCopy = { ...state };
  subscribers.forEach(callback => {
    callback(stateCopy, changedKey);
  });
}
