console.log("Hello!");

function getComputerChoice() {
  let num = Math.random();
  if (num <= 0.3 && num < 0.3) {
    let object = "Rock";
    console.log(`Cpu chose ${object}`);
  } else if (num <= 0.6 && num > 0.3) {
    let object = "Scissors";
    console.log(`Cpu chose ${object}`);
  } else if (num > 0.6) {
    let object = "Paper";
    console.log(`Cpu chose ${object}`);
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let human = prompt("Choose an object:  ");
  human.toUpperCase;
  console.log(`You chose ${human}`);
}
console.log(getHumanChoice());
