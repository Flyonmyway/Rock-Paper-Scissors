let userScore = 0;
let computerScore = 0;
let roundCounter = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const roundCount_div = document.querySelector(".roundCount > p");
const roundAnn_p = document.querySelector(".resultAnnounce > p");
const choices_div = document.querySelector(".choices");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300); 
}

function loss(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost...`
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
}


function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 300);
}


function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rp":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        loss(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
    }
    roundCounter++;
    roundCount_div.innerHTML = `Round ${roundCounter}`
    if (roundCounter == 5) {
        restartGame();
    }
    }

function restartGame() {
    if (userScore > computerScore) {
        roundAnn_p.innerHTML = "You won this game!👏👏👏"
    } else if (computerScore > userScore) {
        roundAnn_p.innerHTML = "You Loss this game... 💧"
    } else {
    roundAnn_p.innerHTML = "Draw...Try Again?";
    }
    // show a restart button
    const tryAgain_btn = document.createElement('button');
    tryAgain_btn.classList.add('tryAgain_btn');
    tryAgain_btn.textContent = "Try again!";
    choices_div.appendChild(tryAgain_btn);
    tryAgain_btn.setAttribute('style', 'cursor: pointer; border: 2px solid #111; border-radius: 8px; margin-top: 20px; width: 120px; height: 30px; color: #111; background: #fee6e3; align-items: center');
    //reload the page after clicking button 
    tryAgain_btn.addEventListener('click', function(){
        window.location.reload();
    })
    // no button after five rounds
    rock_div.remove();
    paper_div.remove();
    scissors_div.remove();
}
 


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissors_div.addEventListener('click', function() {
        game('s');
    })
    
}

main();


