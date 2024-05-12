import Figure from "./Figure.js";
import FigureColor from "./FigureColor.js";
import FigurePosition from "./FigurePosition.js";
import FigureType from "./FigureType.js";
import Field from "./Field.js";

export default class Board {
    fields

    constructor() {
        this.fields = []

        for (let column = 0; column < 8; column++) {
            this.fields[column] = []
            for (let row = 0; row < 8; row++) {
                this.fields[column][row] = new Field()
            }
        }

        this.setFigure(new Figure(FigureColor.White, FigureType.Rook)  , new FigurePosition('A', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Knight), new FigurePosition('B', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Bishop), new FigurePosition('C', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Queen) , new FigurePosition('D', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.King)  , new FigurePosition('E', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Bishop), new FigurePosition('F', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Knight), new FigurePosition('G', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Rook)  , new FigurePosition('H', '1'))

        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('A', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('B', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('C', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('D', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('E', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('F', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('G', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FigurePosition('H', '2'))



        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('A', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('B', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('C', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('D', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('E', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('F', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('G', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FigurePosition('H', '7'))

        this.setFigure(new Figure(FigureColor.Black, FigureType.Rook)  , new FigurePosition('A', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Knight), new FigurePosition('B', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Bishop), new FigurePosition('C', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Queen) , new FigurePosition('D', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.King)  , new FigurePosition('E', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Bishop), new FigurePosition('F', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Knight), new FigurePosition('G', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Rook)  , new FigurePosition('H', '8'))
    }

	/**
	 *
     * @param {Figure} figure 
	 * @param {FigurePosition} position 
	 */
    setFigure(figure, position) {
        this.fields[position.columnIndex][position.rowIndex] = new Field(figure)
    }
}
