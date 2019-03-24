import Square from './Square.js';
import Position from './Position.js';
import { BOARD, SQUARE_COLOR, PIECE_COLOR } from './constants.js';
import PieceFactory from './PieceFactory.js';

export default class Board { 
  constructor(container, config) {
    this.config = config;
    this.container = document.getElementById(container);
    this.pxSize = this.container.offsetWidth;
    this.size = BOARD.SIZE;
    this.coordinates = BOARD.COORDINATES;
    this.squares = this.__createSquares();
    this.$el = this.__createElement();
    this.applyPossition(config.position);
  }

  // Flips the board with all pieces on it...
  flip() {
    return true;
  }

  applyPossition(position) {
    this.position = new Position(position).position;

    for(const pieceName in this.position) {
      this.position[pieceName].forEach(coord => {
        let [col, row] = coord.split('')
        row = (this.size - 1) - Number(row)
        col = this.__getColumnByCoordinate(col);
        this.squares[row][col].setPiece(new PieceFactory().createPiece(pieceName));
      })
    }    
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

  __createLettersCoordinates() {
    const lettersEl = document.createElement('div');
    lettersEl.innerHTML = Object.keys(BOARD.COORDINATES).join('');
    lettersEl.style.letterSpacing = `${(this.pxSize / this.size)-7}px`;
    lettersEl.style.marginLeft = '3px';

    return lettersEl;
  }

  __createNumbersCoordinates() {
    const numbersEl = document.createElement('div');
    numbersEl.innerHTML = '12345678';
    numbersEl.style.letterSpacing = `${(this.pxSize / this.size)-7}px`;
    numbersEl.style.writingMode = 'tb';
    numbersEl.style.textOrientation = 'upright'

    return numbersEl;
  }

  __getColumnByCoordinate(coord) {
    if(!this.coordinates.hasOwnProperty(coord)) {
      throw 'The provided letter is not a chess coordinate. Please use letters between a and h';
    }
    return this.coordinates[coord];
  }

  draw() {
    // Appends squares to the board element.
    for(let row = 0; row < this.size; ++row) {
      for(let column = 0; column < this.size; ++column) {
        this.$el.appendChild(this.squares[row][column].$el);
      }
    }

    const wrapper = document.createElement('div');

    wrapper.appendChild(this.$el);

    // Appends coordinates if needed.
    // TODO
    if(this.config.showCoordinates) {
      //wrapper.appendChild(this.__createNumbersCoordinates());
      wrapper.appendChild(this.__createLettersCoordinates());
    }

    this.container.appendChild(wrapper);
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
