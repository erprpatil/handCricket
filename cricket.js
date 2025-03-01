let score = {
  player: 0,
  computer: 0,
};

let scoreboard = [];

const run1Button = document.querySelector(".js-1-run");

run1Button.addEventListener("click", () => {
  console.log("1 Run");
  score.player = 1;
  addScore();
  console.log(scoreboard);
});

function addScore(){
    scoreboard.push(score);
}
