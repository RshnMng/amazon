import { DISPLAY } from "./display.js";
import { TOTALS } from "./totals.js";

const CHECKOUT = {
	CART_LINK: document.querySelector(".cart-link"),
	HOME_PAGE: document.querySelector(".home-page"),
	BODY: document.querySelector("body"),
	cartDisplayElem: document.querySelector(".cart-display"),
	cartCount: document.querySelector(".cart-count"),
	cartQuantity: 0,
	shippingTotal: 0,
	tax: 0,
	cartItems: "",
	preTaxPrice: 0,
	totalPrice: 0,
	totalArr: [],
	shippingArr: [],
	loadCheckoutPage: function () {
		DISPLAY.setUpPage();
	},
};

export { CHECKOUT };
