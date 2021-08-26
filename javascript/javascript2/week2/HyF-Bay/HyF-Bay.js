//#region START-------[ TASK 3 ] HYFBaY - Filtered products--------------

document.addEventListener("DOMContentLoaded", () => {
  addEvenlisteners(elementsToAddEventListenersTo);
});

// VARIABLES

const originalList = getAvailableProducts();
let currentList = originalList;
const list_all_products = document.getElementById("list-all-products");
const searchByName = document.getElementById("searchByName");
const sortBy = document.getElementById("sortBy");
const shipsTo = document.getElementById("shipsTo");
const priceSlider = document.getElementById("price-slider");
const priceSliderValue = document.getElementById("price-slider-value");
const resetButton = document.getElementById("reset-button");
const elementsToAddEventListenersTo = [
  searchByName,
  sortBy,
  shipsTo,
  priceSlider,
  priceSliderValue,
  resetButton,
];

function addEvenlisteners(elementsToAddEventListenersTo) {
  elementsToAddEventListenersTo.forEach((item) => {
    switch (item.id) {
      case "searchByName":
        searchByName.addEventListener("input", (event) => {
          currentList = originalList.filter((item) =>
            convertToLowerCase(item.name).startsWith(event.target.value.toLowerCase()),
          );
          displayProductList(currentList);
        });
        break;

      case "sortBy":
        sortBy.addEventListener("input", (event) => {
          switch (event.target.value) {
            case "cheap":
              sortByPriceAscending(currentList);
              displayProductList(currentList);
              break;
            case "expensive":
              sortByPriceDescending(currentList);
              displayProductList(currentList);
              break;
            case "nameAZ":
              sortByNameFromAToZ(currentList);
              displayProductList(currentList);
              break;
            case "nameZA":
              sortByNameFromZToA(currentList);
              displayProductList(currentList);
              break;
            default:
              sortByPriceAscending(currentList);
              displayProductList(currentList);
          }
        });
        break;

      case "shipsTo":
        shipsTo.addEventListener("input", (event) => {
          switch (event.target.value) {
            case "denmark":
              currentList = currentList.filter((item) => item.shipsTo.includes("Denmark"));
              displayProductList(currentList);
              break;
            case "sweden":
              currentList = currentList.filter((item) => item.shipsTo.includes("Sweden"));
              displayProductList(currentList);
              break;
            case "norway":
              currentList = currentList.filter((item) => item.shipsTo.includes("Norway"));
              displayProductList(currentList);
              break;
            case "germany":
              currentList = currentList.filter((item) => item.shipsTo.includes("Germany"));
              displayProductList(currentList);
              break;
            case "iceland":
              currentList = currentList.filter((item) => item.shipsTo.includes("Iceland"));
              displayProductList(currentList);
              break;
            case "england":
              currentList = currentList.filter((item) => item.shipsTo.includes("England"));
              displayProductList(currentList);
              break;
            default:
          }
        });
        break;

      case "price-slider":
        priceSlider.addEventListener("input", (event) => {
          currentList = originalList.filter((item) => item.price <= event.target.value);
          priceSliderValue.innerText = `0 - ${event.target.value} $`;
          displayProductList(currentList);
        });

      case "reset-button":
        resetButton.addEventListener("click", (event) => {
          currentList = originalList;
          displayProductList(currentList);
        });
      default:
    }
  });
}

// FUNCTIONS

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
  const starString = "☆";
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

function sortByPriceAscending(listToSort) {
  listToSort = listToSort.sort((a, b) => (a.price > b.price ? 1 : -1));
}

function sortByPriceDescending(listToSort) {
  listToSort = listToSort.sort((a, b) => (a.price < b.price ? 1 : -1));
}

function sortByNameFromAToZ(listToSort) {
  listToSort = listToSort.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function sortByNameFromZToA(listToSort) {
  listToSort = listToSort.sort((a, b) => (a.name < b.name ? 1 : -1));
}

function sortByShippingTo(listToSort) {
  listToSort = listToSort.filter();
}

function convertToLowerCase(itemName) {
  return itemName.toLowerCase();
}

sortByPriceAscending(currentList);
displayProductList(currentList);

/////////////////////////////////////////////////////////////////////////
//#endregion END------[ TASK 3 ] HYFBaY - Filtered products--------------
