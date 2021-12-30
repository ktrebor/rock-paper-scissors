// setting the initial score
let computerScore = 0;
let playerScore = 0;

//UI
//---obtain the input from the user 
const weapons = document.querySelectorAll(`.button`);
const container = document.querySelector(".container");
const resetGame = document.querySelector("#reset-game");
const playAgain = document.querySelector("#play-again");

//---play one Round for each press of a button
weapons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        endGame();
    });
});



//GAME LOGIC
//---generate a random number between 0 and 2 and
//---associate the numbers with rock = 0, paper = 1 and scissors = 2
function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3);
    if (randomSelection === 0) {
        return 'rock';
    } else if (randomSelection === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


//---running the rules of the game
//--display the round result
//---update the score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector('.round-points').innerText = "It's a Tie";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        document.querySelector('.round-points').innerText = "Computer's point";
        document.querySelector('#computer-score').innerText = computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        document.querySelector('.round-points').innerText = "Your point";
        document.querySelector('#player-score').innerText = playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        document.querySelector('.round-points').innerText = "Computer's Point";
        document.querySelector('#computer-score').innerText = computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        document.querySelector('.round-points').innerText = "Your point";
        document.querySelector('#player-score').innerText = playerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        document.querySelector('.round-points').innerText = "Computer's Point";
        document.querySelector('#computer-score').innerText = computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        document.querySelector('.round-points').innerText = "Your point";
        document.querySelector('#player-score').innerText = playerScore;
    }
}

//---displays the final message
//--adds a button that resets the game
function endGame() {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            document.querySelector('.final-results').innerHTML = `You Lost! \nFinal score is You: ${playerScore} Computer: ${computerScore}`;
        } else {
            document.querySelector('.final-results').innerHTML = `You WON! \nFinal score is You: ${playerScore} Computer: ${computerScore}`;
        }
        restartGame();
}
}

function restartGame() {
    container.classList.add('hidden');
    resetGame.classList.remove('hidden');
    playAgain.addEventListener ('click', () => {
        container.classList.remove('hidden');
        resetGame.classList.add('hidden');
        computerScore = 0;
        playerScore = 0;
        document.querySelector('.round-points').innerText = "";
        document.querySelector('#computer-score').innerText = computerScore;
        document.querySelector('#player-score').innerText = playerScore;
    })    
}



