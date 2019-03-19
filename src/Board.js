const Square = require('./Square');
const consts = require('./constants');

class Board { 
  constructor() {
    this.size = 8;
    this.squares = [];
    this.coordonates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    this.__createSquares();
  }

  /**
   * Gets the square color from specific row and column position.
   * 
   * @param {Number} row - the row position (starting from 0).
   * @param {Number} column - the column position (starting from 0).
   */
  getColorByPosition(row, column) {
    return (row + column) % 2 === 0 ? consts.LIGHT : consts.DARK;
  }

  /**
   * Returns the square color by coordinate like 'a3', 'h7' etc.
   * 
   * @param {String} coordinate - any board coordonate a-h followed by row number from 0-7
   */
  getColorByCoordinate(coordinate) {
    const splittedCoords = coordinate.split('');
    const letter = splittedCoords[0];
    const row = (this.size - 1) - Number(splittedCoords[1])
    const col = this.__getColumnByCoordinate(letter);

    if (row >= this.size) {
      throw 'The row should be in interval 0-7';
    }

    return this.getColorByPosition(row, col);
  }

  __createSquares() {
    for(let row = 0; row < this.size; ++row) {
      this.squares[row] = [];
      for(let column = 0; column < this.size; ++column) {
        this.squares[row][column] = new Square(this.getColorByPosition(row, column));
      }
    }
  }

  __getColumnByCoordinate(coord) {
    const col = this.coordonates.findIndex(c => c === coord);
    if(col > -1) {
      return col;
    } 

    throw 'the provided letter is not a chess coordinate. Please use letters from a to h';
  }

  print() {
    let bordString = '';
    for(let row = 0; row < this.size; ++row) {
      for(let column = 0; column < this.size; ++column) {
        bordString += this.getColorByPosition(row, column) === consts.LIGHT ? '\u2592': '\u2591';
      }
      bordString += '\n';
    }

    console.log(bordString);
  }
}

module.exports = Board;
