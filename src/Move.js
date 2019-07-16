export default class Move {
  constructor(raw, piece, from, to) {
    console.log('Move creation');
    this.raw = raw;
    this.piece = piece;
    this.from = from;
    this.to = to;
    this.comments = null;
    this.timeSpent = null;
    this.number = null;
  }
}
