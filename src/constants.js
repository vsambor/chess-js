export const BOARD = {
  SIZE: 8,
  COORDINATES: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
};

export const SQUARE_COLOR = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const PIECE_COLOR = {
  WHITE: 'white',
  BLACK: 'black'
};

export const PIECE_TYPE = {
  KING: 'king',
  QUEEN: 'queen',
  ROOK: 'rook',
  BISHOP: 'bishop',
  KNIGHT: 'knight',
  PAWN: 'pawn'
};

export const POSITION = {
  START_FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  START: {
    wP: ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    wN: ['b1', 'g1'],
    wB: ['c1', 'f1'],
    wR: ['a1', 'h1'],
    wQ: ['d1'],
    wK: ['e1'],
    bP: ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    bN: ['b8', 'g8'],
    bB: ['c8', 'f8'],
    bR: ['a8', 'h8'],
    bQ: ['d8'],
    bK: ['e8']
  }
};
