import View from "../View.js"

export default class FigureView extends View {
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
		if(this.position === null) {
			throw new Error('No Position Is Set!')
		}

		const mainSvgDom = this._boardView.mainSvgDom;
		const fieldLength = this._boardView.fieldLength;
		const labelLength = this._boardView.labelLength;

		const textDom = document.createElementNS(View.SvgNameSpace, 'text')

		if(this.cssClass) {
			textDom.classList.add(this.cssClass)
		}

		textDom.setAttributeNS(null, 'text-anchor', 'middle')
		textDom.setAttributeNS(null, 'alignment-baseline', 'central')

		textDom.setAttributeNS(null, 'x', `${0.5 * fieldLength}px`)
		textDom.setAttributeNS(null, 'y', `${0.5 * fieldLength}px`)

		textDom.textContent = this.asciiCharacter
		mainSvgDom.appendChild(textDom)

		this.dom = textDom
		this.setPosition()
	}

	setPosition(optionalNewPosition = null) {
		if(optionalNewPosition !== null) {
			this.position = optionalNewPosition
		}

		const field = this._boardView.fields[this.position[0]][this.position[1]]

		field.addFigure(this)
	}
}
