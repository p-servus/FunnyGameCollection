/**
 * @typedef {-1|0|1|2|3|4|5} FigureType
 **/

/**
 * @enum {FigureType} Represents different types of chess figures.
 *
 * @property {-1} Unknown - If the type of a figure is not defined?
 * @property {0} Queen - The type for the Queens.
 * @property {1} King - The type for the Kings.
 * @property {2} Rook - The type for the Rooks.
 * @property {3} Knight - The type for the Knights.
 * @property {4} Bishop - The type for the Bishops.
 * @property {5} Pawn - The type for the Pawns.
 */
const FigureType = {
    Unknown: -1,
    Queen: 0,
    King: 1,
    Rook: 2,
    Knight: 3,
    Bishop: 4,
    Pawn: 5,
}
export default FigureType