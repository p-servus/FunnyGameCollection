import FigureColor from "../../Model/FigureColor.js"
import FigureImages from "../FigureImages.js"
import View from "../View.js"
import FieldPosition from "../../Model/FieldPosition.js";

export default class FigureView extends View {
	figure = null
	_boardView = null

	constructor(figure, boardView) {
		super()

		this.figure = figure
		this._boardView = boardView
	}
	
	/**
	 * 
	 * @param {FieldPosition} figurePosition 
	 */
	Render(figurePosition) {
		const mainSvgDom = this._boardView.mainSvgDom;
		const fieldLength = this._boardView.fieldLength;
		const labelLength = this._boardView.labelLength;

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
		this.setPosition(figurePosition)
	}

	/**
	 * 
	 * @param {FieldPosition} figurePosition 
	 */
	setPosition(figurePosition) {
		const field = this._boardView.fieldViews[figurePosition.columnIndex][figurePosition.rowIndex]

		field.addFigure(this)
	}
}
