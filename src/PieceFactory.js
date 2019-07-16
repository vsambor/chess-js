import { PIECE_COLOR } from './constants.js';
import Pawn from './pieces/Pawn.js';
import Knight from './pieces/Knight.js';
import Bishop from './pieces/Bishop.js';
import Rook from './pieces/Rook.js';
import Queen from './pieces/Queen.js';
import King from './pieces/King.js';

export default class PieceFactory {
  createPiece(name, location) {
    switch(name) {
      case 'wP': return new Pawn(PIECE_COLOR.WHITE, location);
      case 'wN': return new Knight(PIECE_COLOR.WHITE, location);
      case 'wB': return new Bishop(PIECE_COLOR.WHITE, location);
      case 'wR': return new Rook(PIECE_COLOR.WHITE, location);
      case 'wQ': return new Queen(PIECE_COLOR.WHITE, location);
      case 'wK': return new King(PIECE_COLOR.WHITE, location);
      case 'bP': return new Pawn(PIECE_COLOR.BLACK, location);
      case 'bN': return new Knight(PIECE_COLOR.BLACK, location);
      case 'bB': return new Bishop(PIECE_COLOR.BLACK, location);
      case 'bR': return new Rook(PIECE_COLOR.BLACK, location);
      case 'bQ': return new Queen(PIECE_COLOR.BLACK, location);
      case 'bK': return new King(PIECE_COLOR.BLACK, location);
    }
  }
}
