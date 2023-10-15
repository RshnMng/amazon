import { CART } from "./cart.js";
import { BUTTONS } from "./buttons.js";
import { OPTIONS } from "./options.js";

const SET_UP_DATA = {
  BODY: document.querySelector("body"),
  ERROR_DIV: document.querySelector(".error-div"),
  PRODUCT_GRID: document.querySelector(".product-grid"),
  setUpPage: function (products) {
    let id = 0;
    let product_html = "";
    products.forEach((product) => {
      id = id += 1;
      product_html += `
        <div id=${id} class="product-div js-product-div">
        <div class='img-div'>
        <img class='product-img' src="${product.image}" />
        </div>
        <div class='product-name-div'>
        <p class='product-name js-product-name limit-to-2-lines'>${
          product.name
        }</p>
        </div>
        <div class='product-review'>
        <img src='${
          product.rating.stars
        }' class='product-stars js-product-stars'>
        <div class='product-count js-product-count'>${
          product.rating.count
        }</div>
        </div>
        <div class='product-price js-product-price'>$${Number(
          product.priceCents / 100
        ).toFixed(2)}</div>
        <div id=${id} class='quantity-div js-quantity-div'>
        <select class='drop-menu js-drop-menu'>
        <option value="1">1</option>
        <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
          </div>
          <div  id=${id} class='option-div'></div>
          <div id=${id} class='added-div js-added-div'>
          <img class='checkmark' src='https://www.supersimple.dev/projects/amazon/images/icons/checkmark.png'>
          <p class='added-text'>Added</p>
          </div>
          <button id=${id} class='add-btn js-add-btn'>Add to Cart</button>
          </div>
          `;
    });
    this.PRODUCT_GRID.innerHTML = product_html;
    this.addAndLoopAddedDivs();
    this.createNOT_FOUND();
    this.postNOT_FOUND();
  },
  addAndLoopAddedDivs: function () {
    const ADD_DIVS = BUTTONS.getADD_DIVS();
    const ALL_BTNS = BUTTONS.getALL_BTNS();
    this.loopAddDiv(ADD_DIVS);
    this.addClickEvent(ALL_BTNS, ADD_DIVS);
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
        this.showAdded(event.target.id - 1, ADD_DIVS);
        let newQuantity = CART.updatePageCartQuantity(event);
        CART.setLocalStorageCartQuantity(newQuantity);
        CART.manageCartItems(event, newQuantity);
      });
    });
  },
  showAdded: function (index, ADD_DIVS) {
    const CHECKMARK = ADD_DIVS[index].childNodes[1];
    const ADDED_LABEL = ADD_DIVS[index].childNodes[3];
    (CHECKMARK.hidden = false), (ADDED_LABEL.hidden = false);
    setTimeout(() => {
      (CHECKMARK.hidden = true), (ADDED_LABEL.hidden = true);
    }, 2000);
  },
  handleOptions: function () {
    const PRODUCT_OPTION_ARR = OPTIONS.makeOptionsArray(products);
    const OPTION_DIVS = OPTIONS.getOPTION_DIVS();
    const onlyProductsWithOptions = OPTIONS.filterProductsWithOptions(
      PRODUCT_OPTION_ARR,
      OPTION_DIVS
    );
    OPTIONS.getOptionCategories(onlyProductsWithOptions);
    const ALL_OPTION_BTNS = OPTIONS.getALL_OPTION_BTNS();
    const ALL_STYLE_DIVS = OPTIONS.getALL_STYLE_DIVS();
    OPTIONS.highlightFirstStyleOption(ALL_STYLE_DIVS);
    OPTIONS.addStyleEventToOptionBTNS(ALL_OPTION_BTNS);
  },
  createNOT_FOUND: function () {
    const NOT_FOUND = document.createElement("div");
    NOT_FOUND.classList.add("not-found");
    NOT_FOUND.textContent =
      "Item Not Found. Please Refine Your Search and Try Again";
    return NOT_FOUND;
  },
  postNOT_FOUND: function () {
    let NOT_FOUND = this.createNOT_FOUND();
    SET_UP_DATA.BODY.appendChild(NOT_FOUND);
    NOT_FOUND.hidden = true;
  },
};

export { SET_UP_DATA };
