import { CHECKOUT } from "./checkout.js";
import { TOTALS } from "./totals.js";
import { DISPLAY } from "./display.js";

const UPDATE = {
  localStorageIndex: 0,
  addEventsToBtns: function () {
    let SHIPPING_BTNS = document.querySelectorAll(".radio-btn");
    let UPDATE_LINK = document.querySelectorAll(".update-link");
    let DELETE_LINK = document.querySelectorAll(".delete-link");
    this.addEventsToRadioBtns(SHIPPING_BTNS);
    this.addEventsToUpdateLinks(UPDATE_LINK);
  },
  addEventsToRadioBtns: function (SHIPPING_BTNS) {
    SHIPPING_BTNS.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.handleShippingEvents(event);
      });
    });
  },
  handleShippingEvents: function (event) {
    let optionBtn = event.target.parentElement.parentElement;
    let optionDiv = optionBtn.parentElement;
    let optionsArr = this.getOptionArr(optionDiv);
    this.removeSelectedClass(optionsArr);
    let shippingArr = this.getSelectedShippingOptions(optionBtn);
    CHECKOUT.shippingTotal = TOTALS.getShippingTotal(shippingArr);
    DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
    TOTALS.calculateTotal(
      CHECKOUT.tax,
      CHECKOUT.itemPrice,
      CHECKOUT.shippingTotal
    );
  },
  getOptionArr: function (optionDiv) {
    let options = optionDiv.children;
    let optionsArr = Array.from(options);
    return optionsArr;
  },
  removeSelectedClass(optionsArr) {
    optionsArr.forEach((button) => {
      button.classList.remove("selected");
    });
  },
  getSelectedShippingOptions(optionBtn) {
    let shippingArr = [];
    optionBtn.classList.add("selected");
    let RADIO_BTNS_ON_PAGE = document.querySelectorAll(".option");
    RADIO_BTNS_ON_PAGE.forEach((item) => {
      if (
        item.classList.contains("selected") &&
        item.classList.contains("option-2")
      ) {
        shippingArr.push(4.99);
      } else if (
        item.classList.contains("selected") &&
        item.classList.contains("option-3")
      ) {
        shippingArr.push(9.99);
      } else {
        return;
      }
    });
    return shippingArr;
  },
  addEventsToUpdateLinks: function (UPDATE_LINK) {
    UPDATE_LINK.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.handleUpdateDropMenu(event);
      });
    });
  },
  handleUpdateDropMenu: function (event) {
    let clickedLink = event.target;
    this.localStorageIndex = event.target.getAttribute("localStorageIndex");
    let updateDropMenu =
      clickedLink.parentElement.parentElement.parentElement.childNodes[3];
    this.toggleSavedAndUpdate(clickedLink, updateDropMenu);
  },
  toggleSavedAndUpdate(clickedLink, updateDropMenu) {
    if (clickedLink.classList.contains("update-link")) {
      clickedLink.classList.remove("update-link");
      clickedLink.classList.add("save-link");
      clickedLink.textContent = "Save";
      updateDropMenu.style.display = "inline";
    } else {
      clickedLink.classList.remove("save-link");
      clickedLink.classList.add("update-link");
      clickedLink.textContent = "Update";
      updateDropMenu.style.display = "none";
      let newQuantity = this.getNewQuantity(updateDropMenu);

      let updatedCart = this.updateCartItemInfo(
        newQuantity,
        this.localStorageIndex
      );
      this.updateProductCount(newQuantity, clickedLink);
      this.saveUpdatedCart(updatedCart);

      UPDATE.updateCheckOutPage();
    }
  },

  getNewQuantity: function (updateDropMenu) {
    let menuValue = updateDropMenu.firstChild.value;
    return menuValue;
  },

  updatePageInfo: function (newItemQuantity, localStorageIndex) {
    let updatedCart = this.updateCartItemInfo(
      newItemQuantity,
      localStorageIndex
    );
    DISPLAY.setCartItems(updatedCart);
    let newCartQuantity = this.updateCartCount();
    DISPLAY.setLocalCartQuantity(newCartQuantity);
  },
  updateCartItemInfo: function (newQuantity, localStorageIndex) {
    let itemsInCart = DISPLAY.getCartItems();
    itemsInCart[localStorageIndex].itemQuantity = Number(newQuantity);
    return itemsInCart;
  },
  updateCartCount: function () {
    let itemsInCart = DISPLAY.getCartItems();
    let total = 0;
    itemsInCart.forEach((item) => {
      total += item.itemQuantity;
    });
    return total;
  },
  saveUpdatedCart: function (updatedCart) {
    CHECKOUT.cartItems = updatedCart;
    DISPLAY.setCartItems(updatedCart);
  },

  updateProductCount: function (newQuantity, clickedLink) {
    let itemCount =
      clickedLink.parentElement.parentElement.parentElement.children[0];
    itemCount.innerHTML = `Quantity: ${newQuantity}`;
  },
  updateCheckOutPage() {
    UPDATE.emptyValues();
    let newCartQuantity = UPDATE.getUpdatedCartQuantity();
    DISPLAY.setLocalCartQuantity(newCartQuantity);
    UPDATE.updateTotalItemCount();
    TOTALS.getPriceBeforeTaxArr(CHECKOUT.cartItems);
    TOTALS.getTotalBeforeTax(CHECKOUT.priceArr);
    DISPLAY.displayTotalBeforeTax(CHECKOUT.itemPrice);
    TOTALS.getShippingTotal(CHECKOUT.priceArr);
    DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
    TOTALS.calculateTax(CHECKOUT.itemPrice);
    TOTALS.calculateTotal(
      CHECKOUT.tax,
      CHECKOUT.itemPrice,
      CHECKOUT.shippingTotal
    );
  },
  emptyValues: function () {
    CHECKOUT.priceArr = [];
    CHECKOUT.itemPrice = 0;
    CHECKOUT.totalPrice = 0;
    CHECKOUT.tax = 0;
  },
  getUpdatedCartQuantity() {
    let total = CHECKOUT.cartItems.reduce((total, item) => {
      total += item.itemQuantity;
      return total;
    }, 0);
    return total;
  },
  updateTotalItemCount: function () {
    let currentItemCount = DISPLAY.getLocalCartQuantity();
    let checkOutHeader = document.querySelector(".checkout-header");
    let itemsDisplay = document.querySelector(".items");
    checkOutHeader.innerHTML = `Checkout <span class= 'checkout-count'>${currentItemCount} items </span>`;
    itemsDisplay.innerHTML = `Items(${currentItemCount})`;
  },
};

export { UPDATE };
