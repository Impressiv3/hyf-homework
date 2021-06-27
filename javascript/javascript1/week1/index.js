let yearOfBirth = 1983;
let yearFuture = 2023;
let age = yearFuture - yearOfBirth;
let result = (`You will be ${age} years old in ${yearFuture}.`);

console.log(result);

/* DISPLAY ON INDEX.HTML */
let subAnswerText = (`( if you were born in ${yearOfBirth} )`);
let answerText = document.querySelector('.answer-text');
answerText.innerHTML = result;