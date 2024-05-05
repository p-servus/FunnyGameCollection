export default class FigurePosition {
	static xChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	static yChars = ['1', '2', '3', '4', '5', '6', '7', '8']

	x = null
	y = null

	get xChar() {
		return FigurePosition.xChars[this.x]
	}
	set xChar(value) {
		this.x = FigurePosition.xChars.indexOf(value)
	}

	get yChar() {
		return FigurePosition.yChars[this.y]
	}
	set yChar(value) {
		this.y = FigurePosition.yChars.indexOf(value)
	}

	constructor(xChar, yChar) {
		this.xChar = xChar
		this.yChar = yChar
	}
}