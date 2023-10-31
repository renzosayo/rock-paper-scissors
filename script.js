// get computer choice

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const PLAYER = "Player";
const COMPUTER = "Computer";

const resultsDiv = document.querySelector('.results-log');
const scoreDiv = document.querySelector('.score');
const divPlayerChoice = document.querySelector('#player-choice');
const divComputerChoice = document.querySelector('#computer-choice');
const paraPlayerScore = document.querySelector('#player-score');
const paraComputerScore = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let result = "";

    switch(choice) {
        case 0:
            result = ROCK;
            break;
        case 1:
            result = PAPER;
            break;
        case 2:
            result = SCISSORS;
            break;
    }
    return result;
}

// toLowerCase then capitalize
function capitalize(text) {

    text = text.toLowerCase();
    let restOfText = text.slice(1);
    text = (text.slice(0, 1).toUpperCase()) + restOfText;

    return text;
}

// get player choice
function getPlayerChoice(e) {
    let playerChoice = e.target.textContent;

    let computerChoice = getComputerChoice();

    let winner = playRound(playerChoice, computerChoice);

    let isGameFinished = updateScore(winner);

    if(isGameFinished) {
        finishGame();
    }

}

function finishGame() {
    const selections = document.querySelectorAll('.rps');

    for(const selection of selections) {
        selection.removeEventListener('click', getPlayerChoice);
    }

    const resetButton = document.createElement('button');
    resetButton.addEventListener('click', initializeGame);
    resetButton.textContent = "Play again";

    resultsDiv.prepend(resetButton);

}

function updateScore(winner) {

    let isGameFinished = false;

    paraComputerScore.classList = "";
    paraPlayerScore.classList = "";

    if(winner === PLAYER) {
        playerScore++;
    } else if(winner === COMPUTER) {
        computerScore++;
    }

    paraPlayerScore.textContent = `Player Score: ${playerScore}`;
    paraComputerScore.textContent = `Computer Score: ${computerScore}`;

    if(playerScore >= 5 || computerScore >= 5) {
        if(playerScore > computerScore) {
            paraPlayerScore.classList.toggle('final-victory');
            alert("Player Wins!");
        } else {
            paraComputerScore.classList.toggle('final-victory');
            alert("Computer Wins!");
        }
        isGameFinished = true;
    }

    return isGameFinished;

}  

// play a round
function playRound(playerSelection, computerSelection) {

    let winner = "";
    let winnerSelection = "";
    let loserSelection = "";

    if(playerSelection === ROCK) {
        if(computerSelection === PAPER) {
            winner = COMPUTER;
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        } else if (computerSelection === SCISSORS) {
            winner = PLAYER;
            winnerSelection = playerSelection;
            loserSelection = computerSelection;
        }
    } else if(playerSelection === PAPER) {
        if(computerSelection === ROCK) {
            winner = PLAYER;
            winnerSelection = playerSelection;
            loserSelection = computerSelection;
        } else if(computerSelection === SCISSORS) {
            winner = COMPUTER;
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        }
    } else if(playerSelection === SCISSORS) {
        if(computerSelection === PAPER) {
            winner = COMPUTER;
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        } else if (computerSelection === ROCK) {
            winner = PLAYER;
            winnerSelection = playerSelection;
            loserSelection = computerSelection;
        }
    }

    const roundDiv = showSelections(playerSelection, computerSelection);

    showRoundResult(winner, winnerSelection, loserSelection, roundDiv);

    return winner;
}
// show participant selections
function showSelections(playerSelection, computerSelection) {

    const roundDiv = document.createElement('div');
    const textContainer = document.createElement('p');
    textContainer.innerHTML = `<h4>Round ${roundNumber}</h4><strong>Player: </strong>${playerSelection}
    <strong>Computer: </strong>${computerSelection}`;



    divPlayerChoice.textContent = playerSelection;
    divComputerChoice.textContent = computerSelection;

    roundDiv.appendChild(textContainer);
    resultsDiv.prepend(roundDiv);

    roundNumber++;

    return roundDiv;
    //console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
}

// output result of round
function showRoundResult(winner, winnerSelection, loserSelection, roundDiv) {

    divComputerChoice.classList = "";
    divPlayerChoice.classList = "";

    const textContainer = document.createElement('p');
    let roundResult = "";

    if(winner) {
        if(winner === PLAYER) {
            divPlayerChoice.classList.toggle('winner');
            divComputerChoice.classList.toggle('loser');
        } else {
            divComputerChoice.classList.toggle('winner');
            divPlayerChoice.classList.toggle('loser');
        }
        roundResult = winner + " wins! " + winnerSelection + " beats " + loserSelection;
    } else {
        divComputerChoice.classList.toggle('draw');
        divPlayerChoice.classList.toggle('draw');
        roundResult = "Draw!";
    }

    textContainer.textContent = roundResult;
    roundDiv.appendChild(textContainer);
    //resultsDiv.prepend(textContainer);
}

function displayWinner(playerScore, computerScore) {

    console.log(`\nFinal Score\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    playerScore > computerScore ? console.log("Player Wins!") : console.log("Computer Wins!");
}

// play until one gets to 5
function game() {

    let playerScore = 0;
    let computerScore = 0;

    while(true) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        switch(result) {
            case PLAYER:
                playerScore++;
                break;
            case COMPUTER:
                computerScore++;
                break;
        }

        if(playerScore >= 5 || computerScore >= 5) {
            displayWinner(playerScore, computerScore);
            break;
        }
    }
}

function initializeGame() {
    const selections = document.querySelectorAll('.rps');

    for(const selection of selections) {
        selection.addEventListener('click', getPlayerChoice);
    }

    resultsDiv.textContent = "";
    paraPlayerScore.textContent = "";
    paraComputerScore.textContent = "";
    divComputerChoice.textContent = "";
    divComputerChoice.classList = "";
    divPlayerChoice.textContent = "";
    divPlayerChoice.classList = "";
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;


    updateScore();
}



initializeGame();
