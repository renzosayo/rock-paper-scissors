// get computer choice

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

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
function getPlayerChoice() {
    return capitalize(prompt("Please enter your choice: "));
}

// play a round
function playRound(playerSelection, computerSelection) {

    let winner = "";
    let winnerSelection = "";
    let loserSelection = "";

    if(playerSelection === ROCK) {
        if(computerSelection === PAPER) {
            winner = "Computer";
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        } else if (computerSelection === SCISSORS) {
            winner = "Player";
            winnerSelection = playerSelection;
            loserSelection = computerSelection;
        }
    } else if(playerSelection === PAPER) {
        if(computerSelection === ROCK) {
            winner = "Player";
            winnerSelection = playerSelection;
            loserSelection = computerSelection;
        } else if(computerSelection === SCISSORS) {
            winner = "Computer";
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        }
    } else if(playerSelection === SCISSORS) {
        if(computerSelection === PAPER) {
            winner = "Computer";
            winnerSelection = computerSelection;
            loserSelection = playerSelection;
        } else if (computerSelection === ROCK) {
            winner = "Player";
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
    console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
}

// output result of round
function showRoundResult(winner, winnerSelection, loserSelection) {

    if(winner) {
        console.log(winner + " wins! " + winnerSelection + " beats " + loserSelection);
    } else {
        console.log("Draw!");
    }
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
            case "Player":
                playerScore++;
                break;
            case "Computer":
                computerScore++;
                break;
        }

        if(playerScore >= 5 || computerScore >= 5) {
            displayWinner(playerScore, computerScore);
            break;
        }
    }
}


game();