import FigureColor from "./FigureColor.js"
import FigureType from "./FigureType.js"

export default class Figure {
	color = FigureColor.Unknown
	type = FigureType.Unknown

	constructor(color, type) {
		this.color = color
		this.type = type
	}
}
