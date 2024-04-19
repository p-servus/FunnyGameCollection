import BoardView from "./View/board/BoardView.js";

window.addEventListener('load', () => {
	const chessContainer = document.getElementById('chess');
	const boardView = new BoardView(chessContainer);
	boardView.Render();
});
