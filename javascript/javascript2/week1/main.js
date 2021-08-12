/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░██░███░██░▄▄▄████░██░██░▄▄▄░██░▄▀▄░██░▄▄▄██░███░██░▄▄▄░██░▄▄▀██░█▀▄
██░▄▄░██▄▀▀▀▄██░▄▄█████░▄▄░██░███░██░█░█░██░▄▄▄██░█░█░██░███░██░▀▀▄██░▄▀█
██░██░████░████░███████░██░██░▀▀▀░██░███░██░▀▀▀██▄▀▄▀▄██░▀▀▀░██░██░██░██░
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
_________________________ 
|  _____________________  |
| | JAVASCRIPT2 - WEEK1 | |
| |_____________________| |
|_________________________|                                              */
console.log("====================[  Script loaded   ]====================");
//#region TASK 1 - START
/*================[ TASK 1. - Find the shortest word ]================== */
// Write a function that finds the shortest word of an array of words.

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWord = "";
let initialShortestWordLength = 0;
function findShortestWord(wordsToCheck) {
  shortestWord = wordsToCheck.reduce((currentWord, shortest) => {
    if (currentWord.length < shortest.length) {
      return currentWord;
    }
    return shortest;
  }, initialShortestWordLength);
}

findShortestWord(danishWords);
console.log(`The sortest word is : ${shortestWord}`);

/*=======================================================================*/
//#endregion TASK 1 - END

//#region TASK 2 - START
/*===========[ TASK 2. - Find and count the Danish letters ]============ */

// Find the individual and the total number of Danish letters in a string.

const danishString1 = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
const danishLetters = ["æ", "ø", "å"];
let danishLetterCount = {
  total: 0,
  æ: 0,
  ø: 0,
  å: 0,
};

function danishLetterCounter(stringToCheck) {
  // Reset counter to default values
  for (const key in danishLetterCount) {
    `${key}: ${danishLetterCount[key] === 0}`;
  }
  // Check how many times we can split the string @ given character
  danishLetters.forEach((danishLetter) => {
    let amountToIncreaseWith = 0;
    amountToIncreaseWith = stringToCheck.split(danishLetter).length - 1;
    danishLetterCount[danishLetter] += amountToIncreaseWith;
    danishLetterCount["total"] += amountToIncreaseWith;
  });
  console.log(`Sentence to check : ${stringToCheck}`);
  for (const key in danishLetterCount) {
    console.log(`${key}: ${danishLetterCount[key]}`);
  }
}

danishLetterCounter(danishString1);
danishLetterCounter(danishString2);

/*=======================================================================*/
//#endregion TASK 2 - END

//#region TASK 3 - START
/*=============[ TASK 3. - Spirit animal name generator ]=============== */

////////////////////////// VARIABLES  ////////////////////////////////////

let userName = "";
const firstAnimalName = [
  "sick",
  "bored",
  "fantastic",
  "wild",
  "incredible",
  "unbeliveable",
  "stupid",
  "crazy",
];
const secondAnimalName = [
  "Wolf",
  "Caterpillar",
  "Alpaca",
  "Sloth",
  "Monkey",
  "Bonobo",
  "Snake",
  "Pig",
  "Dog",
];
const spiritAnimalNameOutput = document.querySelector("#spiritAnimalNameOutput");

const submitButton = document.querySelector("#submit");
const realName = document.querySelector("#realName");
const radioButton1 = document.querySelector("#radio1");
const radioButton2 = document.querySelector("#radio2");
const radioButton3 = document.querySelector("#radio3");

//////////////////// EVENT LISTENERS  ////////////////////////////////////

radioButton1.addEventListener("change", addOnClickEventListenerToElement);
radioButton2.addEventListener("change", addOnMouseEnterEventListenerToElement);
radioButton3.addEventListener("change", addOnInputEventListenerToElement);

//////////////////// UTILITY FUNCTIONS  //////////////////////////////////

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNames() {
  return `${firstAnimalName[randomNumber(1, firstAnimalName.length - 1)]} ${
    secondAnimalName[randomNumber(1, secondAnimalName.length - 1)]
  }`;
}

function showAnimalName(userName) {
  return userName + " : The " + `${getRandomNames()}`;
}

function addOnClickEventListenerToElement() {
  submitButton.addEventListener("click", submitForm);
  realName.removeEventListener("mouseenter", submitForm);
  realName.removeEventListener("input", submitForm);
}

function addOnMouseEnterEventListenerToElement() {
  submitButton.removeEventListener("click", submitForm);
  realName.addEventListener("mouseenter", submitForm);
  realName.removeEventListener("input", submitForm);
}

function addOnInputEventListenerToElement() {
  submitButton.removeEventListener("click", submitForm);
  realName.removeEventListener("mouseenter", submitForm);
  realName.addEventListener("input", submitForm);
}

function submitForm() {
  userName = realName.value;
  !userName
    ? (spiritAnimalNameOutput.innerHTML = "Please enter a name first...")
    : (spiritAnimalNameOutput.innerHTML = showAnimalName(userName));
}

addOnClickEventListenerToElement();

/*=======================================================================*/
//#endregion TASK 3 - END

//#region TASK 4 - START
/*========================[ TASK 4. - HYFBay ]========================== */

const products = getAvailableProducts();
const generateProductListButton = document.querySelector("#generateProductListButton");
const productList = document.querySelector("#product-list");

generateProductListButton.addEventListener("click", generateProductList);

function createHtmlListItem(itemToCreate) {
  const productWrapper = document.createElement("li");
  productWrapper.classList.add("product-wrapper");
  productList.appendChild(productWrapper);

  let productName = document.createElement("li");
  productName.classList.add("product-name");
  productName.innerText = `${itemToCreate.name}`;
  productWrapper.appendChild(productName);

  let productPrice = document.createElement("li");
  productPrice.classList.add("product-price");
  productPrice.innerText = `Price : $${itemToCreate.price}`;
  productWrapper.appendChild(productPrice);

  let productRating = document.createElement("li");
  productRating.classList.add("product-rating");
  const starString = "☆";
  productRating.innerText = `Rating : ${starString.repeat(itemToCreate.rating)}`;
  productWrapper.appendChild(productRating);
}

function generateProductList() {
  products.forEach((product) => {
    createHtmlListItem(product);
  });
}

/*=======================================================================*/
//#endregion TASK 4 - END
