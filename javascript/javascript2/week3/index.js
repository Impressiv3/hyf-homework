/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░██░███░██░▄▄▄████░██░██░▄▄▄░██░▄▀▄░██░▄▄▄██░███░██░▄▄▄░██░▄▄▀██░█▀▄
██░▄▄░██▄▀▀▀▄██░▄▄█████░▄▄░██░███░██░█░█░██░▄▄▄██░█░█░██░███░██░▀▀▄██░▄▀█
██░██░████░████░███████░██░██░▀▀▀░██░███░██░▀▀▀██▄▀▄▀▄██░▀▀▀░██░██░██░██░ */

//      JAVASCRIPT 2 - WEEK 3    //

//#region START-----------[ TASK 1 ] Warmup------------------

// 1. Log out the text Called 2.5 seconds after the script is loaded.
function displayMessage(message) {
  console.log(`%c ${message}`, "color: blue; font-size: 22px"); // Styled console.log
}

window.addEventListener("load", (event) => {
  setTimeout(() => displayMessage("Called"), 2500);
});

// 2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

const aStringToLog = "This is a string to log out.";
const delayTime = "4000";

function delayedLogout(delay, stringToLog) {
  setTimeout(() => displayMessage(aStringToLog), delayTime);
}

delayedLogout(aStringToLog, delayTime);

/////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 1 ] Warmup------------------
