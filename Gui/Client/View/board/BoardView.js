import View from "../View.js"
import FieldView from "./FieldView.js"
import FigureView from "../figures/FigureView.js"
import FigurePosition from "../../Model/FigurePosition.js"

export default class BoardView extends View {
    static labelsByDimension = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        ['1', '2', '3', '4', '5', '6', '7', '8'],
    ]
    containerDom = null
    mainSvgDom = null
    fieldLength = 100
    labelLength = 50

    fieldViews = []
    
    constructor(containerDom, model) {
        super()
        this.containerDom = containerDom
        this.model = model

        this.mainSvgDom = document.createElementNS(View.SvgNameSpace, 'svg')
        this.mainSvgDom.setAttributeNS(null, 'width',  `${(8 * this.fieldLength) + (2 * this.labelLength)}px`)
        this.mainSvgDom.setAttributeNS(null, 'height', `${(8 * this.fieldLength) + (2 * this.labelLength)}px`)
        this.containerDom.appendChild(this.mainSvgDom)
    }

    Render() {
        this.RenderLabelsInX()
        this.RenderLabelsInY()
        this.RenderMainBoard()
    }

    RenderLabelsInX() {
        this.RenderLabelsInDimension(0)
    }

    RenderLabelsInY() {
        this.RenderLabelsInDimension(1)
    }

    RenderLabelsInDimension(dimension) {
        for(let index = 0; index < 8; index++) {
            const textDom = document.createElementNS(View.SvgNameSpace, 'text')
            textDom.setAttributeNS(null, 'text-anchor', 'middle')
            textDom.setAttributeNS(null, 'alignment-baseline', 'central')

            if(dimension == 0) {
                textDom.setAttributeNS(null, 'x', `${index * this.fieldLength + this.labelLength + (0.5 * this.fieldLength)}px`)
                textDom.setAttributeNS(null, 'y', `${(8) * this.fieldLength + (1.5 * this.labelLength)}px`)
            }

            if(dimension == 1) {
                textDom.setAttributeNS(null, 'x', `${0.5 * this.labelLength}px`)
                textDom.setAttributeNS(null, 'y', `${(7 - index) * this.fieldLength + this.labelLength + (0.5 * this.fieldLength)}px`)
            }

            textDom.textContent = BoardView.labelsByDimension[dimension][index]
            this.mainSvgDom.appendChild(textDom)
        }
    }

    RenderMainBoard() {
        this.model.fields.forEach((column, columnIndex) => {
            this.fieldViews[columnIndex] = []

            column.forEach((field, rowIndex) => {
                const position = FigurePosition.FromIndexes(columnIndex, rowIndex)
                const fieldView = new FieldView(position, this)
                this.fieldViews[columnIndex][rowIndex] = fieldView
                fieldView.Render()

                if (field.figure) {
                    const figureView = new FigureView(field.figure, this)
                    figureView.Render(position)
                }
            });
        })
    }
}