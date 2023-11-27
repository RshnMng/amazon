import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DATES } from "./dates.js";
import { UPDATE } from "./update.js";

const DISPLAY = {
	firstLoad: true,
	hideHomePage: function () {
		CHECKOUT.HOME_PAGE.hidden = true;
	},
	setUpPage: function () {
		DISPLAY.hideHomePage();
		DISPLAY.loadHeader();
		DISPLAY.hideUpdateDropMenu();
		DISPLAY.displayCheckoutAmount();
		DATES.getDates();
		UPDATE.updateTotals();
	},
	displayCheckoutAmount: function () {
		let checkOutHeader = document.querySelector(".checkout-header");
		let itemsDisplay = document.querySelector(".items");
		checkOutHeader.innerHTML = `Checkout (<span class= 'checkout-count'>${LOCAL_STORAGE.getNumberOfCartItems()} items </span>)`;
		itemsDisplay.innerHTML = `Items(${LOCAL_STORAGE.getNumberOfCartItems()})`;
	},
	hideUpdateDropMenu: function () {
		const UPDATE_DIV = document.querySelectorAll(".update");
		UPDATE_DIV.forEach((update) => {
			update.hidden = true;
		});
	},
	loadHeader: function () {
		let CHECKOUT_PAGE = document.createElement("div");
		CHECKOUT_PAGE.classList.add("checkout-page");
		let headerHtml = `
    <div class='checkout-page'>
    <nav class="header-content">
      <div class="logo-container">
        <span class='amazon-logo-link'>
           <img
            class="checkout-logo"
            src="https://supersimple.dev/projects/amazon/images/amazon-logo.png"
          />
        </span>
      </div>
      <div class="checkout-div">
        <div class="checkout-header"></div>
      </div>
      <div class="lock-div">
        <img
          class="lock-img"
          src="https://supersimple.dev/projects/amazon/images/icons/checkout-lock-icon.png"
        />
      </div>
    </nav>
    <main class='checkout-main'>
  
    <header class='review-header'> Review your Order </header>
     <div class='summary-border'>
    <div class='order-summary'>
    <header class='order-header'> Order Summary </header>
    <div class='items'>Items(${LOCAL_STORAGE.getNumberOfCartItems()})</div>
    <div class='shipping-div'>
    <div class='shipping'>Shipping & handling</div>
    <div class='shipping-price'></div>
    </div>
    <div class='beforeTax-div'>
    <div class='before-tax'>Total before tax</div>
    <div class='before-tax-total'></div>
    </div>
    <div class='tax-div'>
    <div class='tax-total'>Estimated tax (10%)</div>
    <div class='tax-total-price'></div>
    </div>
    <div class='order-total'>
    <div class='total'>Order total:</div>
    <div class='total-cost'></div>
    </div>
    <div class='paypal-div'>
    <div class='paypal'>Use PayPal</div>
     <input class='paypal-checkbox' type='checkbox'></input>
    </div>
    <button class='place-order'>place your order</button>
    </div>
    <div class="product-display-div"></div>
    </div>
   </main>
    `;
		CHECKOUT_PAGE.innerHTML = headerHtml;
		CHECKOUT.BODY.append(CHECKOUT_PAGE);
	},
	displayCart: function (cartItems) {
		this.firstLoad = false;
		let PRODUCT_DISPLAY_DIV = document.querySelector(".product-display-div");
		let i = 0;
		if (cartItems == null || cartItems.length == 0) {
			this.showEmpty();
		} else {
			let productHtml = "";
			cartItems.map((product) => {
				productHtml += `
        <div class='product-display' productIndex=${product.chosenProduct.id} localStorageIndex=${i}>
          <header class='delivery-date'>Delivery date: ${DATES.fiveDay}, ${DATES.fiveDayMonth} ${DATES.fiveDayDate}</header>  
              <div class='product-info-div'>
                <div class='checkout-img-div'>
                  <img class='checkout-img' src="${product.chosenProduct.image}"/>
                </div> 

            <div class='product-info'>
                 <h3 class='product-name'>${product.chosenProduct.name}</h3>
                <div class='price'>
                 $${Number(product.chosenProduct.priceCents / 100).toFixed(2)}
                </div>
                <div class='product-quantity-div'>
                    <div class='product-quantity'> Quantity: ${product.itemQuantity}
                </div> 
                <div class='update'>
                  <select class='select-update-number'>
                    <option class='update-number'>0</option>
                    <option class='update-number'>1</option>
                    <option class='update-number'>2</option>
                    <option class='update-number'>3</option>
                    <option class='update-number'>4</option>
                    <option class='update-number'>5</option>
                    <option class='update-number'>6</option>
                    <option class='update-number'>7</option>
                    <option class='update-number'>8</option>
                    option class='update-number'>9</option>
                    <option class='update-number'>10</option>
                  </select>
                </div>
                 <div class='link-div'>
                    <div class='update-link-div'>
                            <span class='update-link' href='#' localStorageIndex=${i}> Update</span>
                    </div> 
                    <div class='delete' id='${product.chosenProduct.id}'>
                            <span class='delete-link' id='${product.chosenProduct.id}'>Delete</span>
                     </div>
                  </div> 
                                                                                                                            
            </div> 
        </div> 
      </div> 
        <div>
          <div class='delivery-div'>
       </div>                         
       </div> 
       <h3 class='delivery-header'>Choose a delivery option:</h3>
       <div class='shipping-option-div'>
       <div class='option-1 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' checked/>
       </div>
       <div class='date-div'>
       <div class='date'>${DATES.fiveDay}, ${DATES.fiveDayMonth} ${DATES.fiveDayDate}</div>
       <div class='shipping-cost'>FREE Shipping</div>
       </div>
        </div>
            <div class='option-2 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' />
       </div>
       <div class='date-div'>
       <div class='date'>${DATES.threeDay}, ${DATES.threeDayMonth} ${DATES.threeDayDate}</div>
       <div class='shipping-cost'>$4.99 Shipping</div>
       </div>
       </div>
       <div class='option-3 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' />
       </div>
       <div class='date-div'>
       <div class='date'>${DATES.nextDay}, ${DATES.nextDayMonth} ${DATES.nextDayDate}</div>
       <div class='shipping-cost'>$9.99 Shipping</div>
       </div>
       </div>
        </div>
        </div>
        </div> 
         </div>
      `;

				i += 1;
				PRODUCT_DISPLAY_DIV.innerHTML = productHtml;
				let CHECKOUT_MAIN = document.querySelector(".checkout-main");
				CHECKOUT_MAIN.append(PRODUCT_DISPLAY_DIV);
			});
		}
	},
	showEmpty: function () {
		const EMPTY_DIV = document.querySelector(".empty");
		const ESTIMATED_TAX = document.querySelector(".tax-total-price");
		const BEFORE_TAX_DIV = document.querySelector(".before-tax-total");
		ESTIMATED_TAX.textContent = `$0.00`;
		BEFORE_TAX_DIV.textContent = `$0.00`;

		if (!document.body.contains(EMPTY_DIV)) {
			DISPLAY.addEmptyCart();
		}
	},
	displayTotalBeforeTax(total) {
		const BEFORE_TAX_DIV = document.querySelector(".before-tax-total");
		BEFORE_TAX_DIV.textContent = `$${total}`;
	},
	displayShippingTotal(shippingTotal) {
		let SHIPPING_PRICE_DIV = document.querySelector(".shipping-price");
		if (shippingTotal == 0 || shippingTotal == null) {
			SHIPPING_PRICE_DIV.innerText = "$0.00";
		} else {
			SHIPPING_PRICE_DIV.innerText = `$${CHECKOUT.shippingTotal}`;
		}
	},
	addEmptyCart: function () {
		const CHECKOUT_MAIN = document.querySelector(".checkout-main");
		const EMPTY_DIV = document.createElement("div");
		EMPTY_DIV.classList.add("empty");
		const EMPTY_HEADER = document.createElement("div");
		EMPTY_HEADER.classList.add("empty-header");
		EMPTY_HEADER.textContent = "Your cart is empty.";
		const EMPTY_BUTTON = document.createElement("button");
		EMPTY_BUTTON.classList.add("empty-button");
		EMPTY_BUTTON.textContent = "View Products";
		EMPTY_DIV.append(EMPTY_HEADER);
		EMPTY_DIV.append(EMPTY_BUTTON);
		CHECKOUT_MAIN.append(EMPTY_DIV);
		const ADD_CART_BTN = document.querySelector(".place-order");
		ADD_CART_BTN.setAttribute("disabled", "");
		EMPTY_BUTTON.addEventListener("click", () => {
			DISPLAY.goToHomePage();
			EMPTY_DIV.remove();
		});
	},
	convertIntoFloatNumber: function (data) {
		let number = Number(data);
		let float = number / 100;
		let price = float.toFixed(2);
		return price;
	},

	goToCheckoutPage: function () {
		let CHECKOUT_PAGE = document.querySelector(".checkout-page");
		CHECKOUT.HOME_PAGE.hidden = true;
		CHECKOUT_PAGE.hidden = false;
		UPDATE.updateTotals();
	},
	goToHomePage: function () {
		let CHECKOUT_PAGE = document.querySelector(".checkout-page");
		LOCAL_STORAGE.cartCount.textContent = LOCAL_STORAGE.getNumberOfCartItems();
		CHECKOUT.cartQuantity = LOCAL_STORAGE.getNumberOfCartItems();
		LOCAL_STORAGE.getCartStyling(CHECKOUT.cartQuantity);
		CHECKOUT.HOME_PAGE.hidden = false;
		CHECKOUT_PAGE.hidden = true;
	},
};

export { DISPLAY };
