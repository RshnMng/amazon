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
    DISPLAY.hideHomePage();
    DISPLAY.loadHeader();
    this.cartQuantity = TOTALS.getCartQuantity();
    DISPLAY.displayCheckoutAmount(this.cartQuantity);
    this.cartItems = DISPLAY.getCartItems();
    DISPLAY.displayCart(this.cartItems);
    DISPLAY.hideUpdateDropMenu();
    TOTALS.getPriceBeforeTaxArr(this.cartItems);
    TOTALS.getTotalBeforeTax(CHECKOUT.priceArr);
    DISPLAY.displayTotalBeforeTax(CHECKOUT.itemPrice);
    TOTALS.getShippingTotal(CHECKOUT.priceArr);
    DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
    UPDATE.addEventsToBtns();

    // CHECKOUT.getTotalBeforeTax(this.priceArr);

    // CHECKOUT.displayShippingTotal(this.shippingTotal);

    // UPDATE.addEventsToBtns();
  },
};

export { CHECKOUT };

//NEXT STEPS :

// go through last few functions of CHECKOUT PAGE that handle shipping, tax and overall cost
// make sure all displays of price and item count are being saved and then updated through the local storage
// handle delete link
// go through code once more to optimize organization and make sure we arent repeating ourselves, (might have
// to refacto the fact that our code updates the local storage of cart quantity in two different ways. make so
// the cart quantity is coming from the cart items local storage itself) Also rename variables if needed, we
// have a lot of similar ones on different pages
