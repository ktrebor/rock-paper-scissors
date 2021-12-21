// setting the initial score
let computerScore = 0;
let playerScore = 0;

function game() {
    //generate a random number between 0 and 2 and
    //associate the numbers with rock = 0, paper = 1 and scissors = 2
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


    //running the rules of the game
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return "You Lose, Rock beats Scissors";
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return "You Won, Rock beats Scissors";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return "You Lose, Scissors beats Paper";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return "You Won, Scissors beats Paper";
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return "You Lose, Paper beats Rock";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return "You Won, Paper beats Rock";
        }
    }

    //storing the generated value from the computer round in a variable
    let computerSelection = computerPlay();
    //view the generated value
    console.log(computerSelection);

    // ask the user to type rock, paper or scissors and store it into a variable string type
    let selection = prompt('Rock, Paper or Scissors? ');
    //convert the selection to lowercase
    let playerSelection = selection.toLowerCase();
    //view the input from user
    console.log(playerSelection);

    //view the results from the playround
    console.log(playRound(playerSelection, computerSelection));
}

//playing the game 5 times
for (let i = 0;  i < 5; i++) {
    game();
    console.log(computerScore);
    console.log(playerScore);
}

if (computerScore > playerScore) {
    console.log(`You Lost, final score is \nYou: ${playerScore} Computer: ${computerScore} `)
} else if (computerScore < playerScore) {
    console.log(`You Won, final score is \nYou: ${playerScore} Computer: ${computerScore} `)
} else {
    console.log(`It's a TIE, final score is \nYou: ${playerScore} Computer: ${computerScore} `)
}