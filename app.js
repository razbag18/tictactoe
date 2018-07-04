var gameBoard = document.querySelector('.game-board');
var playingSquares = document.querySelectorAll('.game-board div');
var gameWinner = document.querySelector('.game-winner');

var turnCount = 0
var currentPlayer = ''
var winMessage = ''

// function for alternating between the two
var gameCounter = function() {
  //turnCount starts at 0, as determined in the variable declared before the function
  //but after function is run, add 1 to itself. After turn one, the turnCount is now 
  //equal to 1, and is not divisible by 2
  turnCount++
  //if the turnCount is divisible by 2, then on event, mark-o
  if (turnCount % 2 === 0) {
    event.target.classList.add('mark-o')
    currentPlayer = 'mark-o'
    winMessage = "dumplings WIN!"
    console.log('Player 1\s turn')
    //otherwise, on event, mark-x
  } else {
    event.target.classList.add('mark-x')
    currentPlayer = 'mark-x'
    winMessage = "chopsticks WIN!"
    console.log('Player 2\s turn')
  }

  var lineCheck = function(sq1, sq2, sq3, currentPlayer, winMessage) {
    if (sq1.classList.contains(currentPlayer) && 
    sq2.classList.contains(currentPlayer) && 
    sq3.classList.contains(currentPlayer)){
      gameWinner.textContent = winMessage;
    }
  }

  lineCheck(playingSquares[0], playingSquares[1], playingSquares[2], currentPlayer, winMessage);
  lineCheck(playingSquares[3], playingSquares[4], playingSquares[5], currentPlayer, winMessage);
  lineCheck(playingSquares[6], playingSquares[7], playingSquares[8], currentPlayer, winMessage);
  lineCheck(playingSquares[0], playingSquares[3], playingSquares[6], currentPlayer, winMessage);
  lineCheck(playingSquares[1], playingSquares[4], playingSquares[7], currentPlayer, winMessage);
  lineCheck(playingSquares[2], playingSquares[5], playingSquares[8], currentPlayer, winMessage);
  lineCheck(playingSquares[0], playingSquares[4], playingSquares[8], currentPlayer, winMessage);
  lineCheck(playingSquares[2], playingSquares[4], playingSquares[6], currentPlayer, winMessage);

}
gameBoard.addEventListener('click', gameCounter);

//find 3 in a row horizontally on first row 
  
  // if (playingSquares[0].classList.contains('mark-o') &&
  // playingSquares[1].classList.contains('mark-o') &&
  // playingSquares[2].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  //}//find 3 in a row horizontally on second row 
  // if (playingSquares[3].classList.contains('mark-x') &&
  // playingSquares[4].classList.contains('mark-x') &&
  // playingSquares[5].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // }
  // if (playingSquares[3].classList.contains('mark-o') &&
  // playingSquares[4].classList.contains('mark-o') &&
  // playingSquares[5].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  //}//find 4 in a row horizontally on third row
  // if (playingSquares[6].classList.contains('mark-x') &&
  // playingSquares[7].classList.contains('mark-x') &&
  // playingSquares[8].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!")
  // }
  // if (playingSquares[6].classList.contains('mark-o') &&
  // playingSquares[7].classList.contains('mark-o') &&
  // playingSquares[8].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!")
  // }//find 3 in a row vertically on first column
  // if (playingSquares[0].classList.contains('mark-x') && 
  // playingSquares[3].classList.contains('mark-x') && 
  // playingSquares[6].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // } if (playingSquares[0].classList.contains('mark-o') &&
  // playingSquares[3].classList.contains('mark-o') &&
  // playingSquares[6].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  // }//find 3 in a row vertically on second column
  // if(playingSquares[1].classList.contains('mark-x') &&
  // playingSquares[4].classList.contains('mark-x') &&
  // playingSquares[7].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // } if (playingSquares[1].classList.contains('mark-o') &&
  // playingSquares[4].classList.contains('mark-o') &&
  // playingSquares[7].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  // }//find 3 in a row vertically on third column
  // if(playingSquares[2].classList.contains('mark-x') &&
  // playingSquares[5].classList.contains('mark-x') &&
  // playingSquares[8].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // }
  // if (playingSquares[2].classList.contains('mark-o') &&
  // playingSquares[5].classList.contains('mark-o') &&
  // playingSquares[8].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  // }//finding diagonally from index 0 to 8
  // if(playingSquares[0].classList.contains('mark-x') &&
  // playingSquares[4].classList.contains('mark-x') &&
  // playingSquares[8].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // }
  // if (playingSquares[0].classList.contains('mark-o') &&
  // playingSquares[4].classList.contains('mark-o') &&
  // playingSquares[8].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  //finding diagonally from index 2 to 6
  // if(playingSquares[2].classList.contains('mark-x') &&
  // playingSquares[4].classList.contains('mark-x') &&
  // playingSquares[6].classList.contains('mark-x')){
  //   gameWinner.textContent = ("Chopsticks WIN!");
  // }
  // if (playingSquares[2].classList.contains('mark-o') &&
  // playingSquares[4].classList.contains('mark-o') &&
  // playingSquares[6].classList.contains('mark-o')){
  //   gameWinner.textContent = ("Dumplings WIN!");
  // } //else if (turnCount === 9 && //noone has won) {
  //   //gameWinner.textContent = ("DRAW");









// var markO = function(event){
//  event.target.classList.add('mark-o')
//  }

//  



// var markX = function(event){
//   event.target.classList.add('mark-x')
// }

// gameBoard.addEventListener('click', markX);