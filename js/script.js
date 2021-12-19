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

//storing the generated value from the above function in a variable
let computerSelection = computerPlay();
//view the generated value
console.log(computerSelection);

// ask the user to type from rock, paper or scissors and store it into a variable string type
let selection = prompt('Rock, Paper or Scissors? ');
//convert the selection
let playerSelection = selection.toLowerCase();
//view the input from user
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose, Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Won, Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose, Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Won, Scissors beats Paper";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose, Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Won, Paper beats Rock";
    }
}

//view the results from the function above
console.log(playRound(playerSelection, computerSelection));

let playRounds = playRound(playerSelection, computerSelection);
