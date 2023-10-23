import { CHECKOUT } from "./checkout.js";
import { products } from "./product.js";

const CART = {
  cartCount: document.querySelector(".cart-count"),
  itemQuantity: "",
  getdropMenu: function () {
    let dropMenus = document.querySelectorAll(".drop-menu");
    return dropMenus;
  },
  setLocalStorageCartQuantity: function (number) {
    let jsonQuantity = JSON.stringify(number);
    localStorage.setItem("cartQuantity", jsonQuantity);
  },

  getLocalStorageCartQuantity: function () {
    const JSON_CART = localStorage.getItem("cartQuantity");

    let savedCartQuantity = JSON.parse(JSON_CART);
    if (savedCartQuantity == null) {
      savedCartQuantity = 0;
    }
    return savedCartQuantity;
  },
  manageCartItems: function (event) {
    this.chosenItemAndQuantity = this.getCartItems();
    let itemQuantity = this.itemQuantity;
    let newProductID = Number(event.target.id);
    let chosenProduct = products[newProductID - 1];
    this.filterCartItem(
      this.chosenItemAndQuantity,
      itemQuantity,
      chosenProduct
    );
    this.setLocalStorageCartItems(this.chosenItemAndQuantity);
  },
  filterCartItem: function (
    chosenItemAndQuantity,
    itemQuantity,
    chosenProduct
  ) {
    if (this.chosenItemAndQuantity == null) {
      this.chosenItemAndQuantity = [];
      this.addProductToCart(itemQuantity, chosenProduct);
    } else {
      this.seeIfProductAlreadyInCart(
        this.chosenItemAndQuantity,
        chosenProduct,
        itemQuantity
      );
    }
  },

  getCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    let itemsInCart = JSON.parse(cartItems);
    return itemsInCart;
  },
  addProductToCart(itemQuantity, chosenProduct) {
    this.chosenItemAndQuantity.push({ itemQuantity, chosenProduct });
    return this.chosenItemAndQuantity;
  },
  addItemCountToExistingProduct: function (
    chosenItemAndQuantity,
    itemQuantity,
    chosenProduct
  ) {
    chosenItemAndQuantity.forEach((itemInCart) => {
      if (itemInCart.chosenProduct.id == chosenProduct.id) {
        itemInCart.itemQuantity += itemQuantity;
      }
    });
    console.log(this.chosenItemAndQuantity);
  },
  seeIfProductAlreadyInCart: function (
    chosenItemAndQuantity,
    chosenProduct,
    itemQuantity
  ) {
    let itemInCart = this.chosenItemAndQuantity.some((item) => {
      return item.chosenProduct.id == chosenProduct.id;
    });
    if (itemInCart == true) {
      this.addItemCountToExistingProduct(
        chosenItemAndQuantity,
        itemQuantity,
        chosenProduct
      );
    } else {
      this.addProductToCart(itemQuantity, chosenProduct);
    }
  },
};

export { CART };
