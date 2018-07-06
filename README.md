# Chopsticks and Dumplings
### A new take on the classic game!
Following the same rules as tic, tac, toe; two players take it in turns to get three of their markers in a row. In this case, players markers are round dumplings and crossed chopsticks.

I was inspired to create the themed game due to my love-affair with dumplings, and the bonus being the shapes of the markers are conveniently similar to the classic ones!

**Game Rules**
1. The game is played on a grid that's 3 squares by 3 squares.
2. You are Chopsticks, your friend is Dumplings. Players take turns putting their marks in empty squares.
3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a draw.
5. Players are able to reset after a player has won, or if the game results in a draw.

**Game Link:** [Dumplings&Chopsticks]( https://razbag18.github.io/tictactoe/)

###Process Reflection###
I mapped out a schedule of code I'd like completed by a specific time over the assignment. On reflection, I was a bit generous with the amount of time I gave myself to complete each task. Because of this, on my next project I now know I can set stricter timelines on myself to achieve more over the course of the assignment. 
For my first assignment, having only 2.5 weeks of full-time coding under my belt, I am pleased with the outcome. 

**Process Approach**
*First day* 
1. Make a grid with 9 boxes
2. Click on a box, put an 'X' inside using an eventListener

*Second Day*
3. Find 3 in a row horizontally to display winner
4. Changing the DOM to display winner
5. Find 3 in a row veritically and diagonally

*Third Day*
6. Refactoring code
7. Detecing a draw
8. Resetting board, fancy scoring system, styling

**Review**
I am really happy with my game, based on my experience level. I completed the timeline I'd set out in two days, so I spent the third day making the players alternate after each turn. I would in the future like to advance the game with a few sound effects and a more celebrated winner pop-up that takes over the entire gameboard. I also didn't implement a scoring system to keep a tally of the game which would be very useful. I have coded a maximum number of games players can play so it's in the works. 


**Struggles**
1. My logic to find a winner was initially extremeley long and repetative and begged to be put into a function. With Kusan's help I was able to achieve writing an appropriate function to check each line for 3 in a row and announcing a winner.
2. I struggled with the logic of stopping a player clicking on a square that was already taken by another player, and also how to stop the game. This has been recitified with Kusan's help.
3. I am still having a scaling issue with the board but I think it's because I'm not entirely comfortable with using flex-box and css in general. As an extension I would like to change the design of the board so it uses media queries to scale the board down to fit within a phone screen. At this point I've used flex for the board but not for the items to the left and right of it, so when you open it on a phone you can't even see the board. 
4. Changing players after each turn was challenging too, and took a while to understand why the code I implemented wasn't changing the players. Again, I received help to rectify but I understand why the code used works and mine didn't.

