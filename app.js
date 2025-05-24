// ROCK PAPER SCISSORS GAME
// Declare variable 
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const displayHumanScore = document.getElementById("displayHumanScore");
const displayComputerScore = document.getElementById("displayComputerScore");
const displayHumanChoice = document.getElementById("displayHumanChoice");
const displayComputerChoice = document.getElementById("displayComputerChoice");
const displayResult = document.getElementById("displayResult");

    // Get random choice for computer
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}


function playRound(humanChoice){
    // Tie condition
    let computerChoice = getComputerChoice();
    if(humanChoice == computerChoice){
        displayResult.textContent = "It's a tie !";
    }
    // Player win condition
    else if((humanChoice == "rock" && computerChoice == "scissors")
        ||(humanChoice == "paper"  && computerChoice == "rock")
    ||(humanChoice == "scissors"  && computerChoice == "paper"))
    {
        humanScore++;
        displayResult.textContent= "You won this round!";
    }
    // Computer win condition
    else{
        computerScore++;
        displayResult.textContent= "Computer won this round!";
    }
    // Display choice
    displayHumanChoice.textContent = `Player: ${humanChoice}`;
    displayComputerChoice.textContent = `Computer: ${computerChoice}`;

    // Display scores
    displayHumanScore.textContent = `Player: ${humanScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
    resetGame();
}


function resetGame(){
    // Winner message
        // Player won the game
    if(humanScore >= 5){
        displayResult.textContent= "Congratulation!!! You won this Game.";
        // Reset Score for new game
        humanScore = 0;
        computerScore = 0;
        alert("GAME OVER!");
    }
        // Computer won the game
    else if(computerScore >= 5){
        displayResult.textContent= "Computer won this Game.";
        // Reset Score for new game
        humanScore = 0;
        computerScore = 0;
        alert("GAME OVER!");
    }

}
