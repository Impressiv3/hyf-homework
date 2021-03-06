//#region START-----------[ TASK 2 ] Working with movies-----------------

// 1: Create an array of movies containing the movies with a short title

const shortestMovieTitles = movies.filter((movie) => movie.title.length < 3);
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
/* 
movies.forEach((movie) => addTag(movie));

function addTag(movie) {
  movie.rating < 4
    ? (movie.tag = "Bad")
    : movie.rating >= 7
    ? (movie.tag = "Good")
    : (movie.tag = "Average");
}
 */

movies = movies.map((movie) => {
  if (movie.rating <= 4) {
    movie.tag = "Bad";
  }
  if (movie.rating > 4 && movie.rating < 7) {
    movie.tag = "Average";
  }
  if (movie.rating >= 7) {
    movie.tag = "Good";
  }

  return movie;
});
//_______________________________________________________________________

// 5: First filter the movies array to only contain the movies rated higher than 6.

const bestMovies = movies.filter((movie) => movie.rating > 6).map((movie) => movie.title);
console.log(bestMovies);

//_______________________________________________________________________

// 6: Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin.
const wordsToLookFor = ["Surfer", "Alien", "Benjamin"];

const numberOfMoviesContaining = movies.filter((movie) =>
  wordsToLookFor.some((element) => movie.title.toLowerCase().includes(element.toLowerCase())),
);
console.log(numberOfMoviesContaining.length);

//_______________________________________________________________________

// 7: Create an array of movies where a word in the title is duplicated.

const moviesWithDuplicates = movies.filter((movie) => checkIfStringHasDuplicates(movie.title));

function checkIfStringHasDuplicates(stringToCheck) {
  let checkedString = stringToCheck.toLowerCase().split(" ");
  let uniqueString = new Set(checkedString);

  if (uniqueString.size != checkedString.length) {
    return true;
  } else {
    return false;
  }
}

console.log(moviesWithDuplicates);

//_______________________________________________________________________

// 8: Calculate the average rating of all the movies using reduce.

const averageMovieRating = movies
  .map((movie) => movie.rating)
  .reduce((total, next, index, array) => {
    total += next;

    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total.toFixed(2);
    }
  });

console.log(averageMovieRating);

//_______________________________________________________________________

// 9: Count the total number of Good, Average and Bad movies using reduce.

const reduceMe = movies.reduce(
  function (accumulator, currentItem) {
    if (currentItem.rating >= 7) accumulator.goodMovies += 1;
    if (currentItem.rating >= 4 && currentItem.rating < 7) accumulator.averageMovies += 1;
    if (currentItem.rating < 4) accumulator.badMovies += 1;
    return accumulator;
  },
  {
    goodMovies: 0,
    averageMovies: 0,
    badMovies: 0,
  },
);

console.log(reduceMe);

//_______________________________________________________________________

////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 2 ] Working with movies-----------------
