import Figure from "./Figure.js"
import FigureColor from "./FigureColor.js"
import FieldPosition from "./FieldPosition.js"
import FigureType from "./FigureType.js"
import Field from "./Field.js"

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

        this.setFigure(new Figure(FigureColor.White, FigureType.Rook)  , new FieldPosition('A', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Knight), new FieldPosition('B', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Bishop), new FieldPosition('C', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Queen) , new FieldPosition('D', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.King)  , new FieldPosition('E', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Bishop), new FieldPosition('F', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Knight), new FieldPosition('G', '1'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Rook)  , new FieldPosition('H', '1'))

        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('A', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('B', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('C', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('D', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('E', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('F', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('G', '2'))
        this.setFigure(new Figure(FigureColor.White, FigureType.Pawn)  , new FieldPosition('H', '2'))



        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('A', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('B', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('C', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('D', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('E', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('F', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('G', '7'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Pawn)  , new FieldPosition('H', '7'))

        this.setFigure(new Figure(FigureColor.Black, FigureType.Rook)  , new FieldPosition('A', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Knight), new FieldPosition('B', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Bishop), new FieldPosition('C', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Queen) , new FieldPosition('D', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.King)  , new FieldPosition('E', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Bishop), new FieldPosition('F', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Knight), new FieldPosition('G', '8'))
        this.setFigure(new Figure(FigureColor.Black, FigureType.Rook)  , new FieldPosition('H', '8'))
    }

    /**
     * @param {FieldPosition} startPosition 
     * @param {FieldPosition} targetPosition 
     */
    move(startPosition, targetPosition) {
        //TODO: startPosition is unused!?
        return {
            success: true,
            throw: this.fields[targetPosition.columnIndex][targetPosition.rowIndex].figure !== null,
        }
    }

	/**
	 *
     * @param {Figure} figure 
	 * @param {FieldPosition} position 
	 */
    setFigure(figure, position) {
        this.fields[position.columnIndex][position.rowIndex] = new Field(figure)
    }
}
