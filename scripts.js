//List choices for the computer
const computerOptions = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

//Ask the computer to make a selection at random from the given coices
function computerPlay () {
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
};

function playRound(playerSelection, computerSelection) {
  let play = playerSelection.toLowerCase();
  const drawMessage = `You played ${playerSelection} and I played ${computerSelection}. It's a draw`;
  const winMessage = `You played ${playerSelection} and I played ${computerSelection}. You win! :(`;
  const loseMessage = `You played ${playerSelection} and I played ${computerSelection}. I win! :D`;
  if (play === computerSelection) {
    console.log(drawMessage);
    return drawMessage;
  } else if (play === "rock") {
    switch(computerSelection) {
      case "paper":
        console.log(loseMessage);
        return loseMessage;
      case "scissors":
        console.log(winMessage);
        return winMessage;
    }
  } else if (play === "paper") {
    switch(computerSelection) {
      case "rock":
        console.log(winMessage);
        return winMessage;
      case "scissors":
        console.log(loseMessage);
        return loseMessage;
    }
  } else if (play === "scissors") {
    switch(computerSelection) {
      case "rock":
        console.log(loseMessage);
        return loseMessage;
      case "paper":
        console.log(winMessage);
        return winMessage;
    }
  }
  else {
    return "I don't know what you're playin at...";
  }
}

const playRock = document.getElementById("play-rock");
const playPaper = document.getElementById("play-paper");
const playScissors = document.getElementById("play-scissors");


playRock.addEventListener('click', () => {
  playRound("rock",computerPlay());}
)

playPaper.addEventListener('click', () => {
  playRound("paper",computerPlay());}
)

playScissors.addEventListener('click', () => {
  playRound("scissors",computerPlay());}
)