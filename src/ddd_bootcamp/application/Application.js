import Product from "../domain/Product.js";
import Cart from "../domain/Cart.js";

class Application {
  run() {
    const cart1 = new Cart();
    const cart2 = new Cart();
    const sonyheadphone = new Product("Sony Wireless Headphone", 1);

    cart1.add(sonyheadphone);
    cart2.add(sonyheadphone);

    console.log("Cart 1 = " + cart1.toString());
    const products1 = cart1.getProducts();
    const productsRemoved1 = cart1.getProductsRemoved();

    console.log("Cart 2 = " + cart2.toString());
    const products2 = cart2.getProducts();
    const productsRemoved2 = cart2.getProductsRemoved();

    console.log(cart1.compare(cart2));

    console.log("----------------------------------------");
    console.log("products = " + products1);
    console.log("products removed = " + productsRemoved1);
    console.log("----------------------------------------");
  }
}

Application.prototype.run();
