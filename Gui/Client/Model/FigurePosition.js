export default class FigurePosition {
	static xChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	static yChars = ['1', '2', '3', '4', '5', '6', '7', '8']

	columnIndex = null
	rowIndex = null

	get xChar() {
		return FigurePosition.xChars[this.columnIndex]
	}
	set xChar(value) {
		this.columnIndex = value !== null
			? FigurePosition.xChars.indexOf(value)
			: null
	}

	get yChar() {
		return FigurePosition.yChars[this.rowIndex]
	}
	set yChar(value) {
		this.rowIndex = value !== null
			? FigurePosition.yChars.indexOf(value)
			: null
	}

	constructor(xChar = null, yChar = null) {
		this.xChar = xChar
		this.yChar = yChar
	}

	static FromIndexes(columnIndex, rowIndex) {
		const figurePosition = new FigurePosition()
		figurePosition.columnIndex = columnIndex
		figurePosition.rowIndex = rowIndex
		return figurePosition
	}
}