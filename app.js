// ROCK PAPER SCISSOR GAME

//***********Main***********//

// Declare variable 
const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

// Display beginning scores
console.log("Player: " + humanScore,"|", "Computer: " + computerScore)
// Game Start
playGame();

//***********Main***********//


    // Get random choice for computer
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

    // Get input from user
function getHumanChoice(){
    let humanChoice = prompt("Input your choice (Rock, Paper, or Scissor)").toLowerCase();
    let check = validateInput(humanChoice);
    while(!check){
        humanChoice = prompt(`Invalid input. Try again! (Type "Rock", "Paper", or "Scissor")`).toLowerCase();
        check = validateInput(humanChoice)
    }
    return humanChoice;
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    }
    else{
        return false;
    }
}
function playRound(humanChoice, computerChoice){
    // Tie condition
    if(humanChoice == computerChoice){
        console.log("It's a tie !");
    }
    // Player win condition
    else if((humanChoice == "rock" && computerChoice == "scissor")
          ||(humanChoice == "paper"  && computerChoice == "rock")
          ||(humanChoice == "scissor"  && computerChoice == "paper")){
            console.log("You won this round!");
            humanScore++;
        }
        // Computer win condition
    else{
        computerScore++;
        console.log("Computer won this round!");
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Player: " + humanChoice,"|", "Computer: " + computerChoice)
    }
    // Display final scores
    console.log("Player: " + humanScore,"|", "Computer: " + computerScore)
    // Winner message
        // Tie Game
    if(humanScore == computerScore){
        console.log("Crazy!!! It's a tie game. So fun to play with you")
    }
        // Player won the game
    else if(humanScore > computerScore){
        console.log("Congratulation!!! You won this Game. So fun playing with you")
    }
        // Computer won the game
    else{
        console.log("Computer won this Game. So fun playing with you")
    }
}




