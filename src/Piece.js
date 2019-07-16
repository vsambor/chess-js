import { PIECE_TYPE } from "./constants.js";

export default class Piece {
  constructor(color, type, location) {
    this.color = color;
    this.type = type;
    this.location = location;
    this.name = this.__getName();
    this.$el = this.__createElement();
  }

  move() {
    console.log('Piece moved');
  }

  __getName() {
    let symbol = this.type[0].toUpperCase();
    if(this.type === PIECE_TYPE.KNIGHT) {
      symbol = 'N';
    }

    return this.color[0] + symbol;
  }

  __createElement() {
    const el = document.createElement('img');
    el.src = `./src/img/${this.name}.png`;
    el.style.objectFit = 'cover';
    el.style.width = '100%';
    el.style.maxHeight = '100%';

    return el;
  }
}
