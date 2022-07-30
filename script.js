let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let myArray=["rock" , "paper", "scissors"]
    let random = Math.floor(Math.random() * myArray.length);
    return myArray[random]
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("What's your choice?").toLowerCase();
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return("You Win! Rock beats Scissors!")
        
    } else if (playerSelection === 'paper' && computerSelection === "rock") {
        playerScore += 1;
        return("You Wn! Paper beats Rock!")

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return("You Win! Scissors beats Paper!")
    
    }  else if (playerSelection === computerSelection) {
        return("It's tie");

    }  else {
        computerScore += 1;
        return (`You Loss! ${computerSelection} beats ${playerSelection}`)
    }
}

function winGame() {
    if (playerScore == 5) {
        return "You win!"
    } else if (computerScore == 5) {
        return "You lose!"
    }
}

game();

console.log(playerScore);
console.log(computerScore);
