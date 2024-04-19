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

		const rect = document.createElementNS(View.SvgNameSpace, 'rect')
		rect.setAttributeNS(null, 'width', `${fieldLength}px`)
		rect.setAttributeNS(null, 'height', `${fieldLength}px`)
		rect.setAttributeNS(null, 'x', `${x * fieldLength + labelLength}px`)
		rect.setAttributeNS(null, 'y', `${y * fieldLength + labelLength}px`)

		const cssFieldClass = (x + y) % 2 == 0
			? 'blackField'
			: 'whiteField'

		rect.classList.add(cssFieldClass)

		field.addEventListener('click', () => {
			console.log('Bla = D', x, y)
		})

		field.appendChild(rect)
		mainSvgDom.appendChild(field)

		this.dom = field
	}

	addFigure(figure) {
		this.dom.appendChild(figure.dom)
	}
}
