import Piece from '../Piece.js';
import { PIECE_TYPE, PIECE_COLOR } from '../constants.js';

export default class Pawn extends Piece {
  constructor(color) {
    console.log('Pawn creation');
    super(color, PIECE_TYPE.PAWN);
    this.$el = this.__createElement();
  }

  __createElement() {
    const el = document.createElement('img');
    const pieceName = this.color === PIECE_COLOR.WHITE ? 'wP' : 'bP';
    el.src = `./src/img/${pieceName}.png`;
    el.style.width = '40px';
    el.style.height = '40px';
    return el;
  }
}
