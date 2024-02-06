import { OPTIONS } from "./options.js";
import { products } from "./amazon-react/src/data/product.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DISPLAY } from "./display.js";
import { SEARCH } from "./search.js";

const SET_UP_DATA = {
  addClickEvent: function (ADD_BTNS, ADD_DIVS) {
    ADD_BTNS.forEach((button) => {
      button.addEventListener("click", (event) => {
        LOCAL_STORAGE.addSelectedItemToStorage(event);
        const ADD_CART_BTN = document.querySelector(".place-order");
      });
    });
  },

  handleOptions: function (products) {
    const PRODUCT_OPTION_ARR = OPTIONS.makeOptionsArray(products);
    OPTIONS.OPTION_DIVS = OPTIONS.getOPTION_DIVS();
    const onlyProductsWithOptions = OPTIONS.filterProductsWithOptions(PRODUCT_OPTION_ARR, OPTIONS.OPTION_DIVS);
    OPTIONS.getOptionCategories(onlyProductsWithOptions);
    const ALL_OPTION_BTNS = OPTIONS.getALL_OPTION_BTNS();
    const ALL_STYLE_DIVS = OPTIONS.getALL_STYLE_DIVS();
    OPTIONS.highlightFirstStyleOption(ALL_STYLE_DIVS);
    OPTIONS.addStyleEventToOptionBTNS(ALL_OPTION_BTNS);
  },
  createNOT_FOUND: function () {
    const NOT_FOUND = document.createElement("div");
    NOT_FOUND.classList.add("not-found");
    NOT_FOUND.textContent = "Item Not Found. Please Refine Your Search and Try Again";
    return NOT_FOUND;
  },
  postNOT_FOUND: function () {
    let NOT_FOUND = this.createNOT_FOUND();
    SET_UP_DATA.BODY.appendChild(NOT_FOUND);
    NOT_FOUND.hidden = true;
  },
  getADD_DIVS: function () {
    const ADD_DIVS = document.querySelectorAll(".added-div");
    return ADD_DIVS;
  },
  getALL_BTNS: function () {
    const ADD_BTNS = document.querySelectorAll(".add-btn");
    return ADD_BTNS;
  },
  handleSearchBTNS: function () {
    const SEARCH_BTN = SEARCH.getSEARCH_BTN();
    const SEARCH_BAR = SEARCH.getSEARCH_BAR();
    SEARCH_BTN.addEventListener("click", (event) => {
      SEARCH.handleSearch(SEARCH_BAR);
    });
  },
};

export { SET_UP_DATA };
