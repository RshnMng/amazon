const PAYMENT = {
	addEventsToPayPal: function () {
		const ELEMENTS = this.getElements();
		const PAYMENT_CHECKBOX = ELEMENTS.PAYMENT_DIV.childNodes[1].childNodes[3];
		ELEMENTS.PAYPAL_CREDIT_DIV.hidden = true;
		PAYMENT_CHECKBOX.addEventListener("click", () => this.showPayButtons(PAYMENT_CHECKBOX));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("keydown", (event) => this.onlyAddNumbers_andSpaces(event, ELEMENTS));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.CARD_NUMBER_ELEM, ELEMENTS.CARD_NUM_FLOAT_LABEL));
		ELEMENTS.EXPIRES_ELEM.addEventListener("click", (event) => this.handleInputLabels(event, ELEMENTS.EXPIRES_ELEM, ELEMENTS.EXPIRES_FLOAT_LABEL));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("keydown", (event) => this.onlyAddNumbers_andSpaces(event, ELEMENTS));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.CARD_NUMBER_ELEM, ELEMENTS.CARD_WARNING_LOGO, ELEMENTS.CARD_WARNING_LABEL));
	},
	showPayButtons: function (PAYMENT_CHECKBOX) {
		const PLACE_ORDER_BTN = document.querySelector(".place-order");
		const PAYPAL_CREDIT_DIV = document.querySelector(".paypal-credit-div");
		if (PAYMENT_CHECKBOX.classList.contains("selected") == false) {
			PAYMENT_CHECKBOX.classList.add("selected");
			PLACE_ORDER_BTN.hidden = true;
			PAYPAL_CREDIT_DIV.hidden = false;
		} else {
			PAYMENT_CHECKBOX.classList.remove("selected");
			PLACE_ORDER_BTN.hidden = false;
			PAYPAL_CREDIT_DIV.hidden = true;
		}
	},
	getElements: function () {
		const PAYPAL_CREDIT_DIV = document.querySelector(".paypal-credit-div");
		const PAYMENT_DIV = document.querySelector(".payment-div");
		const CARD_NUMBER_ELEM = document.querySelector("#innocent-number");
		const CARD_NUM_FLOAT_LABEL = document.querySelector(".innocent-number-float-label");
		const CARD_WARNING_LOGO = document.querySelector("#card-warning-logo");
		const CARD_WARNING_LABEL = document.querySelector("#card-warning-label");
		const EXPIRES_ELEM = document.querySelector("#expires");
		const EXPIRES_FLOAT_LABEL = document.querySelector(".expires-float-label");
		const EXPIRES_WARNING_LOGO = document.querySelector("#expires-warning-logo");
		const CVV_ELEM = document.querySelector("#cvv");
		const FIRST_NAME_BILLING_ELEM = document.querySelector("#first-name-billing");
		const LAST_NAME_BILLING_ELEM = document.querySelector("#last-name-billing");
		const ADDRESS_BILLING_ELEM = document.querySelector("#address-billing");
		const APT_BILLING_ELEM = document.querySelector("#apt-billing");
		const CITY_BILLING_ELEM = document.querySelector("#city-billing");
		const STATE_BILLING_ELEM = document.querySelector("#state-billing");
		const ZIP_BILLING_ELEM = document.querySelector("#zip-billing");
		const FIRST_NAME_SHIPPING_ELEM = document.querySelector("#first-name-shipping");
		const LAST_NAME_SHIPPING_ELEM = document.querySelector("#last-name-shipping");
		const ADDRESS_SHIPPING_ELEM = document.querySelector("#address-shipping");
		const APT_SHIPPING_ELEM = document.querySelector("#apt-shipping");
		const CITY_SHIPPING_ELEM = document.querySelector("#city-shipping");
		const STATE_SHIPPING_ELEM = document.querySelector("#state-shipping");
		const ZIP_SHIPPING_ELEM = document.querySelector("#zip-shipping");

		return {
			PAYMENT_DIV,
			PAYPAL_CREDIT_DIV,
			CARD_NUMBER_ELEM,
			CARD_NUM_FLOAT_LABEL,
			CARD_WARNING_LOGO,
			CARD_WARNING_LABEL,
			EXPIRES_ELEM,
			EXPIRES_FLOAT_LABEL,
			EXPIRES_WARNING_LOGO,
			CVV_ELEM,
			FIRST_NAME_BILLING_ELEM,
			LAST_NAME_BILLING_ELEM,
			ADDRESS_BILLING_ELEM,
			APT_BILLING_ELEM,
			CITY_BILLING_ELEM,
			STATE_BILLING_ELEM,
			ZIP_BILLING_ELEM,
			FIRST_NAME_SHIPPING_ELEM,
			LAST_NAME_SHIPPING_ELEM,
			ADDRESS_SHIPPING_ELEM,
			APT_SHIPPING_ELEM,
			CITY_SHIPPING_ELEM,
			STATE_SHIPPING_ELEM,
			ZIP_SHIPPING_ELEM,
		};
	},
	onlyAddNumbers_andSpaces: function (event, ELEMENTS) {
		ELEMENTS.CARD_NUMBER_ELEM.value;
		if (event.key.match(/[0-9]/g) || event.key == "Backspace") {
		} else {
			event.preventDefault();
		}

		if ((ELEMENTS.CARD_NUMBER_ELEM.value.length == 4 && event.key != "Backspace") || (ELEMENTS.CARD_NUMBER_ELEM.value.length == 9 && event.key != "Backspace") || (ELEMENTS.CARD_NUMBER_ELEM.value.length == 14 && event.key != "Backspace")) {
			ELEMENTS.CARD_NUMBER_ELEM.value = ELEMENTS.CARD_NUMBER_ELEM.value + " ";
		}

		if (ELEMENTS.CARD_NUMBER_ELEM.value.length == 18) {
			ELEMENTS.CARD_WARNING_LABEL.style.display = "none";
			ELEMENTS.CARD_WARNING_LOGO.style.display = "none";
			ELEMENTS.CARD_NUMBER_ELEM.classList.remove("warning-border");
		}
	},
	handleInputLabels: function (element, label) {
		element.removeAttribute("placeholder");
		label.style.display = "inline";
		label.classList.add("float-label");
	},

	throwValidationError: function (event, element, logo, label) {
		event.preventDefault();
		logo.style.display = "inline";
		element.classList.add("warning-border");
		label.style.display = "inline";
	},
};

export { PAYMENT };

// {card number input}

//3. Make so card number input is empty on submit a red triangle shows up at the end of
// input bar along with a tab that says required  at the bottom and a red border is shown

//4. make it so if not all 19 spaces are filled up that the tab at the bottom says
// 'please enter a valid credit card number' and arrow shows up

//5. if all the previous requirements are met - then make sure all red borders,
//tabs and warning markings are gone

//{checkout display}
//6. when the item quantity is updated in the checkout display, the date goes to
// free shipping/default value... make it so the date stays on whatever date is selected
