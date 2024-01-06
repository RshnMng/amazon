import { DISPLAY } from "./display.js";
import { PAYMENT } from "./payment.js";

const CHECKOUT = {
	CART_LINK: document.querySelector(".cart-link"),
	HOME_PAGE: document.querySelector(".main-page"),
	NAV_BAR: document.querySelector(".nav-div"),
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
	savedOrders: [],
	loadCheckoutPage: function () {
		DISPLAY.setUpPage();
		PAYMENT.addEventsToPayPal();
		let ORDERS_PAGE = document.querySelector(".orders-page");
		if (ORDERS_PAGE == null) {
			console.log("testing");
		} else {
			ORDERS_PAGE.hidden = true;
		}
	},
};

export { CHECKOUT };
