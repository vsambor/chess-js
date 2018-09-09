const Board = require('./Board');

class Chess {
  constructor() {
    console.log('Chess game creation');
    const board = new Board();
    board.print();
  }
}

module.exports = Chess;
