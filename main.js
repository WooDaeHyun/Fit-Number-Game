let computerNum = 0;
const $playButton = document.querySelector("#play-button");
const $userInput = document.querySelector("#user-Input");
const $resultArea = document.querySelector("#result-area");
const $resetButton = document.querySelector("#reset-button");
const $chances = document.querySelector("#chances");
let chances = 5;
let gameOver = false;

$chances.innerHTML = `Remaining chance : ${chances}`;
$playButton.addEventListener("click", play);
$resetButton.addEventListener("click", reset);
$userInput.addEventListener("focus", () => {
  $userInput.value = "";
});

function pickRandomNum() {
  computerNum = parseInt(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

let tempUserValue = [];
function play() {
  let userValue = $userInput.value;

  if (userValue > 100 || userValue < 1) {
    $resultArea.textContent = "Please! put number 1~100!";
    return;
  }

  if (tempUserValue.includes(userValue)) {
    $resultArea.textContent =
      "This number was already put! please put another number";
    return;
  }
  tempUserValue.push(userValue);

  chances--;
  $chances.innerHTML = `Remaining chance : ${chances}`;
  if (userValue < computerNum) {
    $resultArea.textContent = "UP!!!!";
  } else if (userValue > computerNum) {
    $resultArea.textContent = "DOWN!!!!";
  } else if (userValue == computerNum) {
    $resultArea.textContent = "CORRECT!!!! YOU WIN";
    $playButton.disabled = true;
    return;
  }

  if (!chances) {
    gameOver = true;
  }

  if (gameOver) {
    $playButton.disabled = true;
    $resultArea.textContent = "Game Over";
  }
}

function reset() {
  // user input창이 깨끗하게 정리되고
  $userInput.value = "";
  //새로운 번호가 생성되고
  pickRandomNum();
  $resultArea.textContent = "Show result here";
  gameOver = false;
  chances = 5;
  $chances.innerHTML = `Remaining chance : ${chances}`;
  $playButton.disabled = false;
  tempUserValue = [];
}

pickRandomNum();
