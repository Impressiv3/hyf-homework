/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░██░██░███░██░▄▄▄████░██░██░▄▄▄░██░▄▀▄░██░▄▄▄██░███░██░▄▄▄░██░▄▄▀██░█▀▄
██░▄▄░██▄▀▀▀▄██░▄▄█████░▄▄░██░███░██░█░█░██░▄▄▄██░█░█░██░███░██░▀▀▄██░▄▀█
██░██░████░████░███████░██░██░▀▀▀░██░███░██░▀▀▀██▄▀▄▀▄██░▀▀▀░██░██░██░██░ */

//      JAVASCRIPT 2 - WEEK 2     //
//#region START-----------[ TASK 1 ] Doubling of number------------------

let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter((num) => num % 2 !== 0).map((number) => number * 2);
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

let bestMovies = movies.filter((movie) => movie.rating > 6).map((movie) => movie.rating);
console.log(bestMovies);

//_______________________________________________________________________

// 6: Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin.
const wordsToLookFor = ["Surfer", "Alien", "Benjamin"];

let numberOfMoviesContaining = movies.filter((movie) =>
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
      return total;
    }
  });

console.log(averageMovieRating);

//_______________________________________________________________________

// 9: Count the total number of Good, Average and Bad movies using reduce.

let reduceMe = movies.reduce(
  function (accumulator, currentItem) {
    if (currentItem.rating >= 7) accumulator.goodMovies += 1;
    if (currentItem.rating >= 4 && currentItem.rating < 7) accumulator.averageMovies += 1;
    if (currentItem.rating < 4) accumulator.badMovies += 1;
    return accumulator;
  },
  { goodMovies: 0, averageMovies: 0, badMovies: 0 },
);

console.log(reduceMe);

//_______________________________________________________________________

////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 2 ] Working with movies-----------------

//#region START-------[ TASK 3 ] HYFBaY - Filtered products--------------
const listOfAvailableProducts = getAvailableProducts();
const list_all_products = document.getElementById("list-all-products");

/* function dislayProductList(productList) {
  productList.forEach((product) => {
    let item = document.createElement("LI");
    item.className = "item";
    item.id = "item";
    list_all_products.appendChild("item");

    let item_list = document.createElement("UL");
    item_list.className = "item-list";
    item_list.id = "item-list";
    item.appendChild(item_list);

    let item_list_item = document.createElement("LI");
    item-list-item.className = "item-list-item";
    item-list-item.id = "item-list-item";
    item-list-item.innerHTML = product.name;
    item_list.appendChild(item-list-item);
  });
} */

function displayProductList(productsList) {
  productsList.forEach((product) => {
    createHtmlList(product);
  });
}

function createHtmlList(itemToCreate) {
  const item = document.createElement("LI");
  item.classList.add("item");
  item.id = "item";
  list_all_products.appendChild(item);

  const item_list = document.createElement("UL");
  item_list.classList.add("item-list");
  item_list.id = "item-list";
  item.appendChild(item_list);

  let productName = document.createElement("LI");
  productName.classList.add("item-list-item");
  productName.id = "item-list-item";
  productName.innerHTML = `${itemToCreate.name}`;
  item_list.appendChild(productName);

  let productPrice = document.createElement("LI");
  productPrice.classList.add("item-list-item");
  productPrice.id = "item-list-item";
  productPrice.innerHTML = `$ ${itemToCreate.price}`;
  item_list.appendChild(productPrice);

  let productRating = document.createElement("LI");
  productRating.classList.add("item-list-item");
  productRating.id = "item-list-item";
  let starString = "☆";
  productRating.innerHTML = `${starString.repeat(itemToCreate.rating)}`;
  item_list.appendChild(productRating);
}

displayProductList(listOfAvailableProducts);

/////////////////////////////////////////////////////////////////////////
//#endregion END------[ TASK 3 ] HYFBaY - Filtered products--------------
