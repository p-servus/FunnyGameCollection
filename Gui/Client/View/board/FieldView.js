import FigurePosition from "../../Model/FigurePosition.js"
import View from "../View.js"

export default class FieldView extends View {
	asciiCharacter = '?'
	/**
	 * @type {FigurePosition}
	 */
	position = null
    _boardView = null

	constructor(position, boardView) {
		super()

		this.position = position
		this._boardView = boardView
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
			console.log('Bla = D', columnIndex, rowIndex)
			field.classList.toggle('selected')
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
