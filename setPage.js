import { OPTIONS } from "./options.js";
import { products } from "./amazon-react/src/data/product.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DISPLAY } from "./display.js";
import { SEARCH } from "./search.js";

const SET_UP_DATA = {
  ADD_OPTIONS: function () {
    let optionDivs = this.getAllOptionDivs();
    this.getOptions(optionDivs, products);
  },
  getAllOptionDivs: function () {
    let optionDiv = document.querySelectorAll(".option-div");
    return optionDiv;
  },
  getOptions: function (optionDivs, products) {
    optionDivs.forEach((optionDiv) => {
      let id = optionDiv.id;
      let selectedProduct = products[optionDiv.id - 1];
      if (selectedProduct.options) this.getStyleOptions(selectedProduct, optionDiv, id);
    });
  },
  getStyleOptions: function (selectedProduct, optionDiv, id) {
    let productOptions = selectedProduct.options;
    this.displayOptions(productOptions, optionDiv, id);
  },
  displayOptions: function (productOptions, optionDiv, id) {
    for (const style in productOptions) {
      let options = productOptions[style];
      const STYLE_DIV = document.createElement("div");
      const STYLE = document.createElement("div");
      STYLE_DIV.classList.add(".option-div");
      STYLE.setAttribute("id", id);
      STYLE.classList.add("option-label");
      STYLE.innerText = style;
      STYLE_DIV.append(STYLE);
      STYLE_DIV.classList.add("style-div");
      STYLE.classList.add("style-type");

      optionDiv.append(STYLE_DIV);
      this.displayButtons(options, STYLE_DIV);
      let optionBtns = OPTIONS.getALL_OPTION_BTNS();
      let styleDivs = OPTIONS.getALL_STYLE_DIVS();
      OPTIONS.highlightFirstStyleOption(styleDivs);
      OPTIONS.addStyleEventToOptionBTNS(optionBtns);
    }
  },
  displayButtons: function (options, styleCategory) {
    options.forEach((option) => {
      let optionButton = document.createElement("button");
      optionButton.classList.add("style-choice");
      optionButton.classList.add("option-button");
      optionButton.innerText = option;
      styleCategory.append(optionButton);
    });
  },

  loopAddDiv: function (ADD_DIVS) {
    ADD_DIVS.forEach((div) => {
      this.hideAddDiv(div);
    });
  },
  hideAddDiv: function (div) {
    const CHECKMARK = div.childNodes[1];
    const ADDED_LABEL = div.childNodes[3];
    (CHECKMARK.hidden = true), (ADDED_LABEL.hidden = true);
  },

  addClickEvent: function (ADD_BTNS, ADD_DIVS) {
    ADD_BTNS.forEach((button) => {
      button.addEventListener("click", (event) => {
        let index = event.target.parentElement.id - 1;
        this.showAdded(index, ADD_DIVS);
        LOCAL_STORAGE.addSelectedItemToStorage(event);
        const ADD_CART_BTN = document.querySelector(".place-order");
      });
    });
    let leftDiv = document.querySelector(".left-div");
    leftDiv.addEventListener("click", (event) => DISPLAY.goToOrdersPage(event));
  },
  showAdded: function (index, ADD_DIVS) {
    const CHECKMARK = ADD_DIVS[index].childNodes[1];
    const ADDED_LABEL = ADD_DIVS[index].childNodes[3];
    (CHECKMARK.hidden = false), (ADDED_LABEL.hidden = false);
    setTimeout(() => {
      (CHECKMARK.hidden = true), (ADDED_LABEL.hidden = true);
    }, 2000);
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
