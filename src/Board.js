const Square = require('./Square');
const { BOARD, SQUARE_COLOR } = require('./constants');

class Board { 
  constructor(container) {
    this.container = container;
    this.size = BOARD.SIZE;
    this.coordonates = BOARD.COORDINATES;
    this.squares = [];
    this.__createSquares();
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

    // return this.getColorByPosition(row, col);
  }

  __createSquares() {
    for(let row = 0; row < this.size; ++row) {
      this.squares[row] = [];
      for(let column = 0; column < this.size; ++column) {
        this.squares[row][column] = new Square(row, column);
      }
    }
  }

  __getColumnByCoordinate(coord) {
    const col = this.coordonates.findIndex(c => c === coord);
    if(col > -1) {
      return col;
    } 

    throw 'The provided letter is not a chess coordinate. Please use letters between a and h';
  }

  print() {
    let bordString = '';
    for(let row = 0; row < this.size; ++row) {
      for(let column = 0; column < this.size; ++column) {
        bordString += this.getColorByPosition(row, column) === SQUARE_COLOR.LIGHT ? '\u2592': '\u2591';
      }
      bordString += '\n';
    }

    console.log(bordString);
  }
}

module.exports = Board;
