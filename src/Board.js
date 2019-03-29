import Square from './Square.js';
import Position from './Position.js';
import {BOARD, SQUARE_COLOR, DEFAULT_CFG} from './constants.js';
import {applyTheme} from './style/theme/main.js';
import PieceFactory from './PieceFactory.js';

export default class Board {
  constructor(config = DEFAULT_CFG) {
    this.config = this.__cleanConfig(config);
    this.container = document.querySelector(config.container);

    this.pxSize = this.container.offsetWidth;
    this.size = BOARD.SIZE;
    this.coordinates = BOARD.COORDINATES;
    this.squares = this.__createSquares();
    this.$el = this.__createElement();
    this.applyPosition(config.position);
  }

  __cleanConfig(config) {
    for (const key in DEFAULT_CFG) {
      if (!config[key]) {
        config[key] = DEFAULT_CFG[key];
      }
    }

    return config;
  }

  draw() {
    for (let row = 0; row < this.size; ++row) {
      for (let column = 0; column < this.size; ++column) {
        const square = this.squares[row][column];

        if (this.config.showNotation) {
          if (row === 7) {
            square.showColumnNotation();
          }
          if (column === 0) {
            square.showRowNotation();
          }
        }
        this.$el.appendChild(square.$el);
      }
    }

    this.container.appendChild(this.$el);
  }

  clear() {
    for (let row = 0; row < this.size; ++row) {
      for (let column = 0; column < this.size; ++column) {
        this.squares[row][column].clear();
      }
    }
    Square.clearActive();
  }

  applyPosition(position) {
    this.position = new Position(position).position;
    this.clear();

    for (const pieceName in this.position) {
      this.position[pieceName].forEach(coord => {
        let [col, row] = coord.split('')
        row = (this.size - 1) - Number(row)
        col = this.__getColumnByCoordinate(col);
        this.squares[row][col].setPiece(new PieceFactory().createPiece(pieceName));
      })
    }
  }

  // Flips the board with all pieces on it...
  flip() {
    this.$el.style.transform = 'rotate(-180deg)';
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
    for (let row = 0; row < this.size; ++row) {
      squares[row] = [];
      for (let column = 0; column < this.size; ++column) {
        squares[row][column] = new Square({
          config: this.config,
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

    // Applies main + custom|default theme.
    applyTheme(el, 'BOARD', this.config);

    // Applies dynamic theme.
    el.style.width = `${this.pxSize}px`;
    el.style.height = `${this.pxSize}px`;

    return el;
  }

  __getColumnByCoordinate(coord) {
    if (!this.coordinates.hasOwnProperty(coord)) {
      throw 'The provided letter is not a chess coordinate. Please use letters between a and h';
    }
    return this.coordinates[coord];
  }
}
