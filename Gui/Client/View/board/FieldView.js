import Board from "../../Model/Board.js"
import FieldPosition from "../../Model/FieldPosition.js"
import View from "../View.js"
import FigureView from "../figures/FigureView.js"

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

	constructor(position, boardView, boardModel) {
		super()

		this.position = position
		this._boardView = boardView

		this._boardModel = boardModel
	}
	
	Render() {
		const fieldLength = this._boardView.fieldLength;
		const labelLength = this._boardView.labelLength;

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

	select() {
		this._dom.classList.add('selected')

		// The field-DOM has to be appended, to move the Field-DOM-Element to the foreground.
		this._boardView.mainSvgDom.appendChild(this._dom)
	}

	unselect() {
		this._dom.classList.remove('selected')

		// The field-DOM has to be prepended, to move the Field-DOM-Element to the background.
		this._boardView.mainSvgDom.prepend(this._dom)
	}

	addFigureView(figureView) {
		if(this.figureView !== null) {
			throw 'Failed to add FigureView: There is already an other FigureView on this FieldView!'
		}

		this.figureView = figureView
		
		this._dom.appendChild(this.figureView.dom)
	}

	removeFigureView() {
		this._dom.removeChild(this.figureView.dom)

		this.figureView = null
	}
}
