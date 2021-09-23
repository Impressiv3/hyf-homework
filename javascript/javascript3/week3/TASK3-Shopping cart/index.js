const totalPrice = document.getElementById("total-price");

class Currency {
  constructor(name, rate) {
    this.name = name;
    this.rate = rate;
  }
}

const USD = new Currency("USD", 7.5);
const EUR = new Currency("EUR", 8.2);
const HUF = new Currency("HUF", 46.2);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    console.log(this.price * currency.rate);
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
      // create a temporary new array of products
      const tempProducts = this.products.map((product) => product);
      // remove item from temporary array
      tempProducts.splice(indexOfProduct, 1);
      // replace products with the temporary array
      this.products = tempProducts;
    } else {
      console.log("Can't find item.");
    }
  }

  searchProduct(productName) {
    return this.products.filter((item) => item.name === productName);
  }

  getTotal() {
    let total = 0;
    this.products.forEach((item) => {
      total = item.price + total;
    });
    return total;
  }

  renderProducts() {
    const ul = document.createElement("UL");
    document.body.appendChild(ul);
    this.products.forEach((product) => {
      let mainLI = document.createElement("LI");
      ul.appendChild(mainLI);
      let productUL = document.createElement("UL");
      mainLI.appendChild(productUL);
      let nameLI = document.createElement("LI");
      nameLI.innerHTML = `Procuct: ${product.name}`;
      productUL.append(nameLI);
      let priceLI = document.createElement("LI");
      priceLI.innerHTML = `Price: ${product.price}`;
      productUL.append(priceLI);
    });
  }

  getUser = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/users/1`;
      const response = await fetch(url);
      if (response.status >= 200 && response.status < 300) {
        let user = response;
        user = user.json();
        return user;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
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

async function displayEverything() {
  let user = await shoppingCart.getUser();
  const userName = document.createElement("H2");
  userName.textContent = user.name;
  document.body.append(userName);
  shoppingCart.renderProducts();
  displayTotalPrice();
}

function displayTotalPrice() {
  const totalPrice = document.createElement("h2");
  totalPrice.textContent = `Total: ${shoppingCart.getTotal()}`;
  document.body.appendChild(totalPrice);
}

displayEverything();

tablet.convertToCurrency(HUF);
