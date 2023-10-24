// get computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let result = "";

    switch(choice) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
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

    /*let winner = "";

    if(playerSelection === "Rock") {
        if(computerSelection === "Paper") {
            winner = "Computer";
        } else if (computerSelection === "Scissors") {
            winner = "Player";
        }
    } else if(playerSelection === "Paper") {
        if(computerSelection) {

        }
    } */

    console.log(playerSelection);
    console.log(computerSelection);
}


// check who wins

// output result of round



let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));