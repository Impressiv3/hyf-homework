const defaultCurrency = "DKK";
const totalPrice = document.getElementById("total-price");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  async convertToCurrency(currency) {
    return getCurrencyRate(this.price, currency);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const indexOfProduct = this.products.indexOf(product);
    if (indexOfProduct > -1) {
      this.products.splice(indexOfProduct, 1);
    } else {
      console.log("Can't find item.");
    }
  }

  searchProduct(productName) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase()),
    );
  }

  getTotal() {
    return this.products.reduce((result, currentProduct) => result + currentProduct.price, 0);
  }

  renderProducts() {
    const fragment = new DocumentFragment();
    const ul = document.createElement("UL");
    fragment.appendChild(ul);
    this.products.forEach((product) => {
      createListElement(product);
    });
  }

  async getUser(userID) {
    try {
      const BASE_URL = "https://jsonplaceholder.typicode.com/users/";
      const query = userID;
      return getData(BASE_URL, query);
    } catch (error) {
      console.log(error);
    }
  }
}

function createListElement(productToList) {
  let mainLI = document.createElement("LI");
  ul.appendChild(mainLI);
  let productUL = document.createElement("UL");
  mainLI.appendChild(productUL);
  let nameLI = document.createElement("LI");
  nameLI.textContent = `Procuct: ${productToList.name}`;
  productUL.append(nameLI);
  let priceLI = document.createElement("LI");
  priceLI.textContent = `Price: ${productToList.price}`;
  productUL.append(priceLI);
  document.body.appendChild(fragment);
}

async function getData(BASE_URL, query) {
  try {
    const response = await fetch(`${BASE_URL}${query}`);
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCurrencyRate(amountToConvert, convertToCurrency) {
  const BASE_URL = `https://v6.exchangerate-api.com/v6/84a875e2ff2c28d158651393/latest/`;
  const query = defaultCurrency;
  const data = await getData(BASE_URL, query);
  const currenciesArray = data.conversion_rates;
  const convertedPrice = (amountToConvert * currenciesArray[`${convertToCurrency}`]).toFixed(2);
  console.log(`${convertedPrice}  ${convertToCurrency}`);
  return `${convertedPrice}  ${convertToCurrency}`;
}

async function displayEverything() {
  await displayUserInfo();
  shoppingCart.renderProducts();
  displayTotalPrice();
}

async function displayUserInfo() {
  let user = await shoppingCart.getUser(1);
  const fragment = new DocumentFragment();
  const userName = document.createElement("H2");
  userName.textContent = user.name;
  fragment.appendChild(userName);
  document.body.append(fragment);
}

function displayTotalPrice() {
  const totalPrice = document.createElement("h2");
  totalPrice.textContent = `Total: ${shoppingCart.getTotal()}`;
  const totalPriceToConvert = shoppingCart.getTotal();
  document.body.appendChild(totalPrice);
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 1000);
const tablet = new Product("tablet", 2000);
const notebook = new Product("notebook", 3000);
const mobilephone = new Product("mobilephone", 4000);
const pc = new Product("pc", 5000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(tablet);
shoppingCart.addProduct(notebook);
shoppingCart.addProduct(mobilephone);
shoppingCart.addProduct(pc);

shoppingCart.removeProduct(flatscreen);

console.log(shoppingCart.getTotal());
console.log(shoppingCart.searchProduct("tablet"));

shoppingCart.getUser(1);
displayEverything();
tablet.convertToCurrency("USD");
