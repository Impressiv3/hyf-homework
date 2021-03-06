// WORKING VERSION CAN BE FOUND AT : http://www.infamous.one/

let player1CircleRadius = 5;
let player2CircleRadius = 5;
let player1Score = 0;
let player2Score = 0;
let countDownTime = 0;
let timer = null;
const startButton = document.getElementById("start-button");
const player1Counter = document.getElementById("player1-counter");
const player2Counter = document.getElementById("player2-counter");
const playTimeInputField = document.getElementById("gameTime");
const display = document.getElementById("display");
const player1Message = document.getElementById("player1-message");
const player2Message = document.getElementById("player2-message");
const player1Canvas = document.getElementById("player1-canvas");
const player2Canvas = document.getElementById("player2-canvas");
const player1Image = document.getElementById("player1-image");
const player2Image = document.getElementById("player2-image");
startButton.addEventListener("click", startGame);

function startGame() {
  resetGame();
  drawPlayer1Circle();
  drawPlayer2Circle();
  attachEventListeners();
  showDisplay();
  startCountDownTimer();
  showCountDownTimer();
}

function attachEventListeners() {
  window.addEventListener("keypress", keyPressHandler);
}

function keyPressHandler(e) {
  if (e.key === "s") {
    increasePlayer1CircleSize();
    player1Score++;
    player1Counter.innerHTML = "Score: " + player1Score;
  }

  if (e.key === "l") {
    increasePlayer2CircleSize();
    player2Score++;
    player2Counter.innerHTML = "Score: " + player2Score;
  }
}

function detachEvenlistener() {
  window.removeEventListener("keypress", keyPressHandler);
}

function setDisplayMessage(displayMessage) {
  display.innerHTML = displayMessage;
}

function showDisplay() {
  startButton.style.display = "none";
  display.style.display = "block";
}

function startCountDownTimer() {
  countDownTime = playTimeInputField.value;
  setTimeout(endGame, playTimeInputField.value * 1000);
}

function showCountDownTimer() {
  timer = setInterval(updateCountDownTimer, 1000);
}

function stopCountDownTimer() {
  clearInterval(timer);
}

function updateCountDownTimer() {
  countDownTime--;
  display.innerHTML = "Time left: " + countDownTime;
}

function endGame() {
  evaluateScores();
  detachEvenlistener();
  stopCountDownTimer();
  display.style.display = "none";
  startButton.style.display = "block";
  player1Canvas.style.display = "none";
  player2Canvas.style.display = "none";
}

function evaluateScores() {
  if (player1Score === player2Score) {
    player1Message.innerHTML = "DRAW";
    player2Message.innerHTML = "DRAW";
  }
  if (player1Score > player2Score) {
    player1Message.innerHTML = "YOU WON !";
    player2Message.innerHTML = "YOU LOST !";
    player1Image.style.display = "inline-block";
    player1Image.src = "winner.gif";
    player2Image.style.display = "inline-block";
    player2Image.src = "loser.gif";
  }
  if (player1Score < player2Score) {
    player1Message.innerHTML = "YOU LOST !";
    player1Image.style.display = "inline-block";
    player1Image.src = "loser.gif";
    player2Message.innerHTML = "YOU WON !";
    player2Image.style.display = "inline-block";
    player2Image.src = "winner.gif";
  }
}

function resetGame() {
  player1CircleRadius = 5;
  player2CircleRadius = 5;
  player1Score = 0;
  player2Score = 0;
  countDownTime = 0;
  player1Counter.innerHTML = "Score: " + player1Score;
  player2Counter.innerHTML = "Score: " + player2Score;
  player1Message.innerHTML = '"Press "S"';
  player2Message.innerHTML = '"Press "L"';
  player1Image.style.display = "none";
  player2Image.style.display = "none";
  player1Canvas.style.display = "block";
  player2Canvas.style.display = "block";
}

function drawPlayer1Circle() {
  if (player1Canvas.getContext) {
    const ctx1 = player1Canvas.getContext("2d");
    const X1 = player1Canvas.width / 2;
    const Y1 = player1Canvas.height / 2;

    ctx1.beginPath();
    ctx1.arc(X1, Y1, player1CircleRadius, 0, 2 * Math.PI, false);
    ctx1.lineWidth = 3;
    ctx1.strokeStyle = "#f0ff00";
    ctx1.stroke();
  }
}

function drawPlayer2Circle() {
  if (player2Canvas.getContext) {
    const ctx2 = player2Canvas.getContext("2d");
    const X2 = player2Canvas.width / 2;
    const Y2 = player2Canvas.height / 2;

    ctx2.beginPath();
    ctx2.arc(X2, Y2, player2CircleRadius, 0, 2 * Math.PI, false);
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "#f0ff00";
    ctx2.stroke();
  }
}

function increasePlayer1CircleSize() {
  player1CircleRadius = player1CircleRadius + 0.3;
  drawPlayer1Circle();
}

function increasePlayer2CircleSize() {
  player2CircleRadius = player2CircleRadius + 0.3;
  drawPlayer2Circle();
}
