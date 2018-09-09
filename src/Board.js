const Square = require('./Square');
const consts = require('./constants');

class Board { 
  constructor(chessType='normal') {
    console.log('Board creation');

    this.__createSquares(chessType);
  }

  __createSquares(chessType) {
    const boardSize = this.__getBoardSize(chessType);

    this._squares = [];

    for(let row = 0; row < boardSize; ++row) {
      this._squares[row] = [];

      for(let column = 0; column < boardSize; ++column) {
        const color = this.__getColorByPosition(row, column);

        this._squares[row][column] = new Square(color);
      }
    }
  }

  __getColorByPosition(row, column) {
    return (row + column) % 2 == 0 ? consts.LIGHT : consts.DARK;
  }

  __getBoardSize(chessType) {
    switch(chessType) {
      case 'normal':
        return 8;
    }
  }

  print() {
    const boardSize = 8;
    let bordString = '';
    for(let row = 0; row < boardSize; ++row) {
      this._squares[row] = [];

      for(let column = 0; column < boardSize; ++column) {
        const color = this.__getColorByPosition(row, column);

        bordString += color === consts.LIGHT ? '\u2592': '\u2591';
      }
      bordString += '\n';
    }

    console.log(bordString);
  }
}

module.exports = Board;
