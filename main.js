//기본 로직
//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호 < 유저번호 Down!메세지
//랜덤번호 > 유저번호 Up!메세지
//Reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 종료된다.(더 이상 추측 불가. 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 줄이지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 줄이지 않는다.

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

function pickRandomNum() {
  computerNum = parseInt(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  const userValue = $userInput.value;
  chances--;
  $chances.innerHTML = `Remaining chance : ${chances}`;
  if (userValue < computerNum) {
    $resultArea.textContent = "UP!!!!";
  } else if (userValue > computerNum) {
    $resultArea.textContent = "DOWN!!!!";
  } else {
    $resultArea.textContent = "CORRECT!!!!";
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
  $resultArea.textContent = "결과가 나온다";
  gameOver = false;
  chances = 5;
  $chances.innerHTML = `Remaining chance : ${chances}`;
  $playButton.disabled = false;
}

pickRandomNum();
