/**
 * sysex-params.js - VL3X Parameter API
 *
 * Re-exports parameter data and enums, plus helper functions.
 * Data split into separate files for maintainability:
 *   - sysex-params-data.js (VL3X_PARAMS)
 *   - sysex-enums.js (ENUMS)
 */

import { VL3X_PARAMS } from './sysex-params-data.js';
import { ENUMS } from './sysex-enums.js';

// Re-export data
export { VL3X_PARAMS, ENUMS };

// Helper functions

export function getCategories() {
  return Object.keys(VL3X_PARAMS);
}

export function getSubcategories(category) {
  return Object.keys(VL3X_PARAMS[category] || {});
}

export function getParameters(category, subcategory) {
  return VL3X_PARAMS[category]?.[subcategory] || [];
}

export function findParamByOffset(offset) {
  for (const cat of Object.keys(VL3X_PARAMS)) {
    for (const sub of Object.keys(VL3X_PARAMS[cat])) {
      const param = VL3X_PARAMS[cat][sub].find(p => p.offset === offset);
      if (param) return { ...param, category: cat, subcategory: sub };
    }
  }
  return null;
}

export function getEnumValues(enumName) {
  return ENUMS[enumName] || [];
}
