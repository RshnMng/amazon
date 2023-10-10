import { products } from "./product.js";
import { SET_UP_DATA } from "./setPage.js";
import { CART } from "./index_Cart.js";
import { OPTIONS } from "./options.js";
import { SEARCH } from "./search.js";

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
})();

// next step -- make so when set up page is run ,
//  the add elements are hidden and the buttons are sorted
//  on a single trigger so we can fire it again when searching for products
