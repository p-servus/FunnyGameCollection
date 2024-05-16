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

	constructor(position, boardView, boardModel) {
		super()

		this.position = position
		this._boardView = boardView

		this._boardModel = boardModel
	}
	
	Render() {
		const fieldLength = this._boardView.fieldLength;
		const labelLength = this._boardView.labelLength;
		const mainSvgDom = this._boardView.mainSvgDom;

		const columnIndex = this.position.columnIndex
		const rowIndex = this.position.rowIndex

		const field = document.createElementNS(View.SvgNameSpace, 'g')
		field.classList.add('field')
		field.setAttributeNS(null, 'transform', `translate(${columnIndex * fieldLength + labelLength} ${(7 - rowIndex) * fieldLength + labelLength})`)

		const rect = document.createElementNS(View.SvgNameSpace, 'rect')
		rect.setAttributeNS(null, 'width', `${fieldLength}px`)
		rect.setAttributeNS(null, 'height', `${fieldLength}px`)

		const cssFieldClass = (columnIndex + rowIndex) % 2 == 0
			? 'blackField'
			: 'whiteField'

		rect.classList.add(cssFieldClass)

		field.addEventListener('click', () => {
			const success = this._boardView.trySelectField(this.position)

			if(success) {
				field.classList.add('selected')


				if(isTargetSelected) {
					//TODO: move FigureView
				}
			}

			// The field-DOM has to be appended / prepended, to handle the order of the DOM-Elements. 
			if (field.classList.contains('selected')) {
				mainSvgDom.appendChild(field)
			}
			else {
				mainSvgDom.prepend(field)
			}
		})

		field.appendChild(rect)
		mainSvgDom.appendChild(field)

		this.dom = field
	}

	addFigure(figure) {
		this.dom.appendChild(figure.dom)
	}
}
