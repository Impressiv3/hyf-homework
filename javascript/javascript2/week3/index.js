/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░██░███░██░▄▄▄████░██░██░▄▄▄░██░▄▀▄░██░▄▄▄██░███░██░▄▄▄░██░▄▄▀██░█▀▄
██░▄▄░██▄▀▀▀▄██░▄▄█████░▄▄░██░███░██░█░█░██░▄▄▄██░█░█░██░███░██░▀▀▄██░▄▀█
██░██░████░████░███████░██░██░▀▀▀░██░███░██░▀▀▀██▄▀▄▀▄██░▀▀▀░██░██░██░██░ */

//      JAVASCRIPT 2 - WEEK 3    //

//#region START-----------[ TASK 1 ] Warmup------------------

/////////////////////////////////////////////////////////////////////////
// 1. Log out the text Called 2.5 seconds after the script is loaded.
/* 
window.addEventListener("load", (event) => {
  setTimeout(() => console.log("Called"), 1000);
});

/////////////////////////////////////////////////////////////////////////
// 2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

const StringToLog = "This is a string to log out.";
const delayTime = "1000";

function delayedLogout(stringToLog, delay) {
  setTimeout(() => console.log(stringToLog), delay);
}

delayedLogout(StringToLog, delayTime);

/////////////////////////////////////////////////////////////////////////
// 3. Create a button in html. When clicking this button,
// use the function you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is clicked.

const delayButton = document.getElementById("delay-button");
const locationButton = document.getElementById("location-button");

delayButton.addEventListener("click", () => {
  delayedLogout("Called after 5 seconds", delayTime);
});

/////////////////////////////////////////////////////////////////////////
// 4. Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
//  The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

let earthLogger = () => {
  console.log("earth");
};

let saturnLogger = () => {
  console.log("saturn");
};

thirdFunction = (planetLogFunction) => {
  planetLogFunction();
};

thirdFunction(earthLogger);
thirdFunction(saturnLogger);

/////////////////////////////////////////////////////////////////////////
// 5. Create a button with the text called "Log location".
// When this button is clicked the location latitude, longitude of the user
// should be logged out.

let currentLatitude;
let currentLongtitude;
let accuracy;

locationButton.addEventListener("click", () => {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createCoordinateList);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function createCoordinateList(currentPosition) {
  currentLatitude = currentPosition.coords.latitude;
  const coordinateList = document.getElementById("coordinate-list");
  const coordinateListItemLatitude = document.createElement("LI");
  coordinateListItemLatitude.innerHTML = `Your latitude : ${currentLatitude}`;
  coordinateList.appendChild(coordinateListItemLatitude);

  currentLongtitude = currentPosition.coords.longitude;
  const coordinateListItemLongtitude = document.createElement("LI");
  coordinateListItemLongtitude.innerHTML = `Your longtitude : ${currentLongtitude}`;
  coordinateList.appendChild(coordinateListItemLongtitude);

  accuracy = currentPosition.coords.accuracy;
  const coordinateListItemAccuracy = document.createElement("LI");
  coordinateListItemAccuracy.innerHTML = `The accuracy : ${accuracy}`;
  coordinateList.appendChild(coordinateListItemAccuracy);

  showGoogleMaps(currentLatitude, currentLongtitude);
}

/////////////////////////////////////////////////////////////////////////
// 6. Optional Now show that location on a map using fx the Google maps api

function showGoogleMaps(latitude, longitude) {
  const mapProp = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 18,
  };

  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/////////////////////////////////////////////////////////////////////////
// 7. Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions.

const delay1 = 2000;
const delay2 = 4000;

function printOutThis() {
  console.log("THIS !");
}

function printOutThat() {
  console.log("THAT !");
}

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}

runAfterDelay(delay1, printOutThis);
runAfterDelay(delay2, printOutThat);

/////////////////////////////////////////////////////////////////////////
// 8. Check if we have double clicked on the page.
// If a double click has been detected, log out the text: "double click!"

window.addEventListener("dblclick", checkForDoubleClick);
function checkForDoubleClick() {
  console.log("double click!");
}

/////////////////////////////////////////////////////////////////////////
// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
// logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should
// call the logFunnyJoke function that should log out a funny joke. And vice versa.

let shouldTellFunnyJoke = false;

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  console.log(
    "I asked my date to meet me at the gym today. She didn't show up. That's when I knew we weren't gonna work out.",
  );
}

function logBadJoke() {
  console.log(
    "Relationships are a lot like algebra.  Have you ever looked at your X and wondered Y?",
  );
}

jokeCreator(true, logFunnyJoke, logBadJoke);

jokeCreator(false, logFunnyJoke, logBadJoke);

/////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 1 ] Warmup------------------

//#region START---------[ TASK 2 ] Function as a variable---------------

/////////////////////////////////////////////////////////////////////////
// 1.Create funtions that are used in these different ways:
//   Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
//   Create a function as a const and try creating a function normally. Call both functions.
//   Create an object that has a key whose value is a function. Try calling this function.

const arrayOfFunctions = [firstFunction, secondFunction, lastFunction];
const objectOfFunctions = {
  functionToCall: firstFunction,
};

function firstFunction() {
  console.log("First function executed.");
}

function secondFunction() {
  console.log("Second function executed.");
}

function lastFunction() {
  console.log("Third function executed.");
}

const anotherFunction = () => console.log("This is another function.");
arrayOfFunctions.forEach((theFunctionToCall) => theFunctionToCall());
anotherFunction();
objectOfFunctions.functionToCall(); */

/////////////////////////////////////////////////////////////////////////

//#endregion END--------[ TASK 2 ] Function as a variable---------------

//#region START---------[ TASK 3 ] The fastest presser in this realm----
const timer = document.getElementById("timer");
const display = document.getElementById("display");
const startButton = document.getElementById("start-button");
const playerScreens = document.getElementById("player-screens");
const player1Screen = document.getElementById("player1-screen");
const player2Screen = document.getElementById("player2-screen");
const player1Counter = document.getElementById("player1-counter");
const player2Counter = document.getElementById("player2-counter");
let player1Score = 0;
let player2Score = 0;
const playTimeMin = 2;
const playTimeMax = 30;
let playTime = 3;
let canStartGame = true;
timer.addEventListener("input", () => {
  playTime = timer.value;

  if (playTime < playTimeMin || playTime > playTimeMax) {
    setDisplayMessage(`Play time must be between ${playTimeMin} - ${playTimeMax} seconds.`);
    canStartGame = false;
  } else {
    setDisplayMessage("Press Start To Play!");
    canStartGame = true;
  }
});
console.log(canStartGame);

startButton.addEventListener("click", startGame);

function setDisplayMessage(displayMessage) {
  display.innerHTML = displayMessage;
}

function resetGame() {
  canStartGame = true;
  playTime = 3;
  player1Score = 1;
  player2Score = 1;
  player1Counter.innerHTML = player1Score;
  player2Counter.innerHTML = player2Score;
  setDisplayMessage("Press START to play");
}

function startGame() {
  if (canStartGame) {
    attachEventListeners();
    setTimeout(() => {
      gameOver();
    }, playTime * 1000);
  }
}

function attachEventListeners() {
  window.addEventListener("keypress", keyPressHandler(e));
}

function keyPressHandler(e) {
  if (e.key === "s") {
    player1Score++;
    player1Counter.innerHTML = player1Score;
  }

  if (e.key === "l") {
    player2Score++;
    player2Counter.innerHTML = player2Score;
  }
}

function gameOver() {
  setDisplayMessage("Game OVER!");
  removeEvenlistener();
}

resetGame();

/////////////////////////////////////////////////////////////////////////
//#endregion END--------[ TASK 3 ] The fastest presser in this realm-----
