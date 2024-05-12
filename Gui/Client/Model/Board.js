import Figure from "./Figure.js";
import FigureColor from "./FigureColor.js";
import FigurePosition from "./FigurePosition.js";
import FigureType from "./FigureType.js";

export default class Board {
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
    ]
}