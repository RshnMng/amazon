import { CHECKOUT } from "./checkout.js";
import { TOTALS } from "./totals.js";
import { DISPLAY } from "./display.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DATES } from "./dates.js";

const UPDATE = {
	localStorageIndex: 0,
	addEventsToBtns: function () {
		let SHIPPING_BTNS = document.querySelectorAll(".radio-btn");
		let UPDATE_LINK = document.querySelectorAll(".update-link");
		let DELETE_LINK = document.querySelectorAll(".delete-link");
		let CHECKOUT_AMZN_LOGO = document.querySelector(".checkout-logo");
		this.addEventsToRadioBtns(SHIPPING_BTNS);
		this.addEventsToUpdateLinks(UPDATE_LINK);
		this.addEventsToDeleteLinks(DELETE_LINK);
		CHECKOUT_AMZN_LOGO.addEventListener("click", DISPLAY.goToHomePage);
	},
	addEventsToRadioBtns: function (SHIPPING_BTNS) {
		SHIPPING_BTNS.forEach((button) => {
			button.addEventListener("click", (event) => {
				this.handleShippingEvents(event);
				this.changeDeliveryDate(event);
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
		TOTALS.calculateTotal(CHECKOUT.tax, CHECKOUT.itemPrice, CHECKOUT.shippingTotal);
	},
	getOptionArr: function (optionDiv) {
		let options = optionDiv.children;
		let optionsArr = Array.from(options);
		return optionsArr;
	},
	removeSelectedClass(optionsArr) {
		optionsArr.forEach((button) => {
			button.classList.remove("selected");
			let buttonElem = button.childNodes[1].childNodes[1];
			buttonElem.removeAttribute("checked");
		});
	},
	getSelectedShippingOptions(optionBtn) {
		let shippingArr = [];
		let shippingChoice = [];
		optionBtn.classList.add("selected");
		let RADIO_BTNS_ON_PAGE = document.querySelectorAll(".option");
		RADIO_BTNS_ON_PAGE.forEach((item) => {
			if (item.classList.contains("selected") && item.classList.contains("option-2")) {
				shippingArr.push(4.99);
				shippingChoice.push("option-2");
			} else if (item.classList.contains("selected") && item.classList.contains("option-3")) {
				shippingArr.push(9.99);
				shippingChoice.push("option-3");
			} else if (item.classList.contains("selected") && item.classList.contains("option-1")) {
				shippingChoice.push("option-1");
			} else if (item.childNodes[1].childNodes[1].hasAttribute("checked")) {
				shippingChoice.push("option-1");
			}
		});

		console.log(shippingArr, shippingChoice);
		this.storeLocalShipping(shippingChoice);
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
		let updateDropMenu = clickedLink.parentElement.parentElement.parentElement.childNodes[3];
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

			let updatedCart = this.updateCartItemInfo(newQuantity, this.localStorageIndex);

			LOCAL_STORAGE.setLocalStorageCartItems(updatedCart);
			UPDATE.updateTotals();
		}
	},

	getNewQuantity: function (updateDropMenu) {
		let menuValue = updateDropMenu.childNodes[1].value;
		return menuValue;
	},

	updatePageInfo: function (newItemQuantity, localStorageIndex) {
		let updatedCart = this.updateCartItemInfo(newItemQuantity, localStorageIndex);
		LOCAL_STORAGE.setLocalStorageCartItems(updatedCart);
	},
	updateCartItemInfo: function (newQuantity, localStorageIndex) {
		let itemsInCart = LOCAL_STORAGE.getCartItems();
		itemsInCart[localStorageIndex].itemQuantity = Number(newQuantity);
		return itemsInCart;
	},
	emptyValues: function () {
		CHECKOUT.priceArr = [];
		CHECKOUT.itemPrice = 0;
		CHECKOUT.totalPrice = 0;
		CHECKOUT.tax = 0;
	},
	addEventsToDeleteLinks: function (DELETE_LINK) {
		let cartItems = LOCAL_STORAGE.getCartItems();
		DELETE_LINK.forEach((link) => {
			link.addEventListener("click", (event) => {
				this.filterDeleted(event, cartItems);
			});
		});
	},

	filterDeleted(event, cartItems) {
		let PRODUCT_DISPLAY_DIV = document.querySelector(".product-display-div");
		let deletedProduct = event.target;

		let newCartItems = cartItems.filter((item) => {
			return deletedProduct.id != item.chosenProduct.id;
		});
		PRODUCT_DISPLAY_DIV.innerHTML = "";

		LOCAL_STORAGE.setLocalStorageCartItems(newCartItems);
		UPDATE.updateTotals();
	},
	changeDeliveryDate: function (event) {
		let DATE_DIV = event.target.parentElement.parentElement;
		let DATE_ELEM = DATE_DIV.parentElement.parentElement.childNodes[1];

		let classes = DATE_DIV.getAttribute("class");
		let classArr = classes.split(" ");
		let buttonType = classArr[0];
		this.getClickedButton(buttonType, DATE_ELEM);
	},
	getClickedButton: function (buttonType, DATE_ELEM) {
		if (buttonType == "option-1") {
			DATE_ELEM.innerHTML = `Delivery date: ${DATES.fiveDay}, ${DATES.fiveDayMonth} ${DATES.fiveDayDate}`;
		} else if (buttonType == "option-2") {
			DATE_ELEM.innerHTML = `Delivery date: ${DATES.threeDay}, ${DATES.threeDayMonth} ${DATES.threeDayDate}`;
		} else {
			DATE_ELEM.innerHTML = `Delivery date: ${DATES.nextDay}, ${DATES.nextDayMonth} ${DATES.nextDayDate}`;
		}
	},
	updateTotals: function () {
		let cartItems = LOCAL_STORAGE.getCartItems();
		UPDATE.emptyValues();
		DISPLAY.displayCheckoutAmount();
		LOCAL_STORAGE.getCartStyling();
		DISPLAY.displayCart(cartItems);
		TOTALS.getPriceBeforeTaxArr(cartItems);
		TOTALS.getTotalBeforeTax(CHECKOUT.priceArr);
		DISPLAY.displayTotalBeforeTax(CHECKOUT.itemPrice);
		TOTALS.getShippingTotal(CHECKOUT.priceArr);
		DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
		TOTALS.calculateTax(CHECKOUT.itemPrice);
		TOTALS.calculateTotal(CHECKOUT.tax, CHECKOUT.itemPrice, CHECKOUT.shippingTotal);
		UPDATE.addEventsToBtns();
		this.getDefaultShipping();
		const EMPTY_DIV = document.createElement("div");
		EMPTY_DIV.hidden = true;
	},
	getDefaultShipping: function () {
		const RADIO_BTNS = document.querySelectorAll(".radio-btn");
		let selectedShipping = [];
		RADIO_BTNS.forEach((button) => {
			if (button.hasAttribute("checked")) {
				let optionDiv = button.parentElement.parentElement;
				selectedShipping.push(optionDiv.getAttribute("class"));
			}
		});
		this.storeLocalShipping(selectedShipping);
	},

	storeLocalShipping: function (selectedShipping) {
		let shippingJson = JSON.stringify(selectedShipping);
		localStorage.setItem("selectedShipping", shippingJson);
	},
};
export { UPDATE };
