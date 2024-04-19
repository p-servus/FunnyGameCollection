import QueenBlackView from "./QueenBlackView.js"
import QueenWhiteView from "./QueenWhiteView.js"
import KingBlackView from "./KingBlackView.js"
import KingWhiteView from "./KingWhiteView.js"
import BishopBlackView from "./BishopBlackView.js"
import BishopWhiteView from "./BishopWhiteView.js"
import RookBlackView from "./RookBlackView.js"
import RookWhiteView from "./RookWhiteView.js"
import KnightBlackView from "./KnightBlackView.js"
import KnightWhiteView from "./KnightWhiteView.js"
import PawnBlackView from "./PawnBlackView.js"
import PawnWhiteView from "./PawnWhiteView.js"
import View from "./View.js"

export default class BoardView extends View {
    static labelsByDimension = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        ['1', '2', '3', '4', '5', '6', '7', '8'],
    ]
    containerDom = null
    mainSvgDom = null
    fieldLength = 100
    labelLength = 50

    _figures = [
        new RookBlackView  ([0, 7], this),
        new KnightBlackView([1, 7], this),
        new BishopBlackView([2, 7], this),
        new QueenBlackView ([3, 7], this),
        new KingBlackView  ([4, 7], this),
        new BishopBlackView([5, 7], this),
        new KnightBlackView([6, 7], this),
        new RookBlackView  ([7, 7], this),

        new PawnBlackView  ([0, 6], this),
        new PawnBlackView  ([1, 6], this),
        new PawnBlackView  ([2, 6], this),
        new PawnBlackView  ([3, 6], this),
        new PawnBlackView  ([4, 6], this),
        new PawnBlackView  ([5, 6], this),
        new PawnBlackView  ([6, 6], this),
        new PawnBlackView  ([7, 6], this),

        new RookWhiteView  ([0, 0], this),
        new KnightWhiteView([1, 0], this),
        new BishopWhiteView([2, 0], this),
        new QueenWhiteView ([3, 0], this),
        new KingWhiteView  ([4, 0], this),
        new BishopWhiteView([5, 0], this),
        new KnightWhiteView([6, 0], this),
        new RookWhiteView  ([7, 0], this),
        
        new PawnWhiteView  ([0, 1], this),
        new PawnWhiteView  ([1, 1], this),
        new PawnWhiteView  ([2, 1], this),
        new PawnWhiteView  ([3, 1], this),
        new PawnWhiteView  ([4, 1], this),
        new PawnWhiteView  ([5, 1], this),
        new PawnWhiteView  ([6, 1], this),
        new PawnWhiteView  ([7, 1], this),
    ]
    
    constructor(containerDom) {
        super()
        this.containerDom = containerDom

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
                textDom.setAttributeNS(null, 'y', `${0.5 * this.labelLength}px`)
            }

            if(dimension == 1) {
                textDom.setAttributeNS(null, 'x', `${0.5 * this.labelLength}px`)
                textDom.setAttributeNS(null, 'y', `${index * this.fieldLength + this.labelLength + (0.5 * this.fieldLength)}px`)
            }

            textDom.textContent = BoardView.labelsByDimension[dimension][index]
            this.mainSvgDom.appendChild(textDom)
        }
    }

    RenderMainBoard() {
        //TODO: please use me!
        const labels = {
            horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            vertical: ['1', '2', '3', '4', '5', '6', '7', '8'],
        }
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const field = document.createElementNS(View.SvgNameSpace, 'g')
                const rect = document.createElementNS(View.SvgNameSpace, 'rect')
                rect.setAttributeNS(null, 'width', `${this.fieldLength}px`)
                rect.setAttributeNS(null, 'height', `${this.fieldLength}px`)
                rect.setAttributeNS(null, 'x', `${x * this.fieldLength + this.labelLength}px`)
                rect.setAttributeNS(null, 'y', `${y * this.fieldLength + this.labelLength}px`)

                const cssFieldClass = (x + y) % 2 == 0
                    ? 'blackField'
                    : 'whiteField'

                rect.classList.add(cssFieldClass)

                field.appendChild(rect)
                this.mainSvgDom.appendChild(field)
            }
        }
    }

    RenderFigures() {
        this._figures.forEach((figureView, index) => {
            figureView.Render()
        });
    }
}