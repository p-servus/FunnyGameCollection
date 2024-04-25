import { FigureColor } from "./FigureColor.js"
import FigureType from "./FigureType.js"

export default class FigureImages {
    images = []
    
    constructor() {
        this.images[FigureType.Queen][FigureColor.Black] = '♛'
    }
}

