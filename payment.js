const PAYMENT = {
	getPAYMENT_DIV: function () {
		const PAYMENT_DIV = document.querySelector(".payment-div");
		return PAYMENT_DIV;
	},
	addEventsToPayPal: function () {
		const PAYMENT_DIV = this.getPAYMENT_DIV();
		const PAYMENT_CHECKBOX = PAYMENT_DIV.childNodes[1].childNodes[3];
		const PAYPAL_CREDIT_DIV = document.querySelector(".paypal-credit-div");
		PAYPAL_CREDIT_DIV.hidden = true;
		PAYMENT_CHECKBOX.addEventListener("click", () => this.showPayButtons(PAYMENT_CHECKBOX));
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
		// PAYMENT.hidePlaceOrderButton();
	},
	hidePlaceOrderButton: function () {
		const PLACE_ORDER_BTN = document.querySelector(".place-order");
		const PAYPAL_CREDIT_DIV = document.querySelector(".paypal-credit-div");
		PLACE_ORDER_BTN.hidden = true;
		PAYPAL_CREDIT_DIV.hidden = false;
	},
};

export { PAYMENT };
