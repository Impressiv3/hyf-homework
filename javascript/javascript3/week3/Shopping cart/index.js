const url = "https://jsonplaceholder.typicode.com/users/1";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
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
    console.log(indexOfProduct);
    if (!index === -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    // Implement functionality here
  }

  getTotal() {
    // Implement functionality here
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser() {
    // Implement functionality here
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

console.log(shoppingCart.products);
shoppingCart.removeProduct();
