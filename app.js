var gameBoard = document.querySelector('.game-board');
var playingSquares = document.querySelectorAll('.game-board div');

var turnCount = 0

// function for alternating between the two
var gameCounter = function() {
  //turnCount starts at 0, as determined in the variable declared before the function
  //but after function is run, add 1 to itself. After turn one, the turnCount is now 
  //equal to 1, and is not divisible by 2
  turnCount++
  //if the turnCount is divisible by 2, then on event, mark-o
  if (turnCount % 2 === 0) {
    event.target.classList.add('mark-o')
    console.log('Player 1\s turn')
    //otherwise, on event, mark-x
  } else {
    event.target.classList.add('mark-x')
    console.log('Player 2\s turn')
  }
  //find 3 in a row horizontally 
  if (playingSquares[0].classList.contains('mark-x') === true && 
  playingSquares[1].classList.contains('mark-x') === true && 
  playingSquares[2].classList.contains('mark-x') === true){
    console.log("Chopsticks WIN!");
  } else if (playingSquares[0].classList.contains('mark-o') === true &&
playingSquares[1].classList.contains('mark-o') === true &&
playingSquares[2].classList.contains('mark-o') === true){
  console.log("Dumplings WIN!");
  }
} 
gameBoard.addEventListener('click', gameCounter);






// var markO = function(event){
//  event.target.classList.add('mark-o')
//  }

//  



// var markX = function(event){
//   event.target.classList.add('mark-x')
// }

// gameBoard.addEventListener('click', markX);