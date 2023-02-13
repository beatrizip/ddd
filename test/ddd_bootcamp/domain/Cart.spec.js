import Cart from "../../../src/ddd_bootcamp/domain/Cart.js";
import Product from "../../../src/ddd_bootcamp/domain/Product.js";
import { expect } from "chai";

describe("Cart", () => {
  it("should add product to cart", () => {
    const cart = new Cart();
    const product = new Product("Some test product");
    cart.add(product);

    const actual = cart.getProducts();

    expect(actual).to.have.lengthOf(1);
    expect(actual[0].getName()).to.eq("Some test product");
  });
});
