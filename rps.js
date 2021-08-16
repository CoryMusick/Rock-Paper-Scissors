// Declaring Variables
const choices = ["Rock", "Paper", "Scissors"]
let buttonId = "";
let computerChoice = "";
let playerChoice = "";
let playerWin = 0;
let computerWin = 0;

// Gettting Dom Elements
const buttons = document.querySelectorAll("button");
const modalTitle = document.querySelector(".modal-title");
const computerWinContainer = document.querySelector("#computer-score");
const playerWinContainer = document.querySelector("#player-win");
const computerSelectionContainer = document.querySelector("#computer-selection");
const playerSelectionContainer =  document.querySelector("#player-selection");
const changeButton = document.querySelector(".change-text");
const compDotContainer = document.querySelector("#computer-wins");
const playerDotContainer = document.querySelector("#player-wins");
const resetButton = document.querySelector("#reset");


// Adding Event Listners to Buttons
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(playerWin < 5 && computerWin < 5 && button.id != "reset"){
            game(playerSelection(button.id), computerSelection())  
        }
    } )
    
    button.addEventListener("", (e) =>{
        e.target.style.backgroundColor = "#555E62";
    })
    button.addEventListener("", (e) => {
        e.target.style.backgroundColor = "#818D92";
    })
})

// Player and Computer Selections
function playerSelection(int) {
    let playerChoice = choices[int]
    return playerChoice.toLowerCase()
}

function computerSelection() {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice.toLowerCase()
}

//Win Dot
winDot = () =>{
    let winDot = document.createElement("div")
    winDot.classList.add("dot", "win-dot");
    return winDot;
}

toggleModal = () =>{
    document.querySelector("#win-modal").classList.toggle("hidden")
}
//Reset Button Functionality
function reset() {
    console.log("rest runs")
    computerWinContainer.textContent = "0"
    playerWinContainer.textContent = "0"
    playerSelectionContainer.textContent = ""
    computerSelectionContainer.textContent = ""
    playerWin = 0;
    computerWin = 0;
    //reset win dots
    document.querySelectorAll(".win-dot").forEach(element => {
       element.remove();
    })
    //reset modal
    toggleModal();
}
// add function to reset button
resetButton.addEventListener("click", () => reset())

// Game Function
function game(playerSelection, computerSelection) {
  playerSelectionContainer.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelectionContainer.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    // tie
    if( playerSelection == computerSelection){
        
    }
    // rock beats scissors
    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerDotContainer.appendChild(winDot());
        playerWin++
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerWin++
        compDotContainer.appendChild(winDot());
    }

    // Paper beats rock
    if(playerSelection == "paper" && computerSelection == "rock"){
        playerDotContainer.appendChild(winDot());
        playerWin++
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        computerWin++
        compDotContainer.appendChild(winDot());
    }

    //scissors beats paper
    if(playerSelection == "scissors" && computerSelection == "paper"){
        playerDotContainer.appendChild(winDot());
        playerWin++
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerWin++
        compDotContainer.appendChild(winDot());
    }
  
    //Update Player Win Totals
    playerWinContainer.textContent = playerWin.toString();
    computerWinContainer.textContent = computerWin.toString();

    //Check Win Max
    if(playerWin >= 5){
    modalTitle.textContent = "You Win!"
    toggleModal();
    
    }else if (computerWin >= 5){
    modalTitle.textContent = "Game Over"
    toggleModal();
    
    }
}

