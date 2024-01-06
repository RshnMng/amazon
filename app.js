import { products } from "./product.js";
import { SET_UP_DATA } from "./setPage.js";
import { SEARCH } from "./search.js";
import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DISPLAY } from "./display.js";

const APP = (function () {
	// EVENTS HAPPENING ON PAGE LOAD //
	SET_UP_DATA.setUpPage(products);

	// CART //
	let savedCartQuantity = LOCAL_STORAGE.getNumberOfCartItems(event);
	LOCAL_STORAGE.getCartStyling(savedCartQuantity, LOCAL_STORAGE.cartCount);

	// SEARCH //
	const SEARCH_BAR = SEARCH.getSEARCH_BAR();
	const SEARCH_BTN = SEARCH.getSEARCH_BTN();
	SEARCH.addSEARCH_EVENT_LISTENERS(SEARCH_BAR, SEARCH_BTN);

	// CHECKOUT //
	CHECKOUT.CART_LINK.addEventListener("click", () => {
		if (SET_UP_DATA.firstLoad == true) {
			CHECKOUT.loadCheckoutPage();
			SET_UP_DATA.firstLoad = false;
		} else {
			DISPLAY.goToCheckoutPage();
		}
	});
})();
