# rock-paper-scissors
First TOP JavaScript project

Altered game rules from 'first to 5 wins' to 'best of 5'.
The game runs on a function game() which assigns a base score for the player and computer. 
Inside the function game() there is a function playGame() which takes accesses the buttons in the DOM and attaches an event listener based on each click by the player. This event listener then triggers another function called winner() which compares the player and computer choice and returns a score to the winner based on specified if/else values (i.e. rock, paper, or scissors) inside the winner() function. 

Once the game has been run 5 times, then the function gameOver() is triggered which displays the results, who is the winner, and then allows access to the 'restart' button which reloads the window to allow the game to be played again.