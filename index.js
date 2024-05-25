console.log("Hello!");

function getHumanChoice() {
  let humanObj = prompt(`Please enter in an object`).toLowerCase();
  if (humanObj === "rock" || humanObj === "paper" || humanObj === "scissors") {
    console.log(`You chose: ${humanObj}`);
    console.log("Waiting for computers turn...");
  } else {
    alert(`Please enter in a correct value.`);
    getHumanChoice();
  }
  return humanObj;
}

function getComputerChoice() {
  let object = null;
  let cpuObject = Math.floor(Math.random() * 3);
  if (cpuObject === 0) {
    object = "rock";
    console.log(`Cpu chose: ${object}`);
    alert("Analyzing Data...");
  } else if (cpuObject === 1) {
    object = "paper";
    console.log(`Cpu chose: ${object}`);
    console.log("Analyzing Data...");
  } else if (cpuObject === 2) {
    object = "scissors";
    console.log(`Cpu chose: ${object}`);
    console.log("Analyzing Data...");
  }
  return object;
}
let humanScore = 0;
let cpuScore = 0;

const humanSelector = getHumanChoice();
const cpuSelector = getComputerChoice();

function playGame(x) {
  function playRound(humanChoice, cpuChoice) {
    if (
      (humanChoice === "rock" && cpuChoice === "paper") ||
      (humanChoice === "paper" && cpuChoice === "scissors") ||
      (humanChoice === "scissors" && cpuChoice === "rock")
    ) {
      cpuScore++;
      alert(`You lose!`);
      alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
    } else if (
      (humanChoice === "paper" && cpuChoice === "rock") ||
      (humanChoice === "scissors" && cpuChoice === "paper") ||
      (humanChoice === "rock" && cpuChoice === "scissors")
    ) {
      humanScore++;
      alert("You win!");
      alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
    } else {
      alert(`It's a draw!!!`);
      alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
    }
    return humanScore, cpuScore;
  }
  let cpuScore = 0;
  let humanScore = 0;
  if (cpuScore === 3) {
    console.log("Cpu WINS!");
  } else if (humanScore === 3) {
    console.log("You win!");
  }
  for (let i = 1; i <= x; i++) {
    alert("Playing another round...");
    playRound(getHumanChoice(), getComputerChoice());
  }
  return humanScore, cpuScore;
}
playGame(5);
