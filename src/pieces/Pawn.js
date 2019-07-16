import Piece from '../Piece.js';
import { PIECE_TYPE, PIECE_COLOR } from '../constants.js';

export default class Pawn extends Piece {
  constructor(color, location) {
    super(color, PIECE_TYPE.PAWN, location);
    this.isInitialPosition = true;
  }

  move(location) {
    // super.move();

    console.log(`Pawn moved from:  ${this.location} - ${location}`);
  }

  getAllMoves() {
 
  }


}
