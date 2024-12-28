let boxes = document.querySelectorAll(".cells");

let reset = document.querySelector(".reset-new");
let instruction = document.querySelector(".instruction");

let turn = "O";
instruction.innerText = `O's turn`;

let result = false;
let draw = false;

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "O") {
      box.style.color = 'red';
      box.innerText = "O";
      turn = "X";
    } else {
      box.style.color = 'blue';
      box.innerText = "X";
      turn = "O";
    }
    let val = winCheck();
    if (val) {
      if (turn === "O") {
        turn = "X";
      } else {
        turn = "O";
      }
    }
    box.disabled = true;
    drawCheck();
    instruct(turn);
  });
});

function winCheck() {
  for (let win of wins) {
    let cond1 = boxes[win[0]].innerText;
    let cond2 = boxes[win[1]].innerText;
    let cond3 = boxes[win[2]].innerText;
    if (cond1 != "" && cond2 != "" && cond3 != "") {
      if (cond1 === cond2 && cond2 === cond3) {
        reset.innerText = "New Game";
        result = true;
        disableGame();
        return result;
      }
    }
  }
}

const drawCheck = () => {
    for (let box of boxes) {
        if(box.innerText === "") {
            draw = false;
            break;
        }
        else {
            draw = true;
        }
    }
};

const instruct = (player) => {
  if (result) {
    instruction.innerText = `${player} won the game`;
  } else if (draw) {
    instruction.innerText = `It's a Draw!`;
    reset.innerText = "New Game";
  } else {
    instruction.innerText = `${player}'s turn`;
  }
};

const disableGame = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result = false;
  turn = "O";
  instruction.innerText = `O's turn`;
  reset.innerText = "Reset Game";
});

const musicBtn = document.querySelector(".musicBtn");
const backgroundMusic = document.getElementById("backgroundMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    backgroundMusic.pause();
    musicToggleBtn.classList.remove("fa-solid", "fa-volume-xmark");
    musicToggleBtn.classList.add("fa-solid", "fa-volume-high");
  } else {
    backgroundMusic.play();
    musicToggleBtn.classList.remove("fa-solid", "fa-volume-high");
    musicToggleBtn.classList.add("fa-solid", "fa-volume-xmark");
  }
  musicPlaying = !musicPlaying;
});
