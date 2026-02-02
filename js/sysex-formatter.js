/**
 * sysex-formatter.js - SysEx Output Format Utilities
 * Supports multiple output formats for different applications
 *
 * Formats:
 * - raw: Space-separated hex bytes (F0 00 01 38...)
 * - compressed: No spaces (F00001380...) for Morningstar MC-8
 * - stagetraxx: Stage Traxx 4 format [midi: SXF0 00 01 38...]
 */

// ============================================================================
// Format Definitions
// ============================================================================

export const SYSEX_FORMATS = {
  raw: {
    id: 'raw',
    label: 'Raw',
    logo: null,
    description: 'Space-separated hex bytes'
  },
  onsong: {
    id: 'onsong',
    label: 'onSong',
    logo: 'onsonglogo.svg',
    description: 'Add each line via + button'
  },
  compressed: {
    id: 'compressed',
    label: 'Compressed',
    logo: null,
    description: 'No spaces (MC-8)'
  },
  stagetraxx: {
    id: 'stagetraxx',
    label: 'Stage Traxx 4',
    logo: 'ST4.png',
    description: 'ST4 inline timing'
  }
};

// Current selected format
let currentFormat = 'raw';

// ============================================================================
// Format Conversion
// ============================================================================

/**
 * Format milliseconds as mm:ss.xxx for Stage Traxx 4
 * @param {number} ms - Time in milliseconds
 * @returns {string} Formatted time string
 */
function formatST4Time(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = ms % 1000;

  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');
  const xxx = millis.toString().padStart(3, '0');

  return `${mm}:${ss}.${xxx}`;
}

/**
 * Convert a byte array to the specified format
 * @param {number[]} bytes - Array of byte values (0-255)
 * @param {string} format - Format id ('raw', 'onsong', 'compressed', 'stagetraxx')
 * @param {Object} options - Optional settings
 * @param {number} options.timeMs - Time offset in ms for ST4 format
 * @returns {string} Formatted SysEx string
 */
export function formatSysEx(bytes, format = currentFormat, options = {}) {
  const hexBytes = bytes.map(b => b.toString(16).toUpperCase().padStart(2, '0'));

  switch (format) {
    case 'onsong':
      // onSong uses same hex format as raw, WAIT is added between messages
      return hexBytes.join(' ');

    case 'compressed':
      return hexBytes.join('');

    case 'stagetraxx':
      if (options.timeMs !== undefined) {
        const timeStr = formatST4Time(options.timeMs);
        return `[midi@${timeStr}: SX${hexBytes.join(' ')}]`;
      }
      return `[midi: SX${hexBytes.join(' ')}]`;

    case 'raw':
    default:
      return hexBytes.join(' ');
  }
}

/**
 * Format multiple SysEx messages with timing as needed
 * @param {number[][]} messages - Array of byte arrays
 * @param {string} format - Format id
 * @param {Object} options - Optional settings
 * @param {number} options.startTimeMs - Starting time in ms (default 0)
 * @param {number} options.intervalMs - Interval between messages in ms (default 10)
 * @returns {string[]} Array of formatted strings
 */
export function formatMultipleSysEx(messages, format = currentFormat, options = {}) {
  const startTime = options.startTimeMs ?? 0;
  const interval = options.intervalMs ?? 10;
  const result = [];

  messages.forEach((msg, index) => {
    const msgOptions = format === 'stagetraxx'
      ? { timeMs: startTime + (index * interval) }
      : {};
    result.push(formatSysEx(msg, format, msgOptions));
  });

  return result;
}

/**
 * Format with line separator appropriate for the format
 * @param {number[][]} messages - Array of byte arrays
 * @param {string} format - Format id
 * @param {Object} options - Optional settings for timing
 * @returns {string} Joined string with appropriate separators
 */
export function formatSysExBlock(messages, format = currentFormat, options = {}) {
  const formatted = formatMultipleSysEx(messages, format, options);
  return formatted.join('\n');
}

// ============================================================================
// State Management
// ============================================================================

/**
 * Get the current format
 * @returns {string} Current format id
 */
export function getCurrentFormat() {
  return currentFormat;
}

/**
 * Set the current format
 * @param {string} formatId - Format id to set
 */
export function setCurrentFormat(formatId) {
  if (SYSEX_FORMATS[formatId]) {
    currentFormat = formatId;
  }
}

/**
 * Get format info
 * @param {string} formatId - Format id
 * @returns {Object} Format definition
 */
export function getFormatInfo(formatId) {
  return SYSEX_FORMATS[formatId] || SYSEX_FORMATS.raw;
}

// ============================================================================
// UI Rendering
// ============================================================================

/**
 * Render format selector buttons
 * @param {string} containerId - ID for the container element
 * @returns {string} HTML string for format selector
 */
export function renderFormatSelector(containerId = 'formatSelector') {
  const formats = Object.values(SYSEX_FORMATS);

  // Text icons for formats without logos
  const textIcons = {
    raw: 'HEX',
    compressed: 'MC-8'
  };

  return `
    <div class="sysex-format-selector" id="${containerId}">
      ${formats.map(fmt => {
        const isActive = fmt.id === currentFormat;
        const logoHtml = fmt.logo
          ? `<img src="images/${fmt.logo}" alt="${fmt.label}" class="format-logo" />`
          : `<span class="format-text-icon">${textIcons[fmt.id] || fmt.label}</span>`;

        return `
          <button class="format-btn ${isActive ? 'active' : ''}"
                  data-format="${fmt.id}"
                  title="${fmt.description}">
            ${logoHtml}
            <span class="format-label">${fmt.label}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Set up format selector event listeners
 * @param {HTMLElement} container - Container element
 * @param {Function} onFormatChange - Callback when format changes
 */
export function setupFormatSelector(container, onFormatChange) {
  const selector = container.querySelector('.sysex-format-selector');
  if (!selector) return;

  selector.querySelectorAll('.format-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const formatId = btn.dataset.format;
      setCurrentFormat(formatId);

      // Update active state
      selector.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Callback
      if (onFormatChange) {
        onFormatChange(formatId);
      }
    });
  });
}

/**
 * Render format-specific instructions
 * @param {string} format - Format id
 * @returns {string} HTML string for instructions
 */
export function renderFormatInstructions(format = currentFormat) {
  switch (format) {
    case 'onsong':
      return `
        <div class="format-instructions onsong-instructions">
          <p><strong>onSong:</strong> Add each line separately via the MIDI Events screen, pressing <strong>+</strong> for each event in this list.</p>
          <p class="instruction-note">No delays needed between entries on USB MIDI.</p>
        </div>
      `;

    case 'stagetraxx':
      return `
        <div class="format-instructions stagetraxx-instructions">
          <p><strong>Stage Traxx 4:</strong> Copy lines into your cue list. Timing is embedded in each line.</p>
          <p class="instruction-note">First line (Editor Enable) is required before any parameter changes.</p>
          <p class="instruction-note">See <a href="https://stagetraxx.com/user-guide/midi/" target="_blank">ST4 MIDI Guide</a></p>
        </div>
      `;

    case 'compressed':
      return `
        <div class="format-instructions compressed-instructions">
          <p><strong>Morningstar MC-8:</strong> Paste hex string into SysEx field (no spaces).</p>
          <p class="instruction-note">First line (Editor Enable) is required before any parameter changes.</p>
        </div>
      `;

    case 'raw':
    default:
      return `
        <div class="format-instructions raw-instructions">
          <p><strong>Raw:</strong> Space-separated hex bytes. Copy and use as-is with many MIDI tools.</p>
          <br>
          <p class="instruction-note">First line (Editor Enable) is required before any parameter changes.</p>
        </div>
      `;
  }
}
