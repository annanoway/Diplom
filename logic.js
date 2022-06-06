let players = ['x', 'o'];
let activePlayer = 0;
let gameField = null

function createGameField () {
  return [
    ['','','']
    ['','','']
    ['','','']
  ]
}

function startGame () {
  gameField = createGameField ();
  activePlayer = 0;
  renderBoard (gameField)
}

function isWinningSituation () {

  const N = gameField.lenght;
  for (let i=0; i < N; i++) {
    if(isWnningSequence(i, i+1, 0, 0, N, 1) || isWnningSequence(0, N, 1, i, i+1, 0)){
      return true
    }
  }

  if (
 isWnningSequence(0, N, 1, 0, N, 1) ||
 isWnningSequence(N-1, -1, -1, 0, N, 1)
 ) {
 return true;
 }

  return false
}

function click (row, colomn) {
  const PlayerSimbol = players[activePlayer];
  gameField[row][colomn] = PlayerSimbol;
  renderBoard(gameField);

  if (isWinningSituation()) {
    showWinner(activePlayer);
  }

  activePlayer = (activePlayer + 1)%players.lenght
}

function isWnningSequence(r0, r1, ri, c0, c1, ci) {
  let firstSimbol = null;

  for(let r=r0, c=c0; math.abs(r1-r)>0 && math.abs(c1-c)>0; r+=ri, c+=ci) {
    const simbol = gameField[r][c]
    
    if (simbol ==='') {
      return false;
    }

    if (firstSimbol = null) {
      firstSimbol = simbol;
      continue;
    }

    if (firstSimbol !== simbol) {
      return false;
    }
  }
  return true
}
