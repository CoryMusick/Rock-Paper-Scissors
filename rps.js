// Declaring Variables
const choices = ["Rock", "Paper", "Scissors"]
let buttonId = "";
let computerChoice = "";
let playerChoice = "";
let playerWin = 0;
let computerWin = 0;

// Gettting Dom Elements
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results-container");
const computerWinContainer = document.querySelector("#computer-win");
const playerWinContainer = document.querySelector("#player-win");
const computerSelectionContainer = document.querySelector("#computer-selection");
const playerSelectionContainer =  document.querySelector("#player-selection");

// Adding Event Listners to Buttons
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(playerWin < 5 && computerWin < 5){
            game(playerSelection(button.id), computerSelection())  
        }
        if(button.id == "reset"){
          reset();
        }
    } )
});

// Player and Computer Selections
function playerSelection(int) {
    let playerChoice = choices[int]
    return playerChoice.toLowerCase()
}

function computerSelection() {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice.toLowerCase()
}

//Reset Button Functionality
function reset() {
    computerWinContainer.textContent = "Computer Wins: 0"
    playerWinContainer.textContent = "Player Wins: 0"
    playerSelectionContainer.textContent = "Player Selection: 0"
    computerSelectionContainer.textContent = "Computer Selection: 0"
    results.textContent = "Result:"
    playerWin = 0;
    computerWin = 0;
}
// Game Function
function game(playerSelection, computerSelection) {
   playerSelectionContainer.textContent = "Player Selection: " + playerSelection;
    computerSelectionContainer.textContent = "Computer Selection: " + computerSelection
    // tie
    if( playerSelection == computerSelection){
        
    }
    // rock beats scissors
    if(playerSelection == "rock" && computerSelection == "scissors"){
        
        playerWin++
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerWin++
    }

    // Paper beats rock
    if(playerSelection == "paper" && computerSelection == "rock"){
        playerWin++
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        computerWin++
    }

    //scissors beats paper
    if(playerSelection == "scissors" && computerSelection == "paper"){
        playerWin++
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerWin++
    }
  
    //Update Player Win Totals
    playerWinContainer.textContent = playerWin.toString();
    computerWinContainer.textContent = computerWin.toString();

    //Check Win Max
    if(playerWin >= 5){
    results.textContent = "Win!"
    
    }else if (computerWin >= 5){
    results.textContent = "lost"
    
    }
}

