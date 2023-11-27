import { products } from "./product.js";
import { SET_UP_DATA } from "./setPage.js";
import { CHECKOUT } from "./checkout.js";
import { UPDATE } from "./update.js";

const LOCAL_STORAGE = {
	itemAmount: 0,
	numberOfItemsInCart: 0,
	cartNumber: 0,
	cartCount: document.querySelector(".cart-count"),
	addSelectedItemToStorage: function () {
		this.itemAmount = this.getChosenItemAmount(event);
		let cartItems = this.getCartItems();
		if (cartItems == null) {
			let cartItems = [];
			this.addFirstProductToCart(cartItems);
		} else {
			this.isItemAlreadyInCart(cartItems);
		}
		CHECKOUT.cartQuantity = this.getNumberOfCartItems();
		this.getCartStyling(CHECKOUT.cartQuantity);
	},
	addFirstProductToCart: function (cartItems) {
		let productID = event.target.id;
		let productIndex = event.target.id - 1;
		let chosenProduct = products[productIndex];
		let itemQuantity = this.getChosenItemAmount(event);
		cartItems.push({
			itemQuantity: itemQuantity,
			chosenProduct: chosenProduct,
			id: productID,
		});
		this.setLocalStorageCartItems(cartItems);
		this.cartNumber = 1;
	},
	getChosenItemAmount: function (event) {
		SET_UP_DATA.currentProductIndex = event.target.parentElement.id - 1;
		let dropMenus = this.getdropMenu();
		let chosenItemQuantity = Number(dropMenus[SET_UP_DATA.currentProductIndex].value);
		return chosenItemQuantity;
	},
	getdropMenu: function () {
		let dropMenus = document.querySelectorAll(".drop-menu");
		return dropMenus;
	},
	isItemAlreadyInCart: function (cartItems) {
		let productID = event.target.id;
		let itemInCart = cartItems.some((item) => {
			return item.chosenProduct.id == productID;
		});
		if (itemInCart == true) {
			this.addItemAmountToExistingProduct(cartItems, productID, this.itemAmount);
		} else {
			this.addNewProductToExistingCart(cartItems, productID, this.itemAmount);
		}
	},
	addNewProductToExistingCart: function (cartItems, productID, itemAmount) {
		let product = products[productID - 1];
		cartItems.push({
			itemQuantity: itemAmount,
			chosenProduct: product,
			id: productID,
		}),
			this.setLocalStorageCartItems(cartItems);
		this.addDefaultShippingOptions();
	},
	addItemAmountToExistingProduct: function (cartItems, productID, itemAmount) {
		cartItems.forEach((item) => {
			if (productID === item.id) {
				item.itemQuantity += itemAmount;
			}
		});
		this.setLocalStorageCartItems(cartItems);
	},
	setLocalStorageCartItems: function (chosenItemAndQuantity) {
		let cartItems_JSON = JSON.stringify(chosenItemAndQuantity);
		localStorage.setItem("cartItems", cartItems_JSON);
	},
	getNumberOfCartItems: function () {
		let cartItems = localStorage.getItem("cartItems");
		if (cartItems == null) {
			return 0;
		} else {
			let itemsInCart = JSON.parse(cartItems);
			let total = itemsInCart.reduce((total, item) => {
				total += item.itemQuantity;

				return total;
			}, 0);
			CHECKOUT.cartQuantity = total;
			return total;
		}
	},
	getCartStyling: function (numberOfItemsInCart) {
		if (numberOfItemsInCart == null || numberOfItemsInCart == undefined) {
			numberOfItemsInCart = 0;
			this.cartCount.classList.add("cart-count-under-ten");
			this.cartCount.classList.remove("cart-count-over-100");
			this.cartCount.classList.remove("cart-count-over-ten");
		} else if (numberOfItemsInCart < 10) {
			this.cartCount.classList.add("cart-count-under-ten");
			this.cartCount.classList.remove("cart-count-over-100");
			this.cartCount.classList.remove("cart-count-over-ten");
		} else if (numberOfItemsInCart > 9 && numberOfItemsInCart < 100) {
			this.cartCount.classList.add("cart-count-over-ten");
			this.cartCount.classList.remove("cart-count-under-ten");
			this.cartCount.classList.remove("cart-count-over-100");
		} else {
			this.cartCount.classList.add("cart-count-over-100");
			this.cartCount.classList.remove("cart-count-over-ten");
			this.cartCount.classList.remove("cart-count-under-ten");
		}
		this.cartCount.textContent = ` ${numberOfItemsInCart}`;
	},
	getCartItems: function () {
		let cartItems = localStorage.getItem("cartItems");
		let itemsInCart = JSON.parse(cartItems);
		return itemsInCart;
	},
	getLocalTotals: function () {
		let totalsJSON = localStorage.getItem("currentTotals");
		let currentTotals = JSON.parse(totalsJSON);
		return currentTotals;
	},
	addDefaultShippingOptions: function () {
		let currentTotals = LOCAL_STORAGE.getLocalTotals();
		if (currentTotals == null) return;

		const SHIPPING_OPTIONS_JSON = localStorage.getItem("selectedShipping");
		let selectedShipping = JSON.parse(SHIPPING_OPTIONS_JSON);

		selectedShipping.push("option-1");
		UPDATE.storeLocalShipping(selectedShipping);
	},
};

export { LOCAL_STORAGE };
