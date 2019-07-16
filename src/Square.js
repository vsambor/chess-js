import { SQUARE_COLOR, BOARD } from './constants.js';
import {applyTheme} from './style/theme/main.js';

let activeSquare = null;
let clickedPiece = null;

export default class Square {
  constructor({config, row, column, color, size }) {
    this.config = config
    this.color = color;
    this.row = row;
    this.column = column;
    this.size = size;
    this.piece = null;
    this.$el = this.__createElement();
    this.$el.onclick = this.handleClick.bind(this);
  }

  setPiece(piece) {
    this.piece = piece;
    this.$el.appendChild(piece.$el);
  }

  handleClick() {
    Square.clearActive();

    if (clickedPiece) {
      clickedPiece.move([this.row, this.column]);
    }

    if (this.piece) {
      this.$el.classList = "square active";
      activeSquare = this.$el;
      clickedPiece = this.piece;
    } else {
      clickedPiece = null;
    }
  }

  static clearActive() {
    if(activeSquare) {
      activeSquare.classList = "square";
      activeSquare = null;
    }
  }

  clear() {
    if(this.piece) {
      this.$el.removeChild(this.piece.$el);
      this.piece = null;
    }
  }

  showColumnNotation() {
    const colNotation = document.createElement('div');
    applyTheme(colNotation, 'SQUARE_COL_NOTATION', this.config);
    colNotation.innerHTML = `${BOARD.COORDINATES[this.column]}`;
    
    this.$el.appendChild(colNotation);
  }

  showRowNotation() {
    const rowNotation = document.createElement('div');
    applyTheme(rowNotation, 'SQUARE_ROW_NOTATION', this.config);
    rowNotation.innerHTML = `${this.row + 1}`;

    this.$el.appendChild(rowNotation);
  }
  __createElement() {
    const el = document.createElement('div');
    el.className = 'square';
    applyTheme(el, 'SQUARE', this.config);
    el.style.backgroundColor = this.color === SQUARE_COLOR.LIGHT ? 'white' : 'grey';

    return el;
  }
}
