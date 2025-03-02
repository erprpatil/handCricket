let score = 0;

let scoreboard = [];

const run1Button = document.querySelector(".js-1-run");

run1Button.addEventListener("click", () => {
  console.log("1 Run");
  score = 1;
  addScore();
  console.log(scoreboard);
});

function addScore(){
    scoreboard.push(score);
}

function playComputerMove (){
}