/**
 * @typedef {-1|0|1} FigureColor
 **/

/**
 * @enum {FigureColor} Represents different colors of chess figures.
 *
 * @property {-1} Unknown - If the color of a figure is not defined?
 * @property {0} White - The color for the white chess figures.
 * @property {1} Black - The color for the black chess figures.
 */
const FigureColor = {
    Unknown : -1,
    White : 0,
    Black : 1,
}
export default FigureColor