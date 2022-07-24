let answer = prompt("What's your choice?");

function getComputerChoice () {
    const myArray=["Rock" , "Paper", "Scissors"]
    
    const random = Math.floor(Math.random() * myArray.length);
    return myArray[random]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return("You Lose! Paper beats Rock");
    } else if (playerSelection == 'Paper' && computerSelection == "Scissors") {
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return("You Lose! Rock beats Scissors");
    }  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return("You Win! Rock beats Scissors");
    }  else if (playerSelection == "Paper" && computerSelection == "Rock") {     
        return("You Win! Paper beats Rock");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return("You Win! Scissors beats Paper");
    } else {
        return("It's tie")
    }
}

const playerSelection = answer;
const computerSelection = getComputerChoice();


function game() {
    for (let i = 0; i < 5; i++) {
        var result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
}
game(playRound(playerSelection, computerSelection))