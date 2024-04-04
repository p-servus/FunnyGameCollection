const SvgNameSpace = 'http://www.w3.org/2000/svg'

export default class BoardView {
    static labelsByDimension = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        ['1', '2', '3', '4', '5', '6', '7', '8'],
    ]
    
    constructor(containerDom) {
        this._containerDom = containerDom
        
        this.fieldLength = 100

        this._mainSvgDom = document.createElementNS(SvgNameSpace, 'svg')
        this._mainSvgDom.setAttributeNS(null, 'width',  `${(8 + 2) * this.fieldLength}px`)
        this._mainSvgDom.setAttributeNS(null, 'height', `${(8 + 2) * this.fieldLength}px`)
        this._containerDom.appendChild(this._mainSvgDom)
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
            const textDom = document.createElementNS(SvgNameSpace, 'text')
            // textDom.setAttributeNS(null, 'fill', 'red')
            textDom.setAttributeNS(null, 'text-anchor', 'middle')

            if(dimension == 0) {
                textDom.setAttributeNS(null, 'x', `${index * 100 + 150}px`)
                textDom.setAttributeNS(null, 'y', `${50}px`)
            }

            if(dimension == 1) {
                textDom.setAttributeNS(null, 'x', `${50}px`)
                textDom.setAttributeNS(null, 'y', `${index * 100 + 150}px`)
            }

            textDom.textContent = BoardView.labelsByDimension[dimension][index]
            this._mainSvgDom.appendChild(textDom)
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
                const field = document.createElementNS(SvgNameSpace, 'g')
                const rect = document.createElementNS(SvgNameSpace, 'rect')
                rect.setAttributeNS(null, 'width', `${this.fieldLength}px`)
                rect.setAttributeNS(null, 'height', `${this.fieldLength}px`)
                rect.setAttributeNS(null, 'x', `${x * this.fieldLength + 100}px`)
                rect.setAttributeNS(null, 'y', `${y * this.fieldLength + 100}px`)

                const color = (x + y) % 2 == 0
                    ? 'black'
                    : 'green'

                rect.setAttributeNS(null, 'fill', color)

                field.appendChild(rect)
                this._mainSvgDom.appendChild(field)
            }
        }
    }
}