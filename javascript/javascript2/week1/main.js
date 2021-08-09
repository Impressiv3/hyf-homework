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

/* console.log("Script loaded");

const products = getAvailableProducts();
console.log(products); */
/* 
let array = [1, 2, 3, 4, 5];
let initialMax = 0;
const max = array.reduce((element, max) => {
  if (element > max) {
    return element;
  }
  return max;
}, initialMax);
max; // 5 */
