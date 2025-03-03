let runs;
let computerMove;
let scoreboard = [];

const run1Button = document.querySelector(".js-1-run");

run1Button.addEventListener("click", () => {
  runs = 1;
  console.log(`${runs}Run`);
  playComputerMove();
  throwBall(runs, computerMove);

  console.log(scoreboard);
});

function addScore(){
    scoreboard.push(runs);
}



function playComputerMove (){

  let randNum = Math.floor(Math.random() * 6 + 1);

  if(randNum === 5){ //5 is no ball
    computerMove = 0;
  } else{
    computerMove = randNum;
  }
  console.log(`Computer move is: ${computerMove}`);
  return computerMove;
}

function throwBall(runs, computerMove){ 

  if (runs === computerMove){
    console.log ('You are Out!!!!');
    runs = 'Wkt';
    scoreboard.push(runs);
  }else{
    scoreboard.push(runs);
  }
}


/*
Next steps-
For no ball, score 1.
JSON save score

*/