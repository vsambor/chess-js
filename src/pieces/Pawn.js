const Piece = require('../Piece');
const { PIECE_TYPE } = require('../constants');

class Pawn extends Piece {
  constructor(color) {
    super(color, PIECE_TYPE.PAWN);
    console.log('Pawn creation');
  }
}

module.exports = Pawn;