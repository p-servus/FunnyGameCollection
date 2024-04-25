import Board from "./Model/Board.js";
import BoardView from "./View/board/BoardView.js";

window.addEventListener('load', () => {
	const chessContainer = document.getElementById('chess');
	const boardModel = new Board(); 
	const boardView = new BoardView(chessContainer, boardModel);
	boardView.Render();
});
