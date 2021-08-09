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

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let shortestWord = '';
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
console.log(shortestWord);

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
