// get computer choice

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const PLAYER = "Player";
const COMPUTER = "Computer";

const resultsDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

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

    updateScore(winner);

}

function updateScore(winner) {

    if(winner === PLAYER) {
        playerScore++;
    } else if(winner === COMPUTER) {
        computerScore++;
    }

    scoreDiv.textContent = `Player: ${playerScore}\n
        Computer: ${computerScore}`;

    if(playerScore >= 5 || computerScore >= 5) {
        playerScore > computerScore ? alert("Player Wins!")
            : alert("Computer Wins!");
    }
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

    showSelections(playerSelection, computerSelection);

    showRoundResult(winner, winnerSelection, loserSelection);

    return winner;
}
// show participant selections
function showSelections(playerSelection, computerSelection) {

    const textContainer = document.createElement('p');
    textContainer.textContent = `Player: ${playerSelection}\n
        Computer: ${computerSelection}`;

    resultsDiv.appendChild(textContainer);

    //console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
}

// output result of round
function showRoundResult(winner, winnerSelection, loserSelection) {

    const textContainer = document.createElement('p');
    let roundResult = "";

    if(winner) {
        roundResult = winner + " wins! " + winnerSelection + " beats " + loserSelection;
    } else {
        roundResult = "Draw!";
    }

    textContainer.textContent = roundResult;
    resultsDiv.appendChild(textContainer);
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

function createPlayerSelectionButtons() {
    const selections = document.querySelectorAll('button');

    for(const selection of selections) {
        selection.addEventListener('click', getPlayerChoice);
    }
}



createPlayerSelectionButtons();
