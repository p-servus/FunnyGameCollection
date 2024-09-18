import FieldPosition from '../../Model/FieldPosition.js'
import Figure from '../../Model/Figure.js'
import FigureColor from '../../Model/FigureColor.js'
import BoardView from '../board/BoardView.js'
import FigureImages from '../FigureImages.js'
import View from '../View.js'

/**
 * The View for a chess figure.
 */
export default class FigureView extends View {
	figure = null
	_boardView = null

	/**
	 * Creates an instance of a FigureView.
	 * @param {Figure} figure - The model of the figure.
	 * @param {BoardView} boardView - The BoardView to place the figure on.
	 */
	constructor(figure, boardView) {
		super()

		this.figure = figure
		this._boardView = boardView
	}
	
	/**
	 * Renders the FigureView.
	 * @param {FieldPosition} figurePosition - The position where to  place/render the FirureView.
	 */
	Render(figurePosition) {
		const mainSvgDom = this._boardView.mainSvgDom
		const fieldLength = this._boardView.fieldLength

		const textDom = document.createElementNS(View.SvgNameSpace, 'text')

		if(this.figure.color === FigureColor.White) {
			textDom.classList.add('whiteFigure')
		}
		if(this.figure.color === FigureColor.Black) {
			textDom.classList.add('blackFigure')
		}

		textDom.setAttributeNS(null, 'text-anchor', 'middle')
		textDom.setAttributeNS(null, 'alignment-baseline', 'central')

		textDom.setAttributeNS(null, 'x', `${0.5 * fieldLength}px`)
		textDom.setAttributeNS(null, 'y', `${0.5 * fieldLength}px`)

		textDom.textContent = FigureImages.get(
			this.figure.color,
			this.figure.type,
		)
		mainSvgDom.appendChild(textDom)

		this.dom = textDom
		this.setTo(figurePosition)
	}

	/**
	 * Sets the FigureView to a position on the chess board.
	 * @param {FieldPosition} figurePosition - The Position where to move to.
	 */
	setTo(figurePosition) {
		const fieldView = this._boardView.fieldViews[figurePosition.columnIndex][figurePosition.rowIndex]

		fieldView.addFigureView(this)
	}

	/**
	 * Removes the FigureView from the chess board.
	 * @param {FieldPosition} figurePosition - The position, where to fild the figure to remove (because the figure itself does not know its own position).
	 */
	removeFrom(figurePosition) {
		const fieldView = this._boardView.fieldViews[figurePosition.columnIndex][figurePosition.rowIndex]

		fieldView.removeFigureView()
	}

	/**
	 * Moves the FigureView from its current position to an othe one.
	 * @param {FieldPosition} startPosition - The current position of the figure (because the firgure does not know its own position).
	 * @param {FieldPosition} targetPosition - The target position where to move the figure.
	 */
	moveFromTo(startPosition, targetPosition) {
		this.removeFrom(startPosition)
		this.setTo(targetPosition)
	}
}
