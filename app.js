import { products } from "./product.js";
import { SET_UP_DATA } from "./setPage.js";
import { CART } from "./cart.js";
import { SEARCH } from "./search.js";
import { CHECKOUT } from "./checkout.js";

const APP = (function () {
  // EVENTS HAPPENING ON PAGE LOAD //
  SET_UP_DATA.setUpPage(products);

  // CART //
  let savedCartQuantity = CART.getLocalStorageCartQuantity();
  CART.getCartStyling(savedCartQuantity);

  // SEARCH //
  const SEARCH_BAR = SEARCH.getSEARCH_BAR();
  const SEARCH_BTN = SEARCH.getSEARCH_BTN();
  SEARCH.addSEARCH_EVENT_LISTENERS(SEARCH_BAR, SEARCH_BTN);

  // CHECKOUT //
  CHECKOUT.CART_LINK.addEventListener("click", CHECKOUT.loadCheckoutPage);
})();
