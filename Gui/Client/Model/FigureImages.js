import FigureColor from "./FigureColor.js"
import FigureType from "./FigureType.js"

export default class FigureImages {
    static images = []

    static get(color, type) {
        return FigureImages.images[color][type]
    }
}

FigureImages.images[FigureColor.White] = []
FigureImages.images[FigureColor.White][FigureType.Rook] = '♖'
FigureImages.images[FigureColor.White][FigureType.Knight] = '♘'
FigureImages.images[FigureColor.White][FigureType.Bishop] = '♗'
FigureImages.images[FigureColor.White][FigureType.Queen] = '♕'
FigureImages.images[FigureColor.White][FigureType.King] = '♔'
FigureImages.images[FigureColor.White][FigureType.Pawn] = '♙'

FigureImages.images[FigureColor.Black] = []
FigureImages.images[FigureColor.Black][FigureType.Rook] = '♜'
FigureImages.images[FigureColor.Black][FigureType.Knight] = '♞'
FigureImages.images[FigureColor.Black][FigureType.Bishop] = '♝'
FigureImages.images[FigureColor.Black][FigureType.Queen] = '♛'
FigureImages.images[FigureColor.Black][FigureType.King] = '♚'
FigureImages.images[FigureColor.Black][FigureType.Pawn] = '♟️'
