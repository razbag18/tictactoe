var gameBoard = document.querySelector('.game-board');
var playingSquares = document.querySelectorAll('.game-board div');
var gameWinner = document.querySelector('.game-winner');
var resetBtn = document.querySelector('.reset');
var playerOne = document.querySelector('.player1-score');
var playerTwo = document.querySelector('.player2-score');
var dumplingsWin = document.querySelector('#dumplings');
var chopsticksWin = document.querySelector('#chopsticks')
var turnCount = 0
var currentPlayer = ''
var winMessage = ''
var inPlay = true
var gameCount = 0

// function for alternating between the two
var gameCounter = function() {
  //turnCount starts at 0, as determined in the variable declared before the function
  //but after function is run, add 1 to itself. After turn one, the turnCount is now 
  //equal to 1, and is not divisible by 2

  //IF I WANT GAME TO BE ONLY 3 INCLUDE IN CODE BELOW gameCount <3

  //if the targeted class does not contain 'mark-o' or 'mark-x' allow the game to run
  if (!event.target.classList.contains('mark-o') && !event.target.classList.contains('mark-x') && inPlay) {

    turnCount++

    //if the turnCount is divisible by 2, then on event, mark-o
    if (turnCount % 2 === 0) {
      event.target.classList.add('mark-o')
      currentPlayer = 'mark-o'
      playerTwo.textContent = ''
      playerOne.textContent = 'Chopsticks turn'
      winMessage = 'dumplings WIN!'
      console.log('Player 1\s turn')
      //otherwise, on event, mark-x
    } else {
      event.target.classList.add('mark-x')
      currentPlayer = 'mark-x'
      playerTwo.textContent = 'Dumplings turn'
      playerOne.textContent = ''
      winMessage = 'chopsticks WIN!'
      console.log('Player 2\s turn')
    }
    if (turnCount === 9){
      // gameWinner.textContent = 'DRAW'; 
      playerTwo.textContent = 'DRAW';
      playerOne.textContent = 'DRAW';
    }

    //refactored code into a function to check lines for a win. parameters were checking 3 squares we passed in, the current person playing, and the win message
    var lineCheck = function(sq1, sq2, sq3, currentPlayer, winMessage) {
      //sq1 in the first function call is: playingSquares[0], sq2 is: playingSquares[1], sq2 is playingSquares[2]
      //currentPlayer is my class, in the first case its 'mark-o' and winMessage is the message assosiated with the player playing.
      if (sq1.classList.contains(currentPlayer) && 
      sq2.classList.contains(currentPlayer) && 
      sq3.classList.contains(currentPlayer)){
        // gameWinner.textContent = winMessage;
        playerOne.textContent = winMessage;
        playerTwo.textContent = winMessage;

        inPlay = false
        // gameCount ++
        // playerOne.textContent = gameCount;
        //score the game here too??
      }
    }
    //calling the lineCheck function with my passed in arguments. First call is checking if 
    //playing squares with the index [0], [1] & [2] contains the class of the current player. 
    lineCheck(playingSquares[0], playingSquares[1], playingSquares[2], currentPlayer, winMessage);
    lineCheck(playingSquares[3], playingSquares[4], playingSquares[5], currentPlayer, winMessage);
    lineCheck(playingSquares[6], playingSquares[7], playingSquares[8], currentPlayer, winMessage);
    lineCheck(playingSquares[0], playingSquares[3], playingSquares[6], currentPlayer, winMessage);
    lineCheck(playingSquares[1], playingSquares[4], playingSquares[7], currentPlayer, winMessage);
    lineCheck(playingSquares[2], playingSquares[5], playingSquares[8], currentPlayer, winMessage);
    lineCheck(playingSquares[0], playingSquares[4], playingSquares[8], currentPlayer, winMessage);
    lineCheck(playingSquares[2], playingSquares[4], playingSquares[6], currentPlayer, winMessage);
  }
}
//on click of the gameboard, running thr function gameCounter, and within that function, lineCheck
gameBoard.addEventListener('click', gameCounter);

var resetGame = function(){
  playingSquares.forEach(function(item){
    item.classList.remove('mark-x')
    item.classList.remove('mark-o')
    })
  // gameWinner.textContent = "";
  playerOne.textContent = "Chopsticks turn";
  playerTwo.textContent = "";
  turnCount = 0;
  inPlay = true;
  // gameCount ++
  //want to add a player tally
}
resetBtn.addEventListener('click', resetGame)



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