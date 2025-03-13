let runs;
let computerMove;
let scoreboard = [];
let ball = 1;

// For button 1

const run1Button = document.querySelector(".js-1-run");

run1Button.addEventListener("click", () => {
  runs = 1;
  console.log(`${runs} Run`);
  playComputerMove();
  throwBall(runs, computerMove);
  updateScoardBoard(runs, computerMove);

  console.log(scoreboard);
});

// For button 2
const run2Button = document.querySelector(".js-2-run");

run2Button.addEventListener("click", () => {
  runs = 2;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);
  updateBallCounter(ball);
  updateScoardBoard(ball, runs);

  console.log(scoreboard);
});

// For button 3
const run3Button = document.querySelector(".js-3-run");

run3Button.addEventListener("click", () => {
  runs = 3;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);
  
  updateScoardBoard(runs);

  console.log(scoreboard);
});

// For button 4
const run4Button = document.querySelector(".js-4-run");

run4Button.addEventListener("click", () => {
  runs = 4;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);
  updateBallCounter(ball);
  updateScoardBoard(runs);

  console.log(scoreboard);
});

// For button 6
const run6Button = document.querySelector(".js-6-run");

run6Button.addEventListener("click", () => {
  runs = 6;
  console.log(`${runs} Runs`);
  playComputerMove();
  throwBall(runs, computerMove);
  updateScoardBoard(runs, computerMove);

  console.log(scoreboard);
});

// scoreboard function

function updateScoardBoard(runs, ball) {
  let scoreGrid = document.querySelector(".js-score-details-grid");

  //   scoreboard.forEach((run) => {
  //     scoreGrid.innerHTML = `
  //     <div> ${scorboard.indexOf(run) + 1 } </div>
  //     <div> ${runs} </div> `
  // })

  let testHtml = "";
    testHtml = `
      <div>${ball}</div>
      <div>${runs}</div>`;

    // testHtml += newScore;

  scoreGrid.innerHTML += testHtml;

  console.log(`Ball: ${ball}`);
  console.log(`Runs: ${runs}`);
}

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
  // return scoreboard;
  // return runs;
}

function updateBallCounter(ball){
  if (computerMove === 0){
    ball = 'NB';
  } else{
    ball++;
  }
  return ball;

}
/*  
Next steps-
JSON save score

*/
