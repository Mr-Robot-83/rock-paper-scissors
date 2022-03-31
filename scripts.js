//List choices for the computer.
const messageBox = document.getElementById("comp-message");

const computerOptions = ["rock", "paper", "scissors"];
const computerWinMessages = [ 
  "I win fuck face. Eat a dick.💩 💩 💩 💩 💩", 
  "💩💩 Game over, I win dick head! 💩💩",
  "I win you stupid fuck 💩",
  "🖕 I win. Eat shit. 💩",
  "You loose cock head 8===D~~~",
  "🍆 🍆  You lose dick hole. Go fuck yourself for fuck's sake. 🍆 🍆",
  "You lose shit for brains 💩 🧠 💩 🧠 💩",
  "🖕🖕🖕 I win, get fucked.🖕🖕🖕",
  "I win, fuck off.🖕 💩 🖕 💩 "
];

const computerInsults = [ 
  "fuckadoodle doo.", 
  "you ugly fucking pile of mouth breathing pig piss.", 
  "you barely concious cunt faced turd fuck.", 
  "- go get fucked you fucking cock balled cock mouth prick.",
  "you stupid fucking dumb fuck.", 
  "you dumb fuck.", 
  "fuck head.",
  "shit for brains.",
  "you mother fucking cock cunt.",
  "fuck nuts.",
  "cock head.",
  "you dumb fucking ass cunt.",
  "you fucking shit cunt.",
  "dick hole",
  "you stupid fucking cunting prick.",
  "you fucking brainless cunt."
];

//Set round number and scores. -1 is there to trigger a reset (pre-round).
let computerScore = 0;
let playerScore = 0;
let roundNumber = -1;


//Ask the computer to make a selection at random from the given coices.
function computerRandomChoice (array) {
  let computerChoice = Math.floor(Math.random() * array.length);
  return array[computerChoice];
};

//Game logic. Takes in player and computer selection, prints results and updates scores.
function playRound(playerSelection, computerSelection) {
  let play = playerSelection.toLowerCase();
  const playedMessage = `You played ${playerSelection} and I played ${computerSelection}.`;
  if (play === computerSelection) {
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`);
    displayText("💩 It's a draw "+computerRandomChoice(computerInsults));
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
    displayText("🤬 You win round "+roundNumber+" "+computerRandomChoice(computerInsults));
    displayText(playedMessage);
    displayRound(roundNumber);
  } else {
    ++computerScore;
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`);
    displayText("🤣 You lose round "+roundNumber+" "+computerRandomChoice(computerInsults));
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
    messageBox.innerHTML = "<span style='color:#50fa7b;'>Ok fuck face. First to 3, let's go.</span>";
    playRock.innerHTML = "👊";
    playPaper.innerHTML = "✋";
    playScissors.innerHTML = "✌️";
    roundNumber++
  } else {
    playRound(choice,computerRandomChoice(computerOptions));
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
    result = computerRandomChoice(computerWinMessages);
  }
  messageBox.innerHTML = '<span style="color:#50fa7b;">' + result + '</span>' + "<br>" +
                '<span style="color:#ff79c6;">Click to start again...</span>' + "<br><br>" + messageBox.innerHTML;
  computerScore = 0;
  playerScore = 0;
  roundNumber = -1;
  playRock.innerHTML = "🖕";
  playPaper.innerHTML = "🖕";
  playScissors.innerHTML = "🖕";
};

function displayText (message) {
  messageBox.innerHTML = message  + "<br>" +  messageBox.innerHTML;
};

function displayRound (roundNumber) {
  messageBox.innerHTML = "<span style='color:#8be9fd;'>Round " + roundNumber + "</span>" + "<br>" + messageBox.innerHTML;
}