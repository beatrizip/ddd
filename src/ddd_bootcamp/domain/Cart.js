export default class Cart {
  #id = Math.random();
  #products = [];
  #productsRemoved = [];

  add(product) {
    this.#products.push(product);
  }

  remove(product, quantity = 0) {
    if (quantity <= 0) {
      this.#products = this.#products.filter((item) => item !== product);
      this.#productsRemoved.push(product);
    }

    if (quantity > 0) {
      this.#products.map((item) => {
        if (item === product) {
          return item.setQuantity(item.getQuantity() - quantity);
        }
      });
    }
  }

  getProducts() {
    return this.#products;
  }

  getId() {
    return this.#id;
  }

  getProductsRemoved() {
    return this.#productsRemoved;
  }

  compare(otherCart) {
    return this.#id === otherCart.getId();
  }

  toString() {
    return `{ products: [${this.#products.join(", ")}] }`;
  }
}
