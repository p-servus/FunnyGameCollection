export default class FieldPosition {
	static xChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	static yChars = ['1', '2', '3', '4', '5', '6', '7', '8']

	columnIndex = null
	rowIndex = null

	get xChar() {
		return FieldPosition.xChars[this.columnIndex]
	}
	set xChar(value) {
		this.columnIndex = value !== null
			? FieldPosition.xChars.indexOf(value)
			: null
	}

	get yChar() {
		return FieldPosition.yChars[this.rowIndex]
	}
	set yChar(value) {
		this.rowIndex = value !== null
			? FieldPosition.yChars.indexOf(value)
			: null
	}

	constructor(xChar = null, yChar = null) {
		this.xChar = xChar
		this.yChar = yChar
	}

	static FromIndexes(columnIndex, rowIndex) {
		const figurePosition = new FieldPosition()
		figurePosition.columnIndex = columnIndex
		figurePosition.rowIndex = rowIndex
		return figurePosition
	}
}