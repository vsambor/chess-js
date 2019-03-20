const { SQUARE_COLOR } = require('./constants');

class Square {
  constructor(row, column) {
    this.color = this.getColorByPosition(row, column);
    this.row = row;
    this.column = column;
    this.piece = null;
  }

  setPiece(piece) {
    this.piece = piece;
  }

  /**
   * Gets the square color from specific row and column position.
   * 
   * @param {Number} row - the row position (starting from 0).
   * @param {Number} column - the column position (starting from 0).
   * 
   * @returns {String} - SQUARE_COLOR
   */
  getColorByPosition(row, column) {
    return (row + column) % 2 === 0 ? SQUARE_COLOR.LIGHT : SQUARE_COLOR.DARK;
  }
}

module.exports = Square;
