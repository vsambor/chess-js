import Move from './Move.js';

// const DEFAULT_INFO = {
//   event: null,
//   site: null,
//   date: null,
//   round: null,
//   table: null,
//   result: null,
//   black: null,
//   eco: null,
//   whiteElo: null,
//   blackElo: null,
//   plyCount: null
// }

export default class Game {
  constructor(info, moves) {
    this.info = info || {}
    this.moves = moves || [];

    this.pgn = `[Event "Blitz World Championship 2012"]
    [Date "2012.07.10"]
    [Round "30.3"]
    [Board "3"]
    [White "Gelfand, Boris"]
    [Black "Carlsen, Magnus"]
    [Result "0-1"]
    [WhiteClock "00:00:05"]
    [BlackClock "00:00:28"]
    [WhiteElo "2738"]
    [BlackElo "2837"]
    [PlyCount "80"]
    
    1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. e3 Bf5 6. Qb3 Ra7 
    7. Be2 h6 8. cxd5 cxd5 9. Ne5 e6 10. Bd2 Nbd7 11. Nxd7 Nxd7 12. O-O Bd6 
    13. a4 O-O 14. a5 Qh4 15. f4 Qe7 16. Na4 Raa8 17. Nb6 Nxb6 18. Qxb6 Rac8 
    19. Rac1 Be4 20. b4 g5 21. b5 axb5 22. Qxb5 gxf4 23. exf4 Qf6 24. Qb6 Rxc1 
    25. Bxc1 Qg7 26. Bf3 Be7 27. Be3 Bd3 28. Qxb7 Bxf1 29. Qxe7 Bd3 30. f5 exf5 
    31. Bxd5 Qg6 32. Qh4 Rb8 33. h3 Qd6 34. Ba2 Rb2 35. Bf4 Qg6 36. Bd5 Be4 
    37. Bxe4 fxe4 38. g3 e3 39. Qg4 Qxg4 40. hxg4 Rb1+ 0-1`;

    this.loadPgn(this.pgn);
  }

  load(moves) {
    this.moves = moves
  }

  loadPgn(pgn) {
    const [ rawHeaders, rawMoves ] = pgn.split(new RegExp('\n *?\n')).map(i => i.trim());
  
    this.parseHeaders(rawHeaders)
    this.parseMoves(rawMoves)
  }

  parseHeaders(rawHeaders) {
    const headersList = rawHeaders.split('\n')

    for (const header of headersList) {
      const parsedHeader = this.parseHeader(header)
      this.info[parsedHeader.key] = parsedHeader.value
    }
  }

  parseHeader(header) {
    const key = /(?:\[)(.*)(?:\s\")/g.exec(header)[1]
    const value = /(?:\")(.*)(?:\")/g.exec(header)[1]
    return {key, value}
  }

  parseMoves(rawMoves) {
    const moves = rawMoves.split(/\s*(\d+\.)\s*/)

    for (const move of moves) {
      if (move) {
        const [move1, move2] = move.split(' ')
        const isMove = move1 && move2
        
        if (isMove) {
          this.moves.push([move1, move2])
        }
      }
    }
  }
}
