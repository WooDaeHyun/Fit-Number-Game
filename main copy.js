//랜덤 숫자를 만든다
//제출 버튼을 만든다 ->  버튼 클릭시,
//입력받은 값이 랜덤 숫자와 일치하는지 확인한다.

//다르다면 up or down Result 표시 부분이 바뀌어야 함
//카운터의 숫자가 줄어야함,(count가 5가 되면 더 이상 버튼이 눌리면 안돼 button.disabled = true);

//리셋 버튼을 만든다.
//리셋을 누르면 카운터가 다시 5로 바뀌고, 메세지도 원래대로 바뀌어야 함

let randomNum;
let count = 5;
let numTemp = [];

const makeRandomNum = () => {
  randomNum = parseInt(Math.random() * 100) + 1;
  console.log("CORRECT NUMBER : ", randomNum);
};
makeRandomNum();

const $showResult = document.querySelector("#showResult");
const $submitButton = document.querySelector("#submitButton");
const $input = document.querySelector("#userInput");
const $chance = document.querySelector("#remainChance");
const $reset = document.querySelector("#resetButton");
const $check = document.querySelector("#check");

$submitButton.addEventListener("click", play);
$reset.addEventListener("click", reset);
$input.addEventListener("focus", () => {
  $input.value = "";
});

$chance.innerHTML = `REMAIN CHANCE : ${count}`;
$check.innerHTML = `NUMBERS YOU PUT : ${numTemp}`;

function play() {
  const inputValue = $input.value;
  if (inputValue > 100 || inputValue < 1) {
    $showResult.textContent = "PLEASE PUT NUMBER 1~100";
    return;
  }

  if (numTemp.includes(inputValue)) {
    $showResult.textContent =
      "YOU ALREADY PUT THIS NUMBER! PLEASE PUT ANOTHER NUMBER!";
    return;
  }
  numTemp.push(inputValue);
  $check.innerHTML = `NUMBERS YOU PUT : ${numTemp}`;

  if (inputValue < randomNum) {
    count--;
    $showResult.textContent = "UP!";
    $chance.innerHTML = `REMAIN CHANCE : ${count}`;
  } else if (inputValue > randomNum) {
    count--;
    $showResult.textContent = "DOWN!";
    $chance.innerHTML = `REMAIN CHANCE : ${count}`;
  } else {
    $showResult.textContent = "*** CORRECT! YOU WIN ***";
    $submitButton.disabled = true;
    return;
  }

  if (!count) {
    $showResult.textContent = "GAME OVER!";
    $submitButton.disabled = true;
  }
}

function reset() {
  $submitButton.disabled = false;
  count = 5;
  $chance.innerHTML = `REMAIN CHANCE : ${count}`;
  $showResult.textContent = "SHOWING RESULT";
  makeRandomNum();
  numTemp = [];
  $check.innerHTML = `NUMBERS YOU PUT : ${numTemp}`;
}
