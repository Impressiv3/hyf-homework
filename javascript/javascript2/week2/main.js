/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░██░███░██░▄▄▄████░██░██░▄▄▄░██░▄▀▄░██░▄▄▄██░███░██░▄▄▄░██░▄▄▀██░█▀▄
██░▄▄░██▄▀▀▀▄██░▄▄█████░▄▄░██░███░██░█░█░██░▄▄▄██░█░█░██░███░██░▀▀▄██░▄▀█
██░██░████░████░███████░██░██░▀▀▀░██░███░██░▀▀▀██▄▀▄▀▄██░▀▀▀░██░██░██░██░ */

//      JAVASCRIPT 2 - WEEK 2     //
//#region START-----------[ TASK 1 ] Doubling of number------------------

let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter((number) => number % 2 !== 0).map((number) => number * 2);
console.log(newNumbers);

/////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 1 ] Doubling of number------------------

//#region START-----------[ TASK 2 ] Working with movies-----------------

// 1: Create an array of movies containing the movies with a short title

let shortestMovieTitles = movies.filter((movie) => movie.title.length < 3);
console.log(shortestMovieTitles);

//_______________________________________________________________________

// 2: Create an array of movie titles with long movie titles

let longestMovieTitles = movies.filter((movie) => movie.title.length > 54);
console.log(longestMovieTitles);

//_______________________________________________________________________

// 3: Count the number of movies made between 1980-1989. ( included )

function moviesMadeBetween(fromYear, tillYear) {
  return movies.filter((movie) => movie.year >= fromYear && movie.year <= tillYear);
}
console.log(moviesMadeBetween(1980, 1981));

//_______________________________________________________________________

// 4: Create a new array that has an extra key called tag.

movies.forEach((movie) => addTag(movie));
function addTag(movie) {
  movie.rating < 4
    ? (movie.tag = "Bad")
    : movie.rating >= 7
    ? (movie.tag = "Good")
    : (movie.tag = "Average");
}

//_______________________________________________________________________

// 5: First filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.


console.log(movies.filter(movie => movie.rating > 6));

//_______________________________________________________________________

// 6: Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin.
const wordsToLookFor = ["Surfer", "Alien", "Benjamin"];


//_______________________________________________________________________
////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 2 ] Working with movies-----------------
