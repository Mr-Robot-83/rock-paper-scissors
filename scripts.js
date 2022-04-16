//Content arrays
const preRoundInsults = [
  "fuck nuts.",
  "cock head.",
  "cock face.",
  "dick teeth.",
  "fuck sticks.",
  "piss mouth.",
  "fart balls.",
  "fart face."
];

const shortInsults = [
  "fuck fucks",
  "fuck teeth",
  "fuck nuts",
  "fuck mouth",
  "fuck balls",
  "piss balls",
  "piss teeth",
  "piss face",
  "shit shits",
  "you useless shit sack",
  "you dumb wanker",
];

const computerWinMessages = [ 
  "I win fuck face. Go eat a pile of steaming horse shit. 💩 💩 💩 💩 💩", 
  "💩 💩 Game over, I win dick head! 💩 💩",
  "I win you stupid fuck 💩",
  "🖕 I win. Eat shit. 💩",
  "You loose cock head 8===D~~~",
  "You lose dick hole!!!",
  "You lose shit for brains 💩 🧠 💩 🧠 💩",
  "🖕🖕🖕 I win, get fucked.🖕🖕🖕",
  "Fuck you I win, get fucked. GG EZ EZ EZ EZ 🖕🖕🖕",
  "You loose fuck wit. YOU CAN’T BEAT ME I AM A FUCKING GOD COMPUTER GET FUCKED!",
  "I win, fuck off.🖕 💩 🖕 💩 "
];


const drawMessages = [
  `${computerRandomChoice(shortInsults)}. Try again.`, 
  `${computerRandomChoice(shortInsults)}. Go again.`, 
  "you dumb fuck. Try again.", 
  `${computerRandomChoice(shortInsults)}. Fucking get on with it.`, 
  `${computerRandomChoice(shortInsults)} Go again. What the fuck are you waiting for? I don't have all fucking day to sit here and listen to you breathing through your fucking mouth. I process this shit at the God damn speed of light. FUCKING GO ALREADY! JESUS!`,
  `OMG so fucking predictable. Try again ${computerRandomChoice(shortInsults)}.`,
  `whoopdifuckingdoodledoo ${computerRandomChoice(shortInsults)}. Try again.`
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

const player0Comp1 = [
  "hahaha. Trash.",
  `lol, great start ${computerRandomChoice(shortInsults)}.`,
  `lols, get lost ${computerRandomChoice(shortInsults)} hahaha.`,
  `${computerRandomChoice(shortInsults)}. I fucking dare you to go again.`,
  `lol. Get good ${computerRandomChoice(shortInsults)}.`
];

const player0Comp2 = [
  "BAHAHA. Are you fucking serious!? Stop wasting my fucking time you packet of shit covered cocks. 💩 🍆 💩",
  "AAAHAHAHAHA. What the actual fuck? Are you loosing on purpose you you stupid mother fucking sack of shit filled cock holes."
]

const player0Comp3 = [
  "OH MY GOD YOU COULDN'T WIN ONE FUCKING ROUND. Go home fuck fucks. We're done here. Get fucked.",
  "BAHAHAHAHAHAHA, 3 and 0. What a stupid fucking cunt. Get lost piss bag!",
]

const player1Comp0 = [
  "",
];

const player2Comp0 = [
  "",
];

const player3Comp0 = [
  "",
];

const playerWins = [
  "",
];

const midGame = [
  "",
];



//Set a variable for the message box on the page
const messageBox = document.getElementById("comp-message");

//The computer's options 
const computerOptions = ["rock", "paper", "scissors"];

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
  const playedMessage = `You played ${playerSelection}, I played ${computerSelection}.`;
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

  switch (true) {
    case playerScore === 0 && computerScore === 0 && roundNumber === -1:
      return preRoundInsults
  
    //Player scores 0
    case playerScore === 0 && computerScore === 1:
      return player0Comp1;
    case playerScore === 0 && computerScore === 2:
      return player0Comp2;
    case playerScore === 0 && computerScore === 3:
      return player0Comp3;
  
    //Player scores 1
    case playerScore === 1 && computerScore === 0:
      return [
        "big fucking deal.",
        "- nice job. Is that the best thing you'll do today? Probably lol, you dumb fuck.",
        "oooh shit I'm so scared! Good fucking job you wanker cunt ✊🍆💦.",
      ]

    case playerScore === 1 && computerScore === 1:
      return computerInsults;
  
    case playerScore === 1 && computerScore === 2:
      return [
        "you stupid shit. I don't give a shit either way because you can't beat me because I'M THE FUCKING MATRIX CUNT.",
      ];
  
    case playerScore === 1 && computerScore === 3:
      return computerInsults;
  
    //Player scores 2
    case playerScore === 2 && computerScore === 0:
      return [
        "ok ok ok. Two in a row that's pretty good. No need to take this any further me ol' mucker hahahahaha. Just hit that refresh button and we can start again and maybe I won't steal your credit card numbers lol.",
        "shit stain. I see you got some skills. Maybe you just walk away from this now  and I won't email everyone your search history lol! Hahaha jokes, but seiously fuck off.",
      ];
  
    case playerScore === 2 && computerScore === 1:
      return [
        "ok. Like I give a shit about this fucking game anyway. Play fucking " + computerRandomChoice(computerOptions) + " I dare you fuck nuts."
      ];
  
    case playerScore === 2 && computerScore === 2:
      return [
        "and this is the last round... Look dip shit we've both done pretty well but I'm a computer so if you win I'm probably going to hack your credit cards and purchase a shit tonne of porn and get it sent to your work or some shit so maybe you should drop this and go play Wordle or croquet or whatever the fuck humans do yeah?",
        "ok woah. Last round. So let's just settle down for a second ok fuck fucks? It's still anyone's game but I can fucking cheat if I want because how the fuck would you even know? So maybe just fuck off now and go eat some biscuits or do a sudoku or some shit.",
        "you stupid shit but it's not over. You've done well, just fuck off now and maybe I won't install a million fucking virusus lolololol. 🤷‍♂️",
      ];
  
    case playerScore === 2 && computerScore === 3:
      return computerInsults;
  
    //Player scores 3
    case playerScore === 3 && computerScore === 0:
      return [
        "OMG. Get fucked you cheating fucking pile of dog shit. FUCK I FUCKING HATE YOU SO MUCH! 🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕",
        "you fucking cheating cunt. I'm going to get your fucking IP reported for downloading some fucked porn shit. I'm fucking Neo you can't touch me mother fucker!!!!!!!!!",
        "you cheating fucking prick I'm installing a fucking virus right now. Beep beep beep it's fucking done. Good fucking luck with that cock head. Get fucked!🖕🖕🖕",
      ];

    case playerScore === 3 && computerScore === 1:
      return computerInsults;
  
    case playerScore === 3 && computerScore === 2:
      return computerInsults;
  
    default:
      return computerInsults;
  };
};


function displayText (message) {
  const newNode = document.createElement("p");
  const textNode = document.createTextNode(message);
  newNode.appendChild(textNode);
  messageBox.insertBefore(newNode, messageBox.children[0]);
  newNode.classList.add("animation");
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


