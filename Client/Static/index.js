import Board from "./View/Board.js";

window.addEventListener('load', () => {
	const chessContainer = document.getElementById('chess');
	const board = new Board(chessContainer);
});
