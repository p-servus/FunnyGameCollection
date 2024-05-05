import FigureImages from "../../Model/FigureImages.js"
import View from "../View.js"

export default class FigureView extends View {
	cssClass = null
	figure = null
	_boardView = null

	constructor(figure, boardView) {
		super()

		this.figure = figure
		this._boardView = boardView
	}
	
	Render() {
		if(this.figure.position === null) {
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

		textDom.textContent = FigureImages.get(
			this.figure.color,
			this.figure.type,
		)
		mainSvgDom.appendChild(textDom)

		this.dom = textDom
		this.setPosition()
	}

	setPosition(optionalNewPosition = null) {
		if(optionalNewPosition !== null) {
			this.figure.position = optionalNewPosition
		}

		const field = this._boardView.fields[this.figure.position.x][this.figure.position.y]

		field.addFigure(this)
	}
}
