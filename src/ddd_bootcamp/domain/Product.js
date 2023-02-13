export default class Product {
  #name;
  #quantity;

  constructor(name, quantity) {
    this.#name = name;
    this.#quantity = quantity;
  }

  getName() {
    return this.#name;
  }

  getQuantity() {
    return this.#quantity;
  }

  setQuantity(quantity) {
    this.#quantity = quantity;
  }

  toString() {
    return `{ name: ${this.#name}, quantity: ${this.#quantity}}`;
  }
}
