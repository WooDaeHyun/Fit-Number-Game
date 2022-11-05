let computerNum = 0;
let chances = 5;
let gameOver = false;
let tempUserValue = [];

const $playButton = document.querySelector("#play-button");
const $userInput = document.querySelector("#user-Input");
const $resultArea = document.querySelector("#result-area");
const $resetButton = document.querySelector("#reset-button");
const $chances = document.querySelector("#chances");
const $check = document.querySelector("#check");

$chances.innerHTML = `Remaining chance : ${chances}`;
$check.innerHTML = `Numbers you put : ${tempUserValue}`;

$playButton.addEventListener("click", play);
$resetButton.addEventListener("click", reset);
$userInput.addEventListener("focus", () => {
  $userInput.value = "";
});

function pickRandomNum() {
  computerNum = parseInt(Math.random() * 100) + 1;
  console.log("correct : ", computerNum);
}

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
  $check.innerHTML = `Numbers you put : ${tempUserValue}`;

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
  $resultArea.textContent = "Showing result";
  gameOver = false;
  chances = 5;
  $chances.innerHTML = `Remaining chance : ${chances}`;
  $playButton.disabled = false;
  tempUserValue = [];
  $check.innerHTML = `Numbers you put : ${tempUserValue}`;
}

pickRandomNum();
