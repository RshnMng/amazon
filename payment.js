const PAYMENT = {
	addEventsToPayPal: function () {
		const ELEMENTS = this.getElements();
		const PAYMENT_CHECKBOX = ELEMENTS.PAYMENT_DIV.childNodes[1].childNodes[3];
		ELEMENTS.PAYPAL_CREDIT_DIV.hidden = true;
		PAYMENT_CHECKBOX.addEventListener("click", () => this.showPayButtons(PAYMENT_CHECKBOX));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.CARD_NUMBER_ELEM, ELEMENTS.CARD_NUM_FLOAT_LABEL));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("keydown", (event) => this.onlyAddNumbers_andSpaces(event, ELEMENTS));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.CARD_NUMBER_ELEM, ELEMENTS.CARD_WARNING_LOGO, ELEMENTS.CARD_WARNING_LABEL));

		ELEMENTS.EXPIRES_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.EXPIRES_ELEM, ELEMENTS.EXPIRES_FLOAT_LABEL));
		ELEMENTS.EXPIRES_ELEM.addEventListener("keydown", (event) => this.check(event, ELEMENTS.EXPIRES_ELEM));
		ELEMENTS.EXPIRES_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.EXPIRES_ELEM, ELEMENTS.EXPIRES_WARNING_LOGO, ELEMENTS.EXPIRES_WARNING_LABEL));

		ELEMENTS.CVV_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.CVV_ELEM, ELEMENTS.CVV_FLOAT_LABEL));
		ELEMENTS.CVV_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.CVV_ELEM, ELEMENTS.CVV_WARNING_LOGO, ELEMENTS.CVV_WARNING_LABEL));

		ELEMENTS.FIRST_NAME_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.FIRST_NAME_BILLING_ELEM, ELEMENTS.FN_BILLING_FLOAT_LABEL));
		ELEMENTS.FIRST_NAME_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.FIRST_NAME_BILLING_ELEM, ELEMENTS.FN_BILLING_WARNING_LOGO, ELEMENTS.FN_BILLING_WARNING_LABEL));

		ELEMENTS.LAST_NAME_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.LAST_NAME_BILLING_ELEM, ELEMENTS.LN_BILLING_FLOAT_LABEL));
		ELEMENTS.LAST_NAME_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.LAST_NAME_BILLING_ELEM, ELEMENTS.LN_BILLING_WARNING_LOGO, ELEMENTS.FN_BILLING_WARNING_LABEL));

		ELEMENTS.ADDRESS_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.ADDRESS_BILLING_ELEM, ELEMENTS.ADDY_BILLING_FLOAT_LABEL));
		ELEMENTS.ADDRESS_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.ADDRESS_BILLING_ELEM, ELEMENTS.ADDY_BILLING_WARNING_LOGO, ELEMENTS.ADDY_BILLING_WARNING_LABEL));

		ELEMENTS.APT_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.APT_BILLING_ELEM, ELEMENTS.APT_BILLING_FLOAT_LABEL));
		ELEMENTS.APT_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.APT_BILLING_ELEM, ELEMENTS.APT_BILLING_WARNING_LOGO, ELEMENTS.APT_BILLING_WARNING_LABEL));

		ELEMENTS.CITY_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.CITY_BILLING_ELEM, ELEMENTS.CITY_BILLING_FLOAT_LABEL));
		ELEMENTS.CITY_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.CITY_BILLING_ELEM, ELEMENTS.CITY_BILLING_WARNING_LOGO, ELEMENTS.CITY_BILLING_WARNING_LABEL));

		ELEMENTS.STATE_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.STATE_BILLING_ELEM, ELEMENTS.STATE_BILLING_FLOAT_LABEL));
		ELEMENTS.STATE_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.STATE_BILLING_ELEM, ELEMENTS.STATE_BILLING_WARNING_LOGO, ELEMENTS.STATE_BILLING_WARNING_LABEL));

		ELEMENTS.ZIP_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.ZIP_BILLING_ELEM, ELEMENTS.ZIP_BILLING_FLOAT_LABEL));
		ELEMENTS.ZIP_BILLING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.ZIP_BILLING_ELEM, ELEMENTS.ZIP_BILLING_WARNING_LOGO, ELEMENTS.ZIP_BILLING_WARNING_LABEL));

		ELEMENTS.PHONE_BILLING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.PHONE_BILLING_ELEM, ELEMENTS.PHONE_BILLING_FLOAT_LABEL));

		ELEMENTS.EMAIL_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.EMAIL_ELEM, ELEMENTS.EMAIL_FLOAT_LABEL));

		ELEMENTS.FIRST_NAME_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.FIRST_NAME_SHIPPING_ELEM, ELEMENTS.FN_SHIPPING_FLOAT_LABEL));
		ELEMENTS.FIRST_NAME_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.FIRST_NAME_SHIPPING_ELEM, ELEMENTS.FN_SHIPPING_WARNING_LOGO, ELEMENTS.FN_SHIPPING_WARNING_LABEL));

		ELEMENTS.LAST_NAME_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.LAST_NAME_SHIPPING_ELEM, ELEMENTS.LN_SHIPPING_FLOAT_LABEL));
		ELEMENTS.LAST_NAME_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.LAST_NAME_SHIPPING_ELEM, ELEMENTS.LN_SHIPPING_WARNING_LOGO, ELEMENTS.LN_SHIPPING_WARNING_LABEL));

		ELEMENTS.ADDRESS_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.ADDRESS_SHIPPING_ELEM, ELEMENTS.ADDY_SHIPPING_FLOAT_LABEL));
		ELEMENTS.ADDRESS_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.ADDRESS_SHIPPING_ELEM, ELEMENTS.ADDY_SHIPPING_WARNING_LOGO, ELEMENTS.ADDY_SHIPPING_WARNING_LABEL));

		ELEMENTS.APT_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.APT_SHIPPING_ELEM, ELEMENTS.APT_SHIPPING_FLOAT_LABEL));
		ELEMENTS.APT_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.APT_SHIPPING_ELEM, ELEMENTS.APT_SHIPPING_WARNING_LOGO, ELEMENTS.APT_SHIPPING_WARNING_LABEL));

		ELEMENTS.CITY_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.CITY_SHIPPING_ELEM, ELEMENTS.CITY_SHIPPING_FLOAT_LABEL));
		ELEMENTS.CITY_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.CITY_SHIPPING_ELEM, ELEMENTS.CITY_SHIPPING_WARNING_LOGO, ELEMENTS.CITY_SHIPPING_WARNING_LABEL));

		ELEMENTS.STATE_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.STATE_SHIPPING_ELEM, ELEMENTS.STATE_SHIPPING_FLOAT_LABEL));
		ELEMENTS.STATE_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.STATE_SHIPPING_ELEM, ELEMENTS.STATE_SHIPPING_WARNING_LOGO, ELEMENTS.STATE_SHIPPING_WARNING_LABEL));

		ELEMENTS.ZIP_SHIPPING_ELEM.addEventListener("click", () => this.handleInputLabels(ELEMENTS.ZIP_SHIPPING_ELEM, ELEMENTS.ZIP_SHIPPING_FLOAT_LABEL));
		ELEMENTS.ZIP_SHIPPING_ELEM.addEventListener("invalid", (event) => this.throwValidationError(event, ELEMENTS.ZIP_SHIPPING_ELEM, ELEMENTS.ZIP_SHIPPING_WARNING_LOGO, ELEMENTS.ZIP_SHIPPING_WARNING_LABEL));

		ELEMENTS.DEBIT_BTN.addEventListener("click", () => this.showBillingAddy(ELEMENTS));

		ELEMENTS.SHIPPING_CHECKBOX.addEventListener("click", () => this.showShippingAddy(ELEMENTS));

		ELEMENTS.X_BTN.addEventListener("click", () => this.XOUT(ELEMENTS));
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
		const EXPIRES_WARNING_LABEL = document.querySelector("#expires-warning-label");
		const CVV_ELEM = document.querySelector("#cvv");
		const CVV_FLOAT_LABEL = document.querySelector(".cvv-float-label");
		const CVV_WARNING_LOGO = document.querySelector("#cvv-warning-logo");
		const CVV_WARNING_LABEL = document.querySelector("#cvv-warning-label");
		const FIRST_NAME_BILLING_ELEM = document.querySelector("#first-name-billing");
		const FN_BILLING_FLOAT_LABEL = document.querySelector(".fn-billing-float-label");
		const FN_BILLING_WARNING_LOGO = document.querySelector("#fn-billing-warning-logo");
		const FN_BILLING_WARNING_LABEL = document.querySelector("#fn-billing-warning-label");
		const LAST_NAME_BILLING_ELEM = document.querySelector("#last-name-billing");
		const LN_BILLING_FLOAT_LABEL = document.querySelector(".ln-billing-float-label");
		const LN_BILLING_WARNING_LOGO = document.querySelector("#ln-billing-warning-logo");
		const LN_BILLING_WARNING_LABEL = document.querySelector("#ln-billing-warning-label");

		const ADDRESS_BILLING_ELEM = document.querySelector("#address-billing");
		const ADDY_BILLING_FLOAT_LABEL = document.querySelector(".addy-billing-float-label");
		const ADDY_BILLING_WARNING_LOGO = document.querySelector("#addy-billing-warning-logo");
		const ADDY_BILLING_WARNING_LABEL = document.querySelector("#addy-billing-warning-label");
		const APT_BILLING_ELEM = document.querySelector("#apt-billing");
		const APT_BILLING_FLOAT_LABEL = document.querySelector(".apt-billing-float-label");
		const APT_BILLING_WARNING_LOGO = document.querySelector("#apt-billing-warning-logo");
		const APT_BILLING_WARNING_LABEL = document.querySelector("#apt-billing-warning-label");

		const CITY_BILLING_ELEM = document.querySelector("#city-billing");
		const CITY_BILLING_FLOAT_LABEL = document.querySelector(".city-billing-float-label");
		const CITY_BILLING_WARNING_LOGO = document.querySelector("#city-billing-warning-logo");
		const CITY_BILLING_WARNING_LABEL = document.querySelector("#city-billing-warning-label");

		const STATE_BILLING_ELEM = document.querySelector("#state-billing");
		const STATE_BILLING_FLOAT_LABEL = document.querySelector(".state-billing-float-label");
		const STATE_BILLING_WARNING_LOGO = document.querySelector("#state-billing-warning-logo");
		const STATE_BILLING_WARNING_LABEL = document.querySelector("#state-billing-warning-label");

		const ZIP_BILLING_ELEM = document.querySelector("#zip-billing");
		const ZIP_BILLING_FLOAT_LABEL = document.querySelector(".zip-billing-float-label");
		const ZIP_BILLING_WARNING_LOGO = document.querySelector("#zip-billing-warning-logo");
		const ZIP_BILLING_WARNING_LABEL = document.querySelector("#zip-billing-warning-label");

		const PHONE_BILLING_ELEM = document.querySelector("#phone");
		const PHONE_BILLING_FLOAT_LABEL = document.querySelector(".phone-float-label");
		const EMAIL_ELEM = document.querySelector("#email");
		const EMAIL_FLOAT_LABEL = document.querySelector(".email-float-label");
		const FIRST_NAME_SHIPPING_ELEM = document.querySelector("#first-name-shipping");
		const FN_SHIPPING_FLOAT_LABEL = document.querySelector(".fn-shipping-float-label");
		const FN_SHIPPING_WARNING_LOGO = document.querySelector("#fn-shipping-warning-logo");
		const FN_SHIPPING_WARNING_LABEL = document.querySelector("#fn-shipping-warning-label");

		const LAST_NAME_SHIPPING_ELEM = document.querySelector("#last-name-shipping");
		const LN_SHIPPING_FLOAT_LABEL = document.querySelector(".ln-shipping-float-label");
		const LN_SHIPPING_WARNING_LOGO = document.querySelector("#ln-shipping-warning-logo");
		const LN_SHIPPING_WARNING_LABEL = document.querySelector("#ln-shipping-warning-label");

		const ADDRESS_SHIPPING_ELEM = document.querySelector("#address-shipping");
		const ADDY_SHIPPING_FLOAT_LABEL = document.querySelector(".addy-shipping-float-label");
		const ADDY_SHIPPING_WARNING_LOGO = document.querySelector("#addy-shipping-warning-logo");
		const ADDY_SHIPPING_WARNING_LABEL = document.querySelector("#addy-shipping-warning-label");

		const APT_SHIPPING_ELEM = document.querySelector("#apt-shipping");
		const APT_SHIPPING_FLOAT_LABEL = document.querySelector(".apt-shipping-float-label");
		const APT_SHIPPING_WARNING_LOGO = document.querySelector("#apt-shipping-warning-logo");
		const APT_SHIPPING_WARNING_LABEL = document.querySelector("#apt-shipping-warning-label");

		const CITY_SHIPPING_ELEM = document.querySelector("#city-shipping");
		const CITY_SHIPPING_FLOAT_LABEL = document.querySelector(".city-shipping-float-label");
		const CITY_SHIPPING_WARNING_LOGO = document.querySelector("#city-shipping-warning-logo");
		const CITY_SHIPPING_WARNING_LABEL = document.querySelector("#city-shipping-warning-label");

		const STATE_SHIPPING_ELEM = document.querySelector("#state-shipping");
		const STATE_SHIPPING_FLOAT_LABEL = document.querySelector(".state-shipping-float-label");
		const STATE_SHIPPING_WARNING_LOGO = document.querySelector("#state-shipping-warning-logo");
		const STATE_SHIPPING_WARNING_LABEL = document.querySelector("#state-shipping-warning-label");

		const ZIP_SHIPPING_ELEM = document.querySelector("#zip-shipping");
		const ZIP_SHIPPING_FLOAT_LABEL = document.querySelector(".zip-shipping-float-label");
		const ZIP_SHIPPING_WARNING_LOGO = document.querySelector("#zip-shipping-warning-logo");
		const ZIP_SHIPPING_WARNING_LABEL = document.querySelector("#zip-shipping-warning-label");

		const DEBIT_BTN = document.querySelector(".credit-card-btn");
		const BILLING_ADDY = document.querySelector(".billing-form");
		const SHIPPING_ADDY = document.querySelector(".shipping-form");
		const SHIPPING_CHECKBOX = document.querySelector(".shipping-checkbox");
		const X_BTN = document.querySelector(".x-out");

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
			EXPIRES_WARNING_LABEL,
			CVV_ELEM,
			CVV_FLOAT_LABEL,
			CVV_WARNING_LOGO,
			CVV_WARNING_LABEL,
			FIRST_NAME_BILLING_ELEM,
			FN_BILLING_FLOAT_LABEL,
			FN_BILLING_WARNING_LOGO,
			FN_BILLING_WARNING_LABEL,
			LAST_NAME_BILLING_ELEM,
			LN_BILLING_FLOAT_LABEL,
			LN_BILLING_WARNING_LOGO,
			LN_BILLING_WARNING_LABEL,
			ADDRESS_BILLING_ELEM,
			ADDY_BILLING_FLOAT_LABEL,
			ADDY_BILLING_WARNING_LOGO,
			ADDY_BILLING_WARNING_LABEL,
			APT_BILLING_ELEM,
			APT_BILLING_FLOAT_LABEL,
			APT_BILLING_WARNING_LOGO,
			APT_BILLING_WARNING_LABEL,
			CITY_BILLING_ELEM,
			CITY_BILLING_FLOAT_LABEL,
			CITY_BILLING_WARNING_LOGO,
			CITY_BILLING_WARNING_LABEL,
			STATE_BILLING_ELEM,
			STATE_BILLING_FLOAT_LABEL,
			STATE_BILLING_WARNING_LOGO,
			STATE_BILLING_WARNING_LABEL,
			ZIP_BILLING_ELEM,
			ZIP_BILLING_FLOAT_LABEL,
			ZIP_BILLING_WARNING_LOGO,
			ZIP_BILLING_WARNING_LABEL,
			PHONE_BILLING_ELEM,
			PHONE_BILLING_FLOAT_LABEL,
			EMAIL_ELEM,
			EMAIL_FLOAT_LABEL,
			FIRST_NAME_SHIPPING_ELEM,
			FN_SHIPPING_FLOAT_LABEL,
			FN_SHIPPING_WARNING_LOGO,
			FN_SHIPPING_WARNING_LABEL,
			LAST_NAME_SHIPPING_ELEM,
			LN_SHIPPING_FLOAT_LABEL,
			LN_SHIPPING_WARNING_LOGO,
			LN_SHIPPING_WARNING_LABEL,
			ADDRESS_SHIPPING_ELEM,
			ADDY_SHIPPING_FLOAT_LABEL,
			ADDY_SHIPPING_WARNING_LOGO,
			ADDY_SHIPPING_WARNING_LABEL,
			APT_SHIPPING_ELEM,
			APT_SHIPPING_FLOAT_LABEL,
			APT_SHIPPING_WARNING_LOGO,
			APT_SHIPPING_WARNING_LABEL,
			CITY_SHIPPING_ELEM,
			CITY_SHIPPING_FLOAT_LABEL,
			CITY_SHIPPING_WARNING_LOGO,
			CITY_SHIPPING_WARNING_LABEL,
			STATE_SHIPPING_ELEM,
			STATE_SHIPPING_FLOAT_LABEL,
			STATE_SHIPPING_WARNING_LOGO,
			STATE_SHIPPING_WARNING_LABEL,
			ZIP_SHIPPING_ELEM,
			ZIP_SHIPPING_FLOAT_LABEL,
			ZIP_SHIPPING_WARNING_LOGO,
			ZIP_SHIPPING_WARNING_LABEL,
			DEBIT_BTN,
			BILLING_ADDY,
			SHIPPING_ADDY,
			SHIPPING_CHECKBOX,
			X_BTN,
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
	check: function (event, element) {
		if (event.key.match(/[0-9]/g) || event.key == "Backspace") {
		} else {
			event.preventDefault();
		}
		if (element.value.length == 0 && event.key >= 2 && event.key <= 10) {
			element.value = 0 + element.value;
		} else if (element.value.length == 1 && event.key > 2 && element.value != 0) {
			event.preventDefault();
		} else if (element.value.length == 2 && event.key != "Backspace") {
			element.value = element.value + "/";
		}
	},
	showBillingAddy: function (ELEMENTS) {
		ELEMENTS.BILLING_ADDY.style.display = "inline";
	},
	showShippingAddy: function (ELEMENTS) {
		if (ELEMENTS.SHIPPING_ADDY.classList.contains("selected") == false) {
			ELEMENTS.SHIPPING_ADDY.style.display = "inline";
			ELEMENTS.SHIPPING_ADDY.classList.add("selected");
		} else {
			console.log("naww bruh");
			ELEMENTS.SHIPPING_ADDY.style.display = "none";
			ELEMENTS.SHIPPING_ADDY.classList.remove("selected");
		}
	},
	XOUT: function (ELEMENTS) {
		ELEMENTS.BILLING_ADDY.style.display = "none";
	},
};

export { PAYMENT };

// 1. style page
// 2. make required elements show red border and warning logo if not filled
// on click of pay now
// 3 make pay pal and credit card buttons disabled if no items in cart
// 4. {checkout display}
// when the item quantity is updated in the checkout display, the date goes to
// free shipping/default value... make it so the date stays on whatever date is selected

// 5 add functionality to Pay Now and Place Order buttons that take you to the
//Order page // begin order page
