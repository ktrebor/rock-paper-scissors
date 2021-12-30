// setting the initial score
let computerScore = 0;
let playerScore = 0;

//UI
//---obtain the input from the user 
const weapons = document.querySelectorAll(`.button`);
const container = document.querySelector(".container");
const resetGame = document.querySelector("#reset-game");
const playAgain = document.querySelector("#play-again");
const roundPoints = document.querySelector(".round-points");
const computerPoints = document.querySelector('#computer-score');
const playerPoints = document.querySelector('#player-score');
const finalResult = document.querySelector('.final-results');


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
        roundPoints.textContent = `It's a Tie. Both of you selected ${playerSelection}`;
        roundPoints.style.color = "blue";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        roundPoints.textContent = `Computer's point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "red";
        computerPoints.textContent = computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        roundPoints.textContent = `Your point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "green";
        playerPoints.textContent = playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        roundPoints.textContent = `Computer's point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "red";
        computerPoints.textContent = computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        roundPoints.textContent = `Your point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "green";
        playerPoints.textContent = playerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        roundPoints.textContent = `Computer's point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "red";
        computerPoints.textContent = computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        roundPoints.textContent = `Your point. You selected ${playerSelection} and the computer selected ${computerSelection}`;
        roundPoints.style.color = "green";
        playerPoints.textContent = playerScore;
    }
}

//---displays the final message
//--adds a button that resets the game
function endGame() {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            finalResult.textContent = `You lost! \nFinal score is You: ${playerScore} vs Computer: ${computerScore}`;
            finalResult.style.color = 'red';
        } else {
            finalResult.textContent = `You won! \nFinal score is You: ${playerScore} vs Computer: ${computerScore}`;
            finalResult.style.color = 'green';
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



