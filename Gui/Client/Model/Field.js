import Figure from './Figure.js'


/**
 * Model of a field on the chess-board
 */
export default class Field {
    figure


    /**
     * Creates a field on the chess-board
     * @param {Figure | null} figure - Optional figure that is placed on this field
     */
    constructor(figure = null) {
        this.figure = figure
    }
}