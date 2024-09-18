import Board from '../../Model/Board.js'
import FieldPosition from '../../Model/FieldPosition.js'
import FigureView from '../figures/FigureView.js'
import View from '../View.js'
import BoardView from './BoardView.js'

/**
 * The View of a field on a chess board.
 */
export default class FieldView extends View {
	asciiCharacter = '?'
	/**
	 * @type {FieldPosition}
	 */
	position = null
	_boardView = null

	/**
	 * @type {Board}
	 */
	_boardModel

	/**
	 * @type {Element}
	 */
	_dom = null

	/**
	 * @type {FigureView}
	 */
	figureView = null

	/**
	 * Creates an instance of a FieldView
	 * @param {FieldPosition} position - The position of the FieldView on the chess board.
	 * @param {BoardView} boardView - The BoardView to place the field on.
	 * @param {Board} boardModel - The model of the chess board.
	 */
	constructor(position, boardView, boardModel) {
		super()

		this.position = position
		this._boardView = boardView

		this._boardModel = boardModel
	}
	
	/**
	 * Renders the FieldView.
	 */
	Render() {
		const fieldLength = this._boardView.fieldLength
		const labelLength = this._boardView.labelLength

		const columnIndex = this.position.columnIndex
		const rowIndex = this.position.rowIndex

		this._dom = document.createElementNS(View.SvgNameSpace, 'g')
		this._dom.classList.add('field')
		this._dom.setAttributeNS(null, 'transform', `translate(${columnIndex * fieldLength + labelLength} ${(7 - rowIndex) * fieldLength + labelLength})`)

		const rect = document.createElementNS(View.SvgNameSpace, 'rect')
		rect.setAttributeNS(null, 'width', `${fieldLength}px`)
		rect.setAttributeNS(null, 'height', `${fieldLength}px`)

		const cssFieldClass = (columnIndex + rowIndex) % 2 == 0
			? 'blackField'
			: 'whiteField'

		rect.classList.add(cssFieldClass)

		this._dom.addEventListener('click', () => {
			this._boardView.selectField(this.position)
		})

		this._dom.appendChild(rect)
		this._boardView.mainSvgDom.appendChild(this._dom)
	}

	/**
	 * If the user clicks this unselected FieldView, to select it.
	 */
	select() {
		this._dom.classList.add('selected')

		// The field-DOM has to be appended, to move the Field-DOM-Element to the foreground.
		this._boardView.mainSvgDom.appendChild(this._dom)
	}

	/**
	 * If the user clicks this already selected FieldView, to unselect it.
	 */
	unselect() {
		this._dom.classList.remove('selected')

		// The field-DOM has to be prepended, to move the Field-DOM-Element to the background.
		this._boardView.mainSvgDom.prepend(this._dom)
	}

	/**
	 * Adds a FigureView to this FieldView.
	 * @param {FigureView} figureView - The given FigureView.
	 */
	addFigureView(figureView) {
		if(this.figureView !== null) {
			throw 'Failed to add FigureView: There is already an other FigureView on this FieldView!'
		}

		this.figureView = figureView
		
		this._dom.appendChild(this.figureView.dom)
	}

	/**
	 * Removes a FigureView from this FieldView.
	 */
	removeFigureView() {
		this._dom.removeChild(this.figureView.dom)

		this.figureView = null
	}
}
