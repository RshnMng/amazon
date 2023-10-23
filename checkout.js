import { DISPLAY } from "./display.js";
import { TOTALS } from "./totals.js";
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

//NEXT STEPS :

//figure out why local storage isnt loading on initial page load
// handle delete links
// go through code once more to optimize organization and make sure we arent repeating ourselves, (might have
// to refacto the fact that our code updates the local storage of cart quantity in two different ways. make so
// the cart quantity is coming from the cart items local storage itself) Also rename variables if needed, we
// have a lot of similar ones on different pages
