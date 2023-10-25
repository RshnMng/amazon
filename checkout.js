import { DISPLAY } from "./display.js";
import { UPDATE } from "./update.js";

const CHECKOUT = {
  CART_LINK: document.querySelector(".cart-link"),
  HOME_PAGE: document.querySelector(".home-page"),
  BODY: document.querySelector("body"),
  cartQuantity: 0,
  cartDisplayElem: document.querySelector(".cart-display"),
  cartCount: document.querySelector(".cart-count"),
  shippingTotal: 0,
  tax: 0,
  cartItems: "",
  itemPrice: 0,
  totalPrice: 0,
  priceArr: [],
  loadCheckoutPage: function () {
    DISPLAY.setUpPage();
    UPDATE.updateTotals();
  },
};

export { CHECKOUT };
