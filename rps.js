//score tracker
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    function playGame() {
        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorsBtn = document.getElementById('scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('.moves-left');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                //Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 5 moves
                if(moves === 5) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }


    // Function to decide winner
    function winner(player, computer) {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        // player = player.toLowerCase();
        // computer = computer.toLowerCase();
        
        if(player === computer) {
            result.textContent = 'Tie'
        } 
        else if (player == 'rock') {
            if (computer == 'paper') {
            result.textContent = 'Computer won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player = 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer won'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to run when game is over
    function gameOver(playerOptions, movesLeft) {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const restartBtn = document.querySelector('.restart');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game over!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.innerText = 'You win';
        }
        else if (computerScore > playerScore) {
            result.innerText = 'You lose';
        }
        else {
            result.innerText = 'Tie'
        }
        restartBtn.innerText = 'Restart';
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    // Calling playGame function inside game
    playGame();
}

game();
