import Square from './Square.js';
import { BOARD, SQUARE_COLOR } from './constants.js';

export default class Board { 
  constructor(container) {
    this.container = document.getElementById(container);
    this.pxSize = this.container.offsetWidth;
    this.size = BOARD.SIZE;
    this.coordonates = BOARD.COORDINATES;
    this.squares = this.__createSquares();
    this.$el = this.__createElement();
  }

  /**
   * Returns the square color by coordinate like 'a3', 'h7' etc.
   * 
   * @param {String} coordinate - any board coordonate a-h followed by row number from 0-7
   */
  getColorByCoordinate(coordinate) {
    let [letter, row] = coordinate.split('');
    const row = (this.size - 1) - Number(row)
    const col = this.__getColumnByCoordinate(letter);

    if (row >= this.size) {
      throw 'The row should be in interval 0-7';
    }

    // return this.getColorByPosition(row, col);
  }

  /**
   * Calculates the square color for specific x, y position.
   * 
   * @param {Number} row - the row position (starting from 0).
   * @param {Number} column - the column position (starting from 0).
   * 
   * @returns {String} - SQUARE_COLOR
   */
  getColor(row, column) {
    return (row + column) % 2 === 0 ? SQUARE_COLOR.LIGHT : SQUARE_COLOR.DARK;
  }

  __createSquares() {
    const squares = [];
    for(let row = 0; row < this.size; ++row) {
      squares[row] = [];
      for(let column = 0; column < this.size; ++column) {
        squares[row][column] = new Square({
          row: row,
          column: column,
          color: this.getColor(row, column),
          size: this.pxSize / this.size
        });
      }
    }
    return squares;
  }

  __createElement() {
    const el = document.createElement('div');
    el.className = 'board';
    el.style.width = `${this.pxSize}px`;
    el.style.height = `${this.pxSize}px`;
    el.style.display = 'grid';
    el.style.margin = '0 auto';
    el.style.border = 'solid 1px';
    el.style.gridTemplateColumns = 'repeat(8, 1fr)';

    return el;
  }

  __getColumnByCoordinate(coord) {
    const col = this.coordonates.findIndex(c => c === coord);
    if(col > -1) {
      return col;
    } 

    throw 'The provided letter is not a chess coordinate. Please use letters between a and h';
  }

  draw() {
    for(let row = 0; row < this.size; ++row) {
      for(let column = 0; column < this.size; ++column) {
        this.$el.appendChild(this.squares[row][column].$el);
      }
    }
    this.container.appendChild(this.$el);
  }

  print() {
    let bordString = '';
    for(let row = 0; row < this.size; ++row) {
      for(let column = 0; column < this.size; ++column) {
        bordString += this.squares[row][column].color === SQUARE_COLOR.LIGHT ? '\u2592 ': '\u2591 ';
      }
      bordString += '\n';
    }

    console.log(bordString);
  }
}
