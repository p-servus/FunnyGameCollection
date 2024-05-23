import Board from "../../Model/Board.js"
import FieldPosition from "../../Model/FieldPosition.js"
import View from "../View.js"

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

		// The field-DOM has to be appended / prepended, to handle the order of the DOM-Elements. 
		if (this._dom.classList.contains('selected')) {
			this._boardView.mainSvgDom.appendChild(this._dom)
		}
		else {
			this._boardView.mainSvgDom.prepend(this._dom)
		}
	}

	addFigure(figure) {
		this._dom.appendChild(figure.dom)
	}
}
