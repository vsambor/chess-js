import DEFAULT_THEME from './default.js';

const MAIN_THEME = {
  BOARD: {
    display: 'grid',
    margin: '0 auto',
    gridTemplateColumns: 'repeat(8, 1fr)'
  },
  SQUARE: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    display: 'flex'
  },
  SQUARE_ROW_NOTATION: {
    position: 'absolute'
  },
  SQUARE_COL_NOTATION: {
    position: 'absolute'
  },
  PIECE: {
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%'
  }
}

/**
 * Applies the main and custom theme for an element.
 * 
 * @param {Object} el - DOM node
 * @param {String} themeName - element theme name
 * @param {Object} cfg - main configuration
 */
export const applyTheme = (el, themeName, cfg) => {
  const mainTheme = MAIN_THEME[themeName];
  const customTheme = (cfg.theme && cfg.theme[themeName]) || DEFAULT_THEME[themeName];
  const mergedTheme = {...mainTheme, ...customTheme};
  
  for (const key in mergedTheme) {
    el.style[key] = mergedTheme[key]
  }
}

