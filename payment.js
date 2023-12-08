const PAYMENT = {
	addEventsToPayPal: function () {
		const ELEMENTS = this.getElements();
		const PAYMENT_CHECKBOX = ELEMENTS.PAYMENT_DIV.childNodes[1].childNodes[3];
		ELEMENTS.PAYPAL_CREDIT_DIV.hidden = true;
		PAYMENT_CHECKBOX.addEventListener("click", () => this.showPayButtons(PAYMENT_CHECKBOX));
		ELEMENTS.CARD_NUMBER_ELEM.addEventListener("keydown", (event) => this.onlyAddNumbers_andSpaces(event));
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
		const CARD_NUMBER_ELEM = document.querySelector("#card-number");
		const EXPIRES_ELEM = document.querySelector("#expires");
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
			EXPIRES_ELEM,
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
	onlyAddNumbers_andSpaces: function (event) {
		const ELEMENTS = this.getElements();
		ELEMENTS.CARD_NUMBER_ELEM.value;
		if (event.key.match(/[0-9]/g) || event.key == "Backspace") {
		} else {
			event.preventDefault();
		}

		if (ELEMENTS.CARD_NUMBER_ELEM.value.length == 4 || ELEMENTS.CARD_NUMBER_ELEM.value.length == 9 || ELEMENTS.CARD_NUMBER_ELEM.value.length == 14) {
			ELEMENTS.CARD_NUMBER_ELEM.value = ELEMENTS.CARD_NUMBER_ELEM.value + " ";
		}
	},
};

export { PAYMENT };
