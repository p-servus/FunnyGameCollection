import FigureColor from '../Model/FigureColor.js'
import FigureType from '../Model/FigureType.js'

/**
 * Provides the images (as ascii-characters) of the chess figures.
 */
export default class FigureImages {
    static images = []

    /**
     * Provides an image (as ascii-characters) of a chess figure.
     * @param {FigureColor} color - The color of the chess figure.
     * @param {FigureType} type - The type of the chess figure.
     * @returns {string} An image (as ascii-characters) of a chess figure.
     */
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
