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
		CHECKOUT.shippingArr = this.getSelectedShippingOptions(optionBtn);
		// console.log(CHECKOUT.shippingArr);
		CHECKOUT.shippingTotal = TOTALS.getShippingTotal(CHECKOUT.shippingArr);
		// console.log(CHECKOUT.shippingTotal);
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
				item.childNodes[1].childNodes[1].checked = true;
			} else if (item.classList.contains("selected") && item.classList.contains("option-3")) {
				shippingArr.push(9.99);
				shippingChoice.push("option-3");
				item.childNodes[1].childNodes[1].checked = true;
			} else if (item.classList.contains("selected") && item.classList.contains("option-1")) {
				shippingChoice.push("option-1");
			} else if (item.childNodes[1].childNodes[1].hasAttribute("checked")) {
				shippingChoice.push("option-1");
				item.childNodes[1].childNodes[1].checked = true;
			}
		});
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
				this.deleteShipping(event);
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
	deleteShipping: function (event) {
		const SHIPPING_OPTIONS_JSON = localStorage.getItem("selectedShipping");
		let shippingOptions = JSON.parse(SHIPPING_OPTIONS_JSON);

		let productDisplay = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		let shippingIndex = productDisplay.getAttribute("localStorageIndex");

		let newArr = shippingOptions.splice(shippingIndex, 1);

		console.log(shippingIndex, Number(shippingIndex) + 1);
		console.log(newArr, shippingOptions);

		this.storeLocalShipping(shippingOptions);
		this.displayStoredShippingOptions(shippingOptions);

		CHECKOUT.shippingArr.splice(shippingIndex, shippingIndex + 1);
		CHECKOUT.shippingTotal = TOTALS.getShippingTotal(CHECKOUT.shippingArr);
		DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
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
		this.getLocalShippingOptions();
		TOTALS.getPriceBeforeTaxArr(cartItems);
		TOTALS.getTotalBeforeTax(CHECKOUT.totalArr);
		DISPLAY.displayTotalBeforeTax(CHECKOUT.itemPrice);
		TOTALS.getShippingTotal(CHECKOUT.shippingArr);
		DISPLAY.displayShippingTotal(CHECKOUT.shippingTotal);
		TOTALS.calculateTax(CHECKOUT.itemPrice);
		TOTALS.calculateTotal(CHECKOUT.tax, CHECKOUT.itemPrice, CHECKOUT.shippingTotal);
		UPDATE.addEventsToBtns();

		const EMPTY_DIV = document.createElement("div");
		EMPTY_DIV.hidden = true;
	},
	storeLocalShipping: function (selectedShipping) {
		let shippingJson = JSON.stringify(selectedShipping);
		localStorage.setItem("selectedShipping", shippingJson);
	},
	getLocalShippingOptions: function () {
		const SHIPPING_OPTIONS_JSON = localStorage.getItem("selectedShipping");
		let shippingOptions = JSON.parse(SHIPPING_OPTIONS_JSON);
		let numOfItems = LOCAL_STORAGE.getNumberOfCartItems();
		if (shippingOptions == null && numOfItems > 0) {
			shippingOptions = [];
			for (let i = 0; i < numOfItems; i++) {
				shippingOptions.push("option-1");
			}
			this.storeLocalShipping(shippingOptions);
		} else {
			this.displayStoredShippingOptions(shippingOptions);
		}
	},

	displayStoredShippingOptions: function (shippingOptions) {
		let i = 0;
		let shippingDivs = document.querySelectorAll(".shipping-option-div");
		shippingDivs.forEach((div) => {
			let childArr = Array.from(div.children);
			childArr.forEach((element) => {
				if (element.classList[0] == shippingOptions[i]) {
					let buttonHTML = element.childNodes[1].childNodes[1];
					buttonHTML.checked = true;
				}
			});
			i += 1;
		});
		this.getShippingCost(shippingOptions);
	},
	getShippingCost: function (shippingOptions) {
		let shippingArr = [];
		if (shippingOptions == null) {
			return;
		} else {
			shippingOptions.forEach((option) => {
				if (option == "option-2") {
					shippingArr.push(4.99);
				} else if (option == "option-3") {
					shippingArr.push(9.99);
				} else {
					return;
				}
			});
		}

		TOTALS.getShippingTotal(shippingArr);
	},
};
export { UPDATE };

// 3. delete link when clicked in order index 1234 or index 4321 works fine, when jumping around
// it messes up, must be an issue with splice/splice
// 3.5 calculations in order summary (total before tax, total etc) are compounding on delete link click
// fix that //
// 4.when update is clicked make sure zero cant be selected, or delete it if selected
// 5.make it so that cart counter updates on home page when checkout page
//amazon logo is clicked // save cart information into local storage so it doesnt update on refresh
// 6. make it so place your order button goes back to being enabled after it is disabled so when
// view an empty cart in checkout then go back to the home page and add items to the cart and then
// go back to the checkout, the button is enabled..
