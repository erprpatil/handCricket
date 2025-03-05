let runs;
let computerMove;
let scoreboard = [];

// For button 1

const run1Button = document.querySelector(".js-1-run");

run1Button.addEventListener("click", () => {
  runs = 1;
  console.log(`${runs} Run`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

// For button 2
const run2Button = document.querySelector(".js-2-run");

run2Button.addEventListener("click", () => {
  runs = 2;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

// For button 3
const run3Button = document.querySelector(".js-3-run");

run3Button.addEventListener("click", () => {
  runs = 3;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

// For button 4
const run4Button = document.querySelector(".js-4-run");

run4Button.addEventListener("click", () => {
  runs = 4;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

// For button 6
const run6Button = document.querySelector(".js-6-run");

run6Button.addEventListener("click", () => {
  runs = 6;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

// Add html element with each ball




// -------FUNCTIONS------

function addScore() {
  scoreboard.push(runs);
}

function playComputerMove() {
  let randNum = Math.floor(Math.random() * 6 + 1);

  if (randNum === 5) {
    //5 is no ball
    computerMove = 0;
  } else {
    computerMove = randNum;
  }
  console.log(`Computer move is: ${computerMove}`);
  return computerMove;
}

function throwBall(runs, computerMove) {
  if (runs === computerMove) {
    console.log("You are Out!!!!");
    runs = "Wkt";
    scoreboard.push(runs);
  } else if (computerMove === 0) {
    console.log("No Ball");
    runs = 1;
    scoreboard.push(runs);
  } else {
    scoreboard.push(runs);
  }
}

/*
Next steps-
JSON save score

*/
