//List choices for the computer.
const messageBox = document.getElementById("comp-message");

const computerOptions = ["rock", "paper", "scissors"];

const preRoundInsults = [
  "dick teeth.",
  "piss mouth.",
  "fart balls.",
  "fart face."
];

const computerAlmostWinning = [
  "hahahahaha. What the actual fuck. You are trash. 2 v 0 lol. Fuck you.",
  "I just need one more bitch. You are fucking trash lol."
];

const drawMessages = [
  "you stupid fuck. You want another go?.. try me dick head.", 
  "you dumb fuck. Try again.", 
  "fuck head. What are you doing lol!",
  "shit for brains. Go again.",
  "whoopdifuckingdoodle. Try again."
];


const playerAlmostWinning = [
  "... ok so you're pretty close. How about you chill and we be friends and forget this whole thing?",
  "... oh shit big fucking guy over here. Whatever get fucked."

];

const finalRound = [
  "so now we're even and it's the last round. I'm probably going to cheat so you should maybe just fuck off now?",
  "and this is the last round. Look we both did pretty well but I'm a computer so if you win I'm probably going to hack your credit cards and purchase a shit tonne of porn and get it sent to your work or some shit so maybe you should drop this and go play Wordle or croquet or whatever the fuck humans do before shit gets serious."
];

const computerWinMessages = [ 
  "I win fuck face. Why don't you go try to eat a pile of steaming horse shit. 💩 💩 💩 💩 💩", 
  "💩 💩 Game over, I win dick head! 💩 💩",
  "I win you stupid fuck 💩",
  "🖕 I win. Eat shit. 💩",
  "You loose cock head 8===D~~~",
  "You lose dick hole!!!",
  "You lose shit for brains 💩 🧠 💩 🧠 💩",
  "🖕🖕🖕 I win, get fucked.🖕🖕🖕",
  "Fuck you I win, get fucked. GG EZ EZ EZ EZ 🖕🖕🖕",
  "I win, fuck off.🖕 💩 🖕 💩 "
];

const computerInsults = [ 
  "... fuckadoodle doo.", 
  "you stupid pile of mouth breathing pig piss.", 
  "you barely concious cunt faced fuck turd.", 
  "so how about you go get fucked you fucking cock faced, fuck nut, prick fuck.",
  "you mother fucking cock cunt.",
  "fuck nuts.",
  "cock head.",
  "cock face.",
  "you dumb fucking dog ass cunt.",
  "you fucking shit cunt.",
  "dick hole.",
  "you steaming bag of shit covered ball sacks.",
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
    displayText("💩 It's a draw "+computerRandomChoice(drawMessages));
    displayText(playedMessage);
    displayRound(roundNumber, playerSelection, computerSelection);
  } else if (
      (play === "rock") && (computerSelection === "scissors") ||
      (play === "paper") && (computerSelection === "rock") ||
      (play === "scissors") && (computerSelection === "paper")
      ) {
    ++playerScore;
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`)  ;
    displayText("🤬 You win round "+roundNumber+" "+computerRandomChoice(chooseMessageArray()));
    displayText(playedMessage);
    displayRound(roundNumber, playerSelection, computerSelection);
  } else {
    ++computerScore;
    roundNumber++;
    messageBox.innerHTML = "<br>" + messageBox.innerHTML;
    displayText(`Your score is ${playerScore}. My score is ${computerScore}.`);
    displayText("🤣 You lose round "+roundNumber+" "+computerRandomChoice(chooseMessageArray()));
    displayText(playedMessage);
    displayRound(roundNumber, playerSelection, computerSelection);
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
    messageBox.innerHTML = "<span style='color:#50fa7b;'>Ok "+computerRandomChoice(chooseMessageArray())+" First to 3, let's go.</span>";
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
    '<span style="color:#ff79c6;">Click 🖕 to start again...</span>' + "<br><br>" + messageBox.innerHTML;
  computerScore = 0;
  playerScore = 0;
  roundNumber = -1;
  playRock.innerHTML = "🖕";
  playPaper.innerHTML = "🖕";
  playScissors.innerHTML = "🖕";
};

//Choose which array to pick a message from based on the current score.
//Note that draw rounds don't use this logic.
function chooseMessageArray() {
  if (computerScore === 0 && playerScore === 0 && roundNumber === -1) {
    return preRoundInsults
  } else if (playerScore === 2 && computerScore < 2) { 
    return playerAlmostWinning
  } else if (playerScore === 0 && computerScore === 2) { 
    return computerAlmostWinning
  } else if (playerScore === 2 && computerScore === 2) { 
    return finalRound
  } else {
    return computerInsults
  };
};

function displayText (message) {
  messageBox.innerHTML = message  + "<br>" +  messageBox.innerHTML;
};

function displayRound (roundNumber, playerSelection, computerSelection) {
  messageBox.innerHTML = "<span style='color:#8be9fd;'>Round " + roundNumber +
   displaySymbolsPlayed (playerSelection,computerSelection) +
   "</span>" + "<br>" + messageBox.innerHTML;
}

//Convert the choice to an emoji and output a string to display next to each round number
function displaySymbolsPlayed (player, computer) {
  let playerSymbol;
  let computerSymbol;
  switch (player) {
    case "rock":
      playerSymbol = "👊"
      break;
    case "paper":
      playerSymbol = "✋"
      break;
    case "scissors":
      playerSymbol = "✌️"
      break;
  }
  switch (computer) {
    case "rock":
      computerSymbol = "👊"
      break;
    case "paper":
      computerSymbol = "✋"
      break;
    case "scissors":
      computerSymbol = "✌️"
      break;
  }
  return ": " + playerSymbol +" vs "+ computerSymbol;
}


