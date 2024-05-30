const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.createElement("h3");
const objMessage = document.createElement("h3");
const message2 = document.createElement("h3");
const div = document.querySelector("div");
const cpuMessage = document.createElement("h3");
const cpuMessage2 = document.createElement("h3");
const p = document.querySelector("#start");
rock.textContent = "🪨";
paper.textContent = "📃";
scissors.textContent = "✂️";

rock.addEventListener("click", () => {
  objMessage.innerText = "You chose rock!";
  playRound("rock", getComputerChoice());
  p.textContent = "Choose again!";
}
);
paper.addEventListener("click", () => {
  objMessage.innerText = "You chose paper!";
  playRound("paper", getComputerChoice()); 
  p.textContent = "Choose again!";
});
scissors.addEventListener("click", () =>{
  objMessage.innerText = "You chose scissors!";
  playRound("scissors", getComputerChoice()); 
  p.textContent = "Choose again!";
});


function getComputerChoice() {
  let object = null;
  let cpuObject = Math.floor(Math.random() * 3);
  if (cpuObject === 0) {
    object = "rock";
    cpuMessage.textContent = `Cpu chose: ${object}!`;
    cpuMessage2.textContent = "Analyzing Data...";
  } else if (cpuObject === 1) {
    object = "paper";
    cpuMessage.textContent = `Cpu chose: ${object}!`;
    cpuMessage2.textContent = "Analyzing Data...";
  } else if (cpuObject === 2) {
    object = "scissors";
    cpuMessage.textContent = `Cpu chose: ${object}!`;
    cpuMessage2.textContent = "Analyzing Data...";
  }
  return object;
}

let humanScore = 0;
let cpuScore = 0;

  function playRound(humanChoice, cpuChoice){
    if (
      (humanChoice === "rock" && cpuChoice === "paper") ||
      (humanChoice === "paper" && cpuChoice === "scissors") ||
      (humanChoice === "scissors" && cpuChoice === "rock")
    ) {
      cpuScore++;
      message.textContent = "You lose!"
      message2.textContent = `Your score: ${humanScore} and Cpu score: ${cpuScore}`;
    } else if (
      (humanChoice === "paper" && cpuChoice === "rock") ||
      (humanChoice === "scissors" && cpuChoice === "paper") ||
      (humanChoice === "rock" && cpuChoice === "scissors")
    ) {
      humanScore++;
      message.textContent = "You win!";
      message2.textContent = `Your score: ${humanScore} and Cpu score: ${cpuScore}`;
    } else if (humanChoice === "rock" && cpuChoice === "rock" ||
               humanChoice === "paper" && cpuChoice === "paper" ||
               humanChoice === "scissors" && cpuChoice === "scissors")
    {
      message.textContent = "Draw!!"
      message2.textContent = `Your score: ${humanScore} and Cpu score: ${cpuScore}`;
    }
    if(humanScore === 5){
      message.textContent = "YOU WON!";
      message2.textContent = "";
      humanScore = 0;
      cpuScore = 0;
    }
    else if(cpuScore === 5){
      message.textContent = "CPU WINS!";
      message2.textContent = "";
      humanScore = 0;
      cpuScore = 0;
    }
}
  div.appendChild(p)
  div.appendChild(rock);
  div.appendChild(paper);
  div.appendChild(scissors);

  div.appendChild(cpuMessage);
  div.appendChild(objMessage);
  div.appendChild(cpuMessage2);
  div.appendChild(message);
  div.appendChild(message2);
