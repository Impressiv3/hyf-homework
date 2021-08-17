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

// VARIABLES

const listOfAvailableProducts = getAvailableProducts();
const originalList = listOfAvailableProducts;
let currentList = listOfAvailableProducts;
const list_all_products = document.getElementById("list-all-products");
const searchByName = document.getElementById("searchByName");
const priceSlider = document.getElementById("price-slider");
const sortBy = document.getElementById("sortBy");
const priceSliderValue = document.getElementById("price-slider-value");
const resetButton = document.getElementById("reset-button");

// Event listeners

searchByName.addEventListener("input", (event) => {
  function convertToLowerCase(itemName) {
    return itemName.toLowerCase();
  }

  currentList = listOfAvailableProducts.filter((item) =>
    convertToLowerCase(item.name).startsWith(event.target.value.toLowerCase()),
  );

  displayProductList(currentList);
});

priceSlider.addEventListener("input", (event) => {
  currentList = listOfAvailableProducts.filter((item) => item.price <= event.target.value);
  priceSliderValue.innerText = `0 - ${event.target.value}`;
  displayProductList(currentList);
});

sortBy.addEventListener("input", (event) => {
  switch (event.target.value) {
    case "cheap":
      console.log("cheap");
      currentList = currentList.sortBy((a, b) => {
        return a.price - b.price;
      });

      break;
    case "expensive":
      console.log("ex");
      break;
    case "nameAZ":
      currentList = currentList.sort((a, b) => (a.name > b.name ? 1 : -1));
      displayProductList(currentList);
      console.log("AZ");
      break;
    case "nameZA":
      currentList = currentList.sort((a, b) => (a.name < b.name ? 1 : -1));
      displayProductList(currentList);
      console.log("ZA");
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
});

resetButton.addEventListener("click", (event) => {
  currentList = originalList;
  displayProductList(currentList);
});

// Creating HTML List Elements

function createHtmlList(itemToCreate) {
  const item = document.createElement("LI");
  item.classList.add("item");
  item.id = "item";
  list_all_products.appendChild(item);

  let item_list = document.createElement("UL");
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

  let productShipsTo = document.createElement("LI");
  productShipsTo.classList.add("item-list-item");
  productShipsTo.id = "item-list-item";
  productShipsTo.innerHTML = `${itemToCreate.shipsTo}`;
  item_list.appendChild(productShipsTo);
}

function deleteEveryChild() {
  const list_all_products = document.getElementById("list-all-products");

  let child = list_all_products.lastElementChild;
  while (child) {
    list_all_products.removeChild(child);
    child = list_all_products.lastElementChild;
  }
}

function displayProductList(productsList) {
  deleteEveryChild();
  productsList.forEach((product) => {
    createHtmlList(product);
  });
}

displayProductList(currentList);
/////////////////////////////////////////////////////////////////////////
//#endregion END------[ TASK 3 ] HYFBaY - Filtered products--------------
