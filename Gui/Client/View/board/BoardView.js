// import QueenBlackView from "../figures/figures/QueenBlackView.js"
// import QueenWhiteView from "../figures/figures/QueenWhiteView.js"
// import KingBlackView from "../figures/figures/KingBlackView.js"
// import KingWhiteView from "../figures/figures/KingWhiteView.js"
// import BishopBlackView from "../figures/figures/BishopBlackView.js"
// import BishopWhiteView from "../figures/figures/BishopWhiteView.js"
// import RookBlackView from "../figures/figures/RookBlackView.js"
// import RookWhiteView from "../figures/figures/RookWhiteView.js"
// import KnightBlackView from "../figures/figures/KnightBlackView.js"
// import KnightWhiteView from "../figures/figures/KnightWhiteView.js"
// import PawnBlackView from "../figures/figures/PawnBlackView.js"
// import PawnWhiteView from "../figures/figures/PawnWhiteView.js"
import View from "../View.js"
import FieldView from "./FieldView.js"
import FigureView from "../figures/FigureView.js"

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

        this.RenderFigures()
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
        this.fieldViews = []

        for (let x = 0; x < 8; x++) {
            this.fieldViews[x] = []

            for (let y = 0; y < 8; y++) {
                const position = [x, y];
                const field = new FieldView(position, this)

                this.fieldViews[x][y] = field

                field.Render()
            }
        }
    }

    RenderFigures() {
        this.model.figures.forEach((figure, index) => {
            const figureView = new FigureView(figure, this)
            figureView.Render()
        });
    }
}