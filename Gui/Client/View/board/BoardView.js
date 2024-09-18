import View from '../View.js'
import FieldView from './FieldView.js'
import FigureView from '../figures/FigureView.js'
import FieldPosition from '../../Model/FieldPosition.js'
import Board from '../../Model/Board.js'

/**
 * The View of an chess board.
 */
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

    _boardModel = null

    /**
     * @type {FieldPosition | null}
     */
    _startSelection = null
    /**
     * @type {FieldPosition | null}
     */
    _targetSelection = null

    /**
     * If the user clicks/selects a fielf on the chess board.
     * @param {FieldPosition} position - The position of the selected field.
     */
    selectField(position) {
        if(this._startSelection === null) {
            const startFieldView = this.getFieldView(position)
            
            if(startFieldView.figureView === null) {
                return
            }

            this._startSelection = position

            startFieldView.select()
        }
        else if(this._targetSelection === null) {
            this._targetSelection = position

            const moveState = this._boardModel.move(
                this._startSelection,
                this._targetSelection,
            )
            
            if(moveState.success) {
                const startFieldView = this.getFieldView(this._startSelection)
                const targetFieldView = this.getFieldView(this._targetSelection)

                targetFieldView.select()

                if(moveState.throw) {
                    const targetFigureView = targetFieldView.figureView
                    targetFigureView.removeFrom(
                        this._targetSelection,
                    )
                }

                const startFigureView = startFieldView.figureView
                startFigureView.moveFromTo(
                    this._startSelection,
                    this._targetSelection,
                )

                this._startSelection = null
                this._targetSelection = null

                startFieldView.unselect()
                targetFieldView.unselect()
            }
        }
    }

    /**
     * Provides the FieldView of a given position.
     * @param {FieldPosition} position - The position from where to get the FieldView.
     * @returns {FieldView} The resulting FieldView.
     */
    getFieldView(position) {
        const fieldView = this.fieldViews[position.columnIndex][position.rowIndex]
        return fieldView
    }
    
    
    /**
     * Creates an instance of a BoardView.
     * @param {Element} containerDom - The DOM-Container for the chess board.
     * @param {Board} boardModel - The model of the chess board.
     */
    constructor(containerDom, boardModel) {
        super()
        this.containerDom = containerDom
        this._boardModel = boardModel

        this.mainSvgDom = document.createElementNS(View.SvgNameSpace, 'svg')
        this.mainSvgDom.setAttributeNS(null, 'width',  `${(8 * this.fieldLength) + (2 * this.labelLength)}px`)
        this.mainSvgDom.setAttributeNS(null, 'height', `${(8 * this.fieldLength) + (2 * this.labelLength)}px`)
        this.containerDom.appendChild(this.mainSvgDom)
    }

    /**
     * Renders the chess board.
     */
    Render() {
        this.RenderLabelsInX()
        this.RenderLabelsInY()
        this.RenderMainBoard()
    }

    /**
     * Renders the horizontal label-letters of the chess board.
     */
    RenderLabelsInX() {
        this.RenderLabelsInDimension(0)
    }

    /**
     * Renders the vertical label-numbers of the chess board.
     */
    RenderLabelsInY() {
        this.RenderLabelsInDimension(1)
    }

    /**
     * Renders the horizontal or vertical label-letters / label-numbers of the chess board.
     * @param {0|1} dimension - A number describing the dimesion for the labels-axis:
     *      - 0 for the vertical x-axis with the label-letters
     *      - 1 for the horizontal y-axis with the label-numbers
     */
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

    /**
     * Renders the main part of the chess boald with its fields.
     */
    RenderMainBoard() {
        this._boardModel.fields.forEach((column, columnIndex) => {
            this.fieldViews[columnIndex] = []

            column.forEach((field, rowIndex) => {
                const position = FieldPosition.FromIndexes(columnIndex, rowIndex)
                const fieldView = new FieldView(position, this, this._boardModel)
                this.fieldViews[columnIndex][rowIndex] = fieldView
                fieldView.Render()

                if (field.figure) {
                    const figureView = new FigureView(field.figure, this)
                    figureView.Render(position)
                }
            })
        })
    }
}