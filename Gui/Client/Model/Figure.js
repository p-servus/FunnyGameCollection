import FigureColor from "./FigureColor.js"
import FigureType from "./FigureType.js"

export default class Figure {
	color = FigureColor.Unknown
	type = FigureType.Unknown
	position = null

	constructor(color, type, position) {
		this.color = color
		this.type = type
		this.position = position
	}
}
