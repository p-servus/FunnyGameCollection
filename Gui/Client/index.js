import BoardView from "./View/BoardView.js";

window.addEventListener('load', () => {
	const chessContainer = document.getElementById('chess');
	const boardView = new BoardView(chessContainer);
	boardView.Render();
});
