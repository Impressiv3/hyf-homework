/* HYF HOMEWORK - TASK 1 - Age-ify (A future age calculator) */

const yearOfBirth = 1983;
const yearFuture = 2023;
const age = yearFuture - yearOfBirth;
const result = `You will be ${age} years old in ${yearFuture}.`;
/* or const result = ("You will be " + age + " years old in" + yearFuture + ".") */

console.log(result);

/* =======================================================================================*/

/* HYF HOMEWORK - TASK 2 - Goodboy-Oldboy (A dog age calculator) */

const dogYearOfBirth = 2000;
const dogYearFuture = 2010;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const shouldShowResultInDogYears = false;

console.log(shouldShowResultInDogYears ?
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "." :
    "Your dog will be " + `${dogYear / 7}` + " human years old in " + dogYearFuture + ".");

/* =======================================================================================*/

/* HYF HOMEWORK - TASK 3 - Housey pricey (A house price estimator) */

/* PETER'S HOUSE DATA */
let width = 8;
let depth = 10;
let height = 10;
let volumeInMeters = width * depth * height;
let gardenSizeInM2 = 100;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > 2500000) {
    console.log("Peter is paying too much for the house. He is paying: " + `${housePrice}` + " $.");
} else {
    console.log("Peter is paying too little for the house. He is paying: " + `${housePrice}` + " $.");
}

/* JULIA'S HOUSE DATA */
width = 5;
depth = 11;
height = 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > 1000000) {
    console.log("Julia is paying too much for the house. She is paying: " + `${housePrice}` + " $.");
} else {
    console.log("Julia is paying too little for the house. She is paying: " + `${housePrice}` + " $.");
}

/* =======================================================================================*/

/* HYF HOMEWORK - TASK 4 - Ez Namey (Startup name generator) */

const firstWords = ["Easy", "Awesome", "Corporate", "Elite", "Amazing", "Professional", "I-", "Something", "Best", "High"];
const secondWords = ["Corp", "INC", "Empire", "Monopoly", "Business", "GIG", "Frim", "LTD", "Unity", "Money"];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + startupName + ", contains " + startupName.length + " characters");

/* =======================================================================================*/
