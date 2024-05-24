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
  let cpuObj = Math.floor(Math.random() * 3);
  if (cpuObj === 1) {
    let object = "rock";
    console.log(`Cpu chose: ${object}`);
    alert("*********************");
    alert("Analyzing Data...");
  } else if (cpuObj === 2) {
    let object = "paper";
    console.log(`Cpu chose: ${object}`);
    alert("*********************");
    alert("Analyzing Data...");
  } else if (cpuObj === 1) {
    let object = "scissors";
    console.log(`Cpu chose: ${object}`);
    console.log("*********************");
    alert("Analyzing Data...");
  }
  return cpuObj;
}
let humanScore = 0;
let cpuScore = 0;
function playRound(humanChoice, cpuChoice) {
  if (humanChoice == cpuChoice) {
    console.log("It's a tie!");
    alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
  } else if (
    (humanChoice === "rock" && cpuChoice === "paper") ||
    (humanChoice === "paper" && cpuChoice === "scissors") ||
    (humanChoice === "scissors" && cpuChoice === "rock")
  ) {
    cpuScore++;
    console.log(`You lose!`);
    alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
  } else if (
    (humanChoice === "paper" && cpuChoice === "rock") ||
    (humanChoice === "scissors" && cpuChoice === "paper") ||
    (humanChoice === "rock" && cpuChoice === "scissors")
  ) {
    humanScore++;
    console.log("You win!");
    alert(`Cpu score: ${cpuScore} Your score: ${humanScore}`);
  }
  return humanChoice, cpuChoice;
}
const humanSelector = getHumanChoice();
const cpuSelector = getComputerChoice();
playRound(humanSelector, cpuSelector);
