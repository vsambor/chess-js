const BOARD = {
  display: 'grid',
  margin: '0 auto',
  gridTemplateColumns: 'repeat(8, 1fr)'
};

const SQUARE = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  display: 'flex'
};

const SQUARE_ROW_NOTATION = {
  position: 'absolute'
};

const SQUARE_COL_NOTATION = {
  position: 'absolute'
};

const PIECE = {
  objectFit: 'cover',
  width: '100%',
  maxHeight: '100%'
}

const applyTheme = (el, theme) => {
  for(const key in theme) {
    el.style[key] = theme[key]
  }
}

export {
  BOARD,
  SQUARE,
  SQUARE_ROW_NOTATION,
  SQUARE_COL_NOTATION,
  PIECE,
  applyTheme
}
