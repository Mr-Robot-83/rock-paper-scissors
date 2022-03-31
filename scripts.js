//List choices for the computer.
const computerOptions = ["rock", "paper", "scissors"];
const messageBox = document.getElementById("comp-message");
const computerInsultOptions = [ 
  "I win fuck face. Eat a dick.💩 💩 💩 💩 💩", 
  "💩💩 Game over, I win dick head! 💩💩",
  "I win you stupid fuck 💩",
  "🖕 I win. Eat shit. 💩",
  "You loose cock head 8===D~~~",
  "🍆 🍆  You lose dick hole. 🍆 🍆",
  "You lose shit for brains 💩 🧠 💩 🧠 💩",
  "🖕🖕🖕 I win, get fucked.🖕🖕🖕",
  "I win, fuck off.🖕 💩 🖕 💩 "
];


//Set round number and scores. -1 is there to trigger a reset (pre-round).
let computerScore = 0;
let playerScore = 0;
let roundNumber = -1;

//Ask the computer to make a selection at random from the given coices.
function computerPlay () {
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
};

//Ask the computer to choose an insult at random from the given coices.
function computerInsult () {
  let computerChoice = Math.floor(Math.random() * computerInsultOptions.length);
  return computerInsultOptions[computerChoice];
};

//Game logic. Takes in player and computer selection, prints results and updates scores.
function playRound(playerSelection, computerSelection) {
  let play = playerSelection.toLowerCase();
  const playedMessage = `You played ${playerSelection} and I played ${computerSelection}.`;
  if (play === computerSelection) {
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`);
    displayText("It's a draw.");
    displayText(playedMessage);
    displayRound(roundNumber);
  } else if (
      (play === "rock") && (computerSelection === "scissors") ||
      (play === "paper") && (computerSelection === "rock") ||
      (play === "scissors") && (computerSelection === "paper")
      ) {
    ++playerScore;
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`)  ;
    displayText("You win! 🤬");
    displayText(playedMessage);
    displayRound(roundNumber);
  } else {
    ++computerScore;
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`);
    displayText("You lose! 🤣`");
    displayText(playedMessage);
    displayRound(roundNumber);
  }
}

const playRock = document.getElementById("play-rock");
const playPaper = document.getElementById("play-paper");
const playScissors = document.getElementById("play-scissors");

playRock.addEventListener('click', () => playerSelects("rock"));
playPaper.addEventListener('click', () => playerSelects("paper"));
playScissors.addEventListener('click', () => playerSelects("scissors"));

function playerSelects (choice) {
  if (computerScore === 0 && playerScore === 0 && roundNumber === -1) {
    messageBox.innerHTML = "<span style='color:#50fa7b;'>First to 3, let's go.</span>";
    roundNumber++
  } else {
    playRound(choice,computerPlay());
    if (computerScore === 3 || playerScore === 3) {
      gameOver () 
    }
  }
};

function gameOver () {
  let result;
  if (playerScore > computerScore) {
    result = "Game over, you win. Fuck off.";
  } else {
    //Select an insult at random from the array of insults!
    result = computerInsult();
  }
  messageBox.innerHTML = '<span style="color:#50fa7b;">' + result + '</span>' + "<br>" +
                '<span style="color:#ff79c6;">Click to start again...</span>' + "<br><br>" + messageBox.innerHTML;
  computerScore = 0;
  playerScore = 0;
  roundNumber = -1;
};

function displayText (message) {
  messageBox.innerHTML = message  + "<br>" +  messageBox.innerHTML;
};

function displayRound (roundNumber) {
  messageBox.innerHTML = "<span style='color:#8be9fd;'>Round " + roundNumber + "</span>" + "<br>" + messageBox.innerHTML;
}