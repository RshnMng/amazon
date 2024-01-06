import { products } from "./product.js";
import { LOCAL_STORAGE } from "./localStorage.js";

const ORDERS = {
	addEventsToBuyBtns: function () {
		const BUY_BTNS = document.querySelectorAll(".buy-again-btn");
		BUY_BTNS.forEach((button) => {
			button.addEventListener("click", (event) => {
				let target = event.target.parentElement;
				console.log(target);
				let index = target.getAttribute("homepageindex");
				let selectedProduct = products[index];
				console.log(selectedProduct);
			});
		});
	},
};

export { ORDERS };

// the buy it again button isnt working properly - the funcitonlatiy works sometimes and then works differently
// if i leave the page, and then doesnt work at all when i leave again and come back =

// i believe it is because i am emptying the page and then repopulating it instead of hiding it, causing the
// add event listeners to be removed and not reapplied in the same way when the page is loaded under different
// circumstances

// hide and show the page, so the event listeners remain intact and then make it so the saved product variale in
// the above function is saved into local storage cartItems but in the same format that the products are saved in
// when added from the home page - something like - {itemQuantitiy : etc, prorduct : {object of info insdide}}

// double check in the local storage and match it to that, so we can call whatever fucntion that handles cartItems
// and then hopefully we can run update totals function in display and that will take care of the rest of  the
// funcionlity from there --- we hope.
