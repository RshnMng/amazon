import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";

const TOTALS = {
	saveLocalTotals: function () {
		let currentTotals = {
			cartQuantity: LOCAL_STORAGE.getNumberOfCartItems(),
			shippingTotal: TOTALS.getShippingTotal(CHECKOUT.shippingArr),
			tax: CHECKOUT.tax,
			cartItems: LOCAL_STORAGE.getCartItems(),
			itemPrice: CHECKOUT.itemPrice,
			totalPrice: CHECKOUT.totalPrice,
			totalArr: CHECKOUT.totalArr,
			shippingArr: CHECKOUT.shippingArr,
		};
		console.log(currentTotals.cartQuantity);
		let CURRENT_TOTALS_JSON = JSON.stringify(currentTotals);
		localStorage.setItem("currentTotals", CURRENT_TOTALS_JSON);
	},
	getCartQuantity: function () {
		let cartQuantityJson = localStorage.getItem("cartQuantity");
		let cartQuantity = Number(JSON.parse(cartQuantityJson));
		CHECKOUT.cartQuantity = cartQuantity;
		console.log(CHECKOUT.cartQuantity);
		return cartQuantity;
	},
	getPriceBeforeTaxArr: function (itemsInCart) {
		if (itemsInCart == null) {
			return;
		} else {
			itemsInCart.forEach((item) => {
				let itemPrice = Number((item.itemQuantity * item.chosenProduct.priceCents) / 100).toFixed(2);
				CHECKOUT.totalArr.push(itemPrice);
			});
		}
	},
	getTotalBeforeTax: function (totalArr) {
		let sum = totalArr.reduce((total, price) => {
			return (total += Number(price));
		}, 0);
		let total = sum.toFixed(2);
		CHECKOUT.itemPrice = total;
	},
	getShippingTotal: function (shippingArr) {
		let totalStr = shippingArr.reduce((total, shippingPrice) => {
			total += Number(shippingPrice);
			return total;
		}, 0);

		let total = Number(totalStr.toFixed(2));

		return total;
	},
	calculateTotal(tax, total, shippingTotal) {
		let taxTotal = Number(tax);
		let itemTotal = Number(total);
		let price = taxTotal + itemTotal + shippingTotal;
		CHECKOUT.totalPrice = price.toFixed(2);
		const TOTAL_COST_DIV = document.querySelector(".total-cost");
		TOTAL_COST_DIV.textContent = `$${CHECKOUT.totalPrice}`;
	},
	calculateTax: function (total) {
		let tenPercent = total * 0.1;
		CHECKOUT.tax = tenPercent.toFixed(2);

		const ESTIMATED_TAX = document.querySelector(".tax-total-price");
		ESTIMATED_TAX.textContent = `$0.00`;
		ESTIMATED_TAX.textContent = `$${CHECKOUT.tax}`;
	},
};

export { TOTALS };
