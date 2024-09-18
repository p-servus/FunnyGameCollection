import FigureColor from './FigureColor.js'
import FigureType from './FigureType.js'

/**
 * Model of a chess figure.
 */
export default class Figure {
	color = FigureColor.Unknown
	type = FigureType.Unknown

	/**
	 * Creates an instance of a chess figure.
	 * @param {FigureColor} color The color of the chess figure (Black or White).
	 * @param {FigureType} type The Type of the figure (such as Queen, King, ...).
	 */
	constructor(color, type) {
		this.color = color
		this.type = type
	}
}
