const Piece = require('../Piece');

class Pawn extends Piece {
  constructor() {
    super();
    console.log('Pawn creation');
  }
}

module.exports = Pawn;