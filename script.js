let answer = prompt("What's your choice?");

function getComputerChoice () {
    const myArray=["rock" , "paper", "scissors"]
    
    const random = Math.floor(Math.random() * myArray.length);
    return myArray[random]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return(computerSelection + " You Lose! Paper beats Rock");
    } else if (playerSelection == 'paper' && computerSelection == "scissors") {
        return(computerSelection + " You Lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return(computerSelection + " You Lose! Rock beats Scissors");
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        return(computerSelection + " You Win! Rock beats Scissors");
    }  else if (playerSelection == "paper" && computerSelection == "rock") {     
        return(computerSelection + " You Win! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return(computerSelection + " You Win! Scissors beats Paper");
    } else if (playerSelection === computerSelection) {
        return(computerSelection + " It's tie");
    } else {
        return ("Enter again");
    }
}

const playerSelection = answer.toLowerCase();
const computerSelection = getComputerChoice();


function game() {
    for (let i = 0; i < 5; i++) {
        var result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
}
game(playRound(playerSelection, computerSelection))