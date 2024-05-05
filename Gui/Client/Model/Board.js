import Figure from "./Figure.js";
import FigureColor from "./FigureColor.js";
import FigurePosition from "./FigurePosition.js";
import FigureType from "./FigureType.js";

export default class Board {
    // currentMove = {
    //     figure: xy,
    //     start: xy,
    //     end: xy,
    // }

    figures = [
        new Figure(FigureColor.White, FigureType.Rook  , new FigurePosition('A', '1')),
        new Figure(FigureColor.White, FigureType.Knight, new FigurePosition('B', '1')),
        new Figure(FigureColor.White, FigureType.Bishop, new FigurePosition('C', '1')),
        new Figure(FigureColor.White, FigureType.Queen , new FigurePosition('D', '1')),
        new Figure(FigureColor.White, FigureType.King  , new FigurePosition('E', '1')),
        new Figure(FigureColor.White, FigureType.Bishop, new FigurePosition('F', '1')),
        new Figure(FigureColor.White, FigureType.Knight, new FigurePosition('G', '1')),
        new Figure(FigureColor.White, FigureType.Rook  , new FigurePosition('H', '1')),

        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('A', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('B', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('C', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('D', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('E', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('F', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('G', '2')),
        new Figure(FigureColor.White, FigureType.Pawn  , new FigurePosition('H', '2')),



        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('A', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('B', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('C', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('D', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('E', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('F', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('G', '7')),
        new Figure(FigureColor.Black, FigureType.Pawn  , new FigurePosition('H', '7')),

        new Figure(FigureColor.Black, FigureType.Rook  , new FigurePosition('A', '8')),
        new Figure(FigureColor.Black, FigureType.Knight, new FigurePosition('B', '8')),
        new Figure(FigureColor.Black, FigureType.Bishop, new FigurePosition('C', '8')),
        new Figure(FigureColor.Black, FigureType.Queen , new FigurePosition('D', '8')),
        new Figure(FigureColor.Black, FigureType.King  , new FigurePosition('E', '8')),
        new Figure(FigureColor.Black, FigureType.Bishop, new FigurePosition('F', '8')),
        new Figure(FigureColor.Black, FigureType.Knight, new FigurePosition('G', '8')),
        new Figure(FigureColor.Black, FigureType.Rook  , new FigurePosition('H', '8')),




        // new RookBlackView  ([0, 7], this),
        // new KnightBlackView([1, 7], this),
        // new BishopBlackView([2, 7], this),
        // new QueenBlackView ([3, 7], this),
        // new KingBlackView  ([4, 7], this),
        // new BishopBlackView([5, 7], this),
        // new KnightBlackView([6, 7], this),
        // new RookBlackView  ([7, 7], this),

        // new PawnBlackView  ([0, 6], this),
        // new PawnBlackView  ([1, 6], this),
        // new PawnBlackView  ([2, 6], this),
        // new PawnBlackView  ([3, 6], this),
        // new PawnBlackView  ([4, 6], this),
        // new PawnBlackView  ([5, 6], this),
        // new PawnBlackView  ([6, 6], this),
        // new PawnBlackView  ([7, 6], this),

        // new RookWhiteView  ([0, 0], this),
        // new KnightWhiteView([1, 0], this),
        // new BishopWhiteView([2, 0], this),
        // new QueenWhiteView ([3, 0], this),
        // new KingWhiteView  ([4, 0], this),
        // new BishopWhiteView([5, 0], this),
        // new KnightWhiteView([6, 0], this),
        // new RookWhiteView  ([7, 0], this),
        
        // new PawnWhiteView  ([0, 1], this),
        // new PawnWhiteView  ([1, 1], this),
        // new PawnWhiteView  ([2, 1], this),
        // new PawnWhiteView  ([3, 1], this),
        // new PawnWhiteView  ([4, 1], this),
        // new PawnWhiteView  ([5, 1], this),
        // new PawnWhiteView  ([6, 1], this),
        // new PawnWhiteView  ([7, 1], this),
    ]
}