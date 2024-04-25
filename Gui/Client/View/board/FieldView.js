import View from "../View.js"

export default class FieldView extends View {
	asciiCharacter = '?'
	cssClass = null
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
		const x = this.position[0]
		const y = this.position[1]

		const field = document.createElementNS(View.SvgNameSpace, 'g')
		field.classList.add('field')
		field.setAttributeNS(null, 'transform', `translate(${x * fieldLength + labelLength} ${y * fieldLength + labelLength})`)

		const rect = document.createElementNS(View.SvgNameSpace, 'rect')
		rect.setAttributeNS(null, 'width', `${fieldLength}px`)
		rect.setAttributeNS(null, 'height', `${fieldLength}px`)

		const cssFieldClass = (x + y) % 2 == 0
			? 'blackField'
			: 'whiteField'

		rect.classList.add(cssFieldClass)

		field.addEventListener('click', () => {
			console.log('Bla = D', x, y)
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
