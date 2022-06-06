let players = ['x', 'o']; // рисуют каракули
let activePlayer = 0; // тот кто рисует каракули в этот ход
let board; // штука на которой рисуют каракули

function startGame() {
  activePlayer = 0;
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
}

function changePlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else if (activePlayer === 1) {
    activePlayer = 0;
  }
  return activePlayer;
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);
  gameProgress();
}

function gameProgress() {
    let countEqual = 0;
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[j][i] === players[activePlayer]) {
        countEqual++;
      } else break;
    }
  }

  if (countEqual === board.length) {
    showWinner(activePlayer);
  }
  countEqual = 0;

  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] === players[activePlayer]) {
        countEqual++;
      } else break;
    }
  }

  if (countEqual === board.length) {
    showWinner(activePlayer);
  }
  countEqual = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === players[activePlayer]) {
      countEqual++;
    } else break;
  }

  if (countEqual === board.length) {
    showWinner(activePlayer);
  }
  countEqual = 0;

  let j = 0;
  for (let i = (board.length - 1); i >= 0; i--) {
    if (board[i][j] === players[activePlayer]) {
      countEqual++;
      j++;
    } else break;
  }
  if (countEqual === board.length) {
    showWinner(activePlayer);
  }
  changePlayer();
}