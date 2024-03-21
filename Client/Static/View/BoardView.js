export default class BoardView {
    constructor(containerDom) {
        this._containerDom = containerDom
    }

    Render() {
        const svgNameSpace = 'http://www.w3.org/2000/svg';
        const fieldLength = 100;

        const chessMainSvg = document.createElementNS(svgNameSpace, 'svg');
        chessMainSvg.setAttributeNS(null, 'width', `${8 * fieldLength}px`);
        chessMainSvg.setAttributeNS(null, 'height', `${8 * fieldLength}px`);
        this._containerDom.appendChild(chessMainSvg);

        //TODO: please use me!
        const labels = {
            horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            vertical: ['1', '2', '3', '4', '5', '6', '7', '8'],
        };
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const field = document.createElementNS(svgNameSpace, 'g');
                const rect = document.createElementNS(svgNameSpace, 'rect');
                rect.setAttributeNS(null, 'width', `${fieldLength}px`);
                rect.setAttributeNS(null, 'height', `${fieldLength}px`);
                rect.setAttributeNS(null, 'x', `${x * fieldLength}px`);
                rect.setAttributeNS(null, 'y', `${y * fieldLength}px`);

                const color = (x + y) % 2 == 0
                    ? 'black'
                    : 'green';

                rect.setAttributeNS(null, 'fill', color);

                field.appendChild(rect);
                chessMainSvg.appendChild(field);
            }
        }
    }
}