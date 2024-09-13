/**
 * Described a position on a chess-board
 */
export default class FieldPosition {
	static xChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	static yChars = ['1', '2', '3', '4', '5', '6', '7', '8']

	columnIndex = null
	rowIndex = null

	/**
	 * Returns the label-letter representing the x-coordinate of the position
	 * @returns {string} The löabel-letter representing the x-coordinate of this position
	 */
	get xChar() {
		return FieldPosition.xChars[this.columnIndex]
	}
	/**
	 * Sets the x-coordinate of the position by the representing label-letter
	 * @param {string} value - the representing label-letter for the x-coordinate
	 */
	set xChar(value) {
		this.columnIndex = value !== null
			? FieldPosition.xChars.indexOf(value)
			: null
	}

	/**
	 * Returns the label-number representing the y-coordinate of the position
	 * @returns {string} The label-number representing the y-coordinate of this position
	 */
	get yChar() {
		return FieldPosition.yChars[this.rowIndex]
	}
	/**
	 * Sets the y-coordinate of the position by the representing label-number
	 * @param {string} value - the representing label-number for the y-coordinate
	 */
	set yChar(value) {
		this.rowIndex = value !== null
			? FieldPosition.yChars.indexOf(value)
			: null
	}

	/**
	 * Constructor of the class FieldPosition
	 * @param {string} xChar - The label-letter representing the x-coordinate of the position
	 * @param {string} yChar - The label-number representing the y-coordinate of the position
	 */
	constructor(xChar = null, yChar = null) {
		//TODO: Could xChar and yChar be null?
		this.xChar = xChar
		this.yChar = yChar
	}

	/**
	 * Returns an instance of a FieldPosition by zero-based indexes of the coordinates
	 * @param {number} columnIndex - Zero-based index of the x-coordinate
	 * @param {number} rowIndex - Zero-based index of the y-coordinate
	 * @returns {FieldPosition} the resulting FieldPosition
	 */
	static FromIndexes(columnIndex, rowIndex) {
		const figurePosition = new FieldPosition()
		figurePosition.columnIndex = columnIndex
		figurePosition.rowIndex = rowIndex
		return figurePosition
	}
}