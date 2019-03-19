const Board = require('./Board');

class Chess {
  constructor() {
    const board = new Board();
    board.print();
    console.log('color = ', board.getColorByCoordinate('a0')); // Dark
    console.log('color = ', board.getColorByCoordinate('d7')); // Dark
    console.log('color = ', board.getColorByCoordinate('d0')); // Light
  }
}

module.exports = Chess;
