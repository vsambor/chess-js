import { SQUARE_COLOR } from './constants.js';

export default class Square {
  constructor({ row, column, color, size }) {
    this.color = color;
    this.row = row;
    this.column = column;
    this.size = size;
    this.piece = null;
    this.$el = this.__createElement();
  }

  setPiece(piece) {
    this.piece = piece;
  }

  __createElement() {
    const el = document.createElement('div');
    el.className = 'square';
    el.style.justifyContent = 'center';
    el.style.alignItems = 'center';
    el.style.display = 'flex';
    el.style.fontSize = '5em';
    el.style.backgroundColor = this.color === SQUARE_COLOR.LIGHT ? 'white' : 'grey';

    return el;
  }
}
