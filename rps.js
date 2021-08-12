console.log("test")

const choices = ["Rock", "Paper", "Scissors"]


function playerSelection() {
    let playerChoice = prompt("Rock, Paper, Scissors");
    return playerChoice.toLowerCase()
}

function computerSelection() {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice.toLowerCase()
}

function game(playerSelection, computerSelection) {
    // tie
    if( playerSelection == computerSelection){
        console.log("It was a tie.")
    }
    // rock beats scissors
    if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        console.log("You Lose! Rock beats Scissors")
    }

    // Paper beats rock
    if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock")
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        console.log("You Lose! Paper beats Rock")
    }

    //scissors beats paper
    if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper")
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        console.log("You Loser! Scissors beats Paper")
    }

}

let playerChoice = playerSelection()
let computerChoice = computerSelection()
console.log(computerChoice)
console.log(playerChoice)
game(playerChoice, computerChoice);