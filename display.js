import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DATES } from "./dates.js";
import { UPDATE } from "./update.js";
import { SET_UP_DATA } from "./setPage.js";

const DISPLAY = {
	firstLoad: true,
	hideHomePage: function () {
		CHECKOUT.HOME_PAGE.hidden = true;
		CHECKOUT.NAV_BAR.hidden = true;
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
    <div class='payment-div'>
    <div class='paypal-div'>
    <div class='paypal'>Use PayPal</div>
     <input class='paypal-checkbox' type='checkbox'></input>
    </div>
    <button class='place-order'>place your order</button>
    <div class='paypal-credit-div'>
     <a href='https://www.paypal.com/signin' target='_blank'>
    <button class='paypal-link-btn'>
    <img class='paypal-link-photo' src='Logo-PayPal-transparent-PNG.png'  />
    </button>
    </a>
    <button class='credit-card-btn'>
    <img class='credit-logo' src='white-visa-credit-card-payment-icon-png-img-21635327395glgmljx3da.png' height=45 />
    <span class='credit-text'> Debit or Credit Card</span></button>
    <form class='billing-form' autocomplete='false'>
    <div class='x-div'>
    <div class='x-out'> X </div>
    </div>
    <div class='innocent-number-div input-div'>
    <input class='pay-form' type='text' name='innocent-number' id='innocent-number' minlength=19 maxlength=19 placeholder='Enter Number' required />
    <div class='input-label'>Enter #</div>
    <img class='warning' id='card-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='card-warning-label'>Please Enter A Valid CC#</div>
    </div>
   <div class='expire-cvv-div '>
    <div class='expires-div'>
    <input class='pay-form' type='text' name='expires' id='expires' minlength=5 maxlength=5 placeholder='MM/YY' required />
     <div class='input-label'>Expires</div>
    <img class='warning' id='expires-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='expires-warning-label'>Required</div>
    </div>
     <div class='cvv-div '>
    <input class='pay-form' type='text' name='cvv' id='cvv' minlength=3 maxlength=3 placeholder='CVV' required/>
    <div class='input-label'>CVV</div>
    <img class='warning' id='cvv-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='cvv-warning-label'>Required</div>
    </div>
    </div>
    <p class='billing-header'> Billing Address </p>
    <div class='name-div'>
    <div class='fn-billing-div '>
    <input class='pay-form' name='first name' id='first-name-billing' type='text' placeholder='First name' required/>
    <div class='input-label'>First Name</div>
     <img class='warning' id='fn-billing-warning-logo' src='warning.png' width=25 />
     <div class='warning-label' id='fn-billing-warning-label'>Required</div>
    </div>
    <div class='ln-billing-div '>
    <input class='pay-form' name='last name' id='last-name-billing' type='text' placeholder='Last name' required/>
    <div class='input-label'>Last Name</div>
    <img class='warning' id='ln-billing-warning-logo' src='warning.png' width=25 />
     <div class='warning-label' id='ln-billing-warning-label'>Required</div>
    </div>
    </div>
    <div class='addy-billing-div input-div'>
    <input class='pay-form' name='address' id='address-billing' type='text' placeholder='Street address' required/>
    <div class='input-label'>Address</div>
    <img class='warning' id='addy-billing-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='addy-billing-warning-label'>Required</div>
    </div>
     <div class='apt-billing-div input-div'>
    <input class='pay-form' name='apt' id='apt-billing' type='text' placeholder='Apt./ bldg.' required/>
    <div class='input-label'>Apartment / Building # </div>
    <img class='warning' id='apt-billing-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='apt-billing-warning-label'>Required</div>
    </div>
     <div class='city-billing-div input-div'>
    <input class='pay-form' name='city' id='city-billing' type='text' placeholder='City' required />
    <div class='input-label'>City </div>
    <img class='warning' id='city-billing-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='city-billing-warning-label'>Required</div>
    </div>
     <div class='state-billing-div input-div'>
    <input class='pay-form' name='state' id='state-billing' type='text' placeholder='State' minlength=2 maxlength=2 required/>
    <div class='input-label'>State </div>
    <img class='warning' id='state-billing-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='state-billing-warning-label'>Required</div>
    </div>
    <div class='zip-billing-div input-div'>
    <input class='pay-form' name='zip' id='zip-billing' type='tel' placeholder='ZIP code' minlength=5 maxlength=5 required/>
    <div class='input-label'> ZIP Code </div>
    <img class='warning' id='zip-billing-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='zip-billing-warning-label'>Required</div>
     </div>
     <div class='phone-div input-div'>
     <input class='pay-form' name='phone' id='phone' type='tel' placeholder='Phone' minlength=14 maxlength=14 required/>
      <div class='input-label'> Phone </div>
    <img class='warning' id='phone-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='zip-billing-warning-label'>Required</div>
     </div>
     <div class='email-div input-div'>
      <input class='pay-form' name='email' id='email' type='text' placeholder='Email' required/>
       <div class='input-label'> Email </div>
      <img class='warning' id='phone-warning-logo' src='warning.png' width=25 />
      <div class='warning-label' id='phone-warning-label'>Required</div>
      </div>
       <p class='age-disclaimer'>By continiuing, you confirm that you're 18 years or older.</p>
      <div class='pay-now-div'>
       <button class='pay-now-btn' id='shipping-pay-btn'>Pay Now</button>
       </div>
      <input type='checkbox' class='shipping-checkbox' /><span>Ship to Shipping Address</span>
    </form>
    <form class='shipping-form'>
    <p>Shipping Address</p>
    <div class='name-div'>
     <div class='fn-shipping-div'>
    <input class='pay-form' name='first name' id='first-name-shipping' type='text' placeholder='First name' required/>
    <div class='input-label'>First Name</div>
     <img class='warning' id='fn-shipping-warning-logo' src='warning.png' width=25 />
      <div class='warning-label' id='fn-shipping-warning-label'>Required</div>
    </div>
    <div class='ln-shipping-div'>
    <input class='pay-form' name='last name' id='last-name-shipping'  type='text' placeholder='Last name' required/>
    <div class='input-label'>Last Name</div>
    <img class='warning' id='ln-shipping-warning-logo' src='warning.png' width=25 />
     <div class='warning-label' id='ln-shipping-warning-label'>Required</div>
    </div>
    </div>
    <div class='addy-shipping-div input-div'>
    <input class='pay-form' name='address' id='address-shipping'  type='text' placeholder='Street address' required/>
     <div class='input-label'>Address</div>
    <img class='warning' id='addy-shipping-warning-logo' src='warning.png' width=25 />
     <div class='warning-label' id='addy-shipping-warning-label'>Required</div>
    </div>
     <div class='apt-shipping-div input-div'>
    <input class='pay-form' name='apt' id='apt-shipping'  type='text' placeholder='Apt./ bldg.' required />
    <div class='input-label'>Apartment / Building # </div>
    <img class='warning' id='apt-shipping-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='apt-shipping-warning-label'>Required</div>
    </div>
    <div class='city-shipping-div input-div'>
    <input class='pay-form'  name='city' id='city-shipping' type='text' placeholder='City' required/>
    <div class='input-label'>City</div>
    <img class='warning' id='city-shipping-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='city-shipping-warning-label'>Required</div>
    </div>
     <div class='state-shipping-div input-div'>
    <input class='pay-form' name='state' id='state-shipping' type='text' placeholder='State' minlength=2 maxlength=2 required/>
     <div class='input-label'>State </div>
    <img class='warning' id='state-shipping-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='state-shipping-warning-label'>Required</div>
    </div>
    <div class='zip-shipping-div input-div'>
     <input class='pay-form' name='zip' id='zip-shipping' type='tel' placeholder='ZIP code' minlength=5 maxlength=5 required/>
     <div class='input-label'> ZIP Code </div>
    <img class='warning' id='zip-shipping-warning-logo' src='warning.png' width=25 />
    <div class='warning-label' id='zip-shipping-warning-label'>Required</div>
     </div> 
     <p class='age-disclaimer'>By continiuing, you confirm that you're 18 years or older.</p>
      <div class='pay-now-div'>
     <button class='pay-now-btn' id='shipping-pay-btn'>Pay Now</button> 
     </div>
    </form> 
      <div class='power-div'>
    <span class='power-text'>Powered By</span><img class='power-logo' src='Logo-PayPal-transparent-PNG.png' width=50/> 
    </div>
    </div>
    </div>
    </div>
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
		CHECKOUT.NAV_BAR.hidden = true;
		CHECKOUT_PAGE.hidden = false;
		UPDATE.updateTotals();
	},
	goToHomePage: function () {
		let CHECKOUT_PAGE = document.querySelector(".checkout-page");
		LOCAL_STORAGE.cartCount.textContent = LOCAL_STORAGE.getNumberOfCartItems();
		CHECKOUT.cartQuantity = LOCAL_STORAGE.getNumberOfCartItems();
		LOCAL_STORAGE.getCartStyling(CHECKOUT.cartQuantity, LOCAL_STORAGE.cartCount);
		CHECKOUT.HOME_PAGE.hidden = false;
		CHECKOUT.NAV_BAR.hidden = false;
		CHECKOUT_PAGE.hidden = true;
	},
	goToOrdersPage: function (event) {
		if (event.target.classList.contains("place-order")) {
			let CHECKOUT_PAGE = document.querySelector(".checkout-page");
			let PRODUCT_DISPLAY_DIV = document.querySelector(".product-display-div");
			this.saveOrderToLocal();
			PRODUCT_DISPLAY_DIV.innerHTML = "";
			CHECKOUT_PAGE.hidden = true;
			CHECKOUT.NAV_BAR.hidden = false;
		} else {
			CHECKOUT.HOME_PAGE.hidden = true;
			this.setUpOrdersPage();
		}
	},
	setUpOrdersPage: function () {
		console.log("set up orders page ran");
		let ordersPage = document.createElement("div");
		ordersPage.classList.add("orders-page");
		ordersPage.textContent = "ORDERS PAGE";
		CHECKOUT.BODY.append(ordersPage);
		this.displayOrder();
	},
	saveOrderToLocal: function () {
		let currentCart = LOCAL_STORAGE.getCartItems();
		let currentDate = new Date().toDateString();
		let orderTotal = CHECKOUT.totalPrice;
		let uniqueID = Date.now();

		let deliveryDates = document.querySelectorAll(".delivery-date");
		let i = 0;
		deliveryDates.forEach((date) => {
			currentCart[i].deliveryDate = deliveryDates[i].textContent;
			i++;
		});
		let totalOrder = {
			currentDate,
			orderTotal,
			uniqueID,
			currentCart,
		};

		CHECKOUT.savedOrders.push(totalOrder);
		let currentOrderJSON = JSON.stringify(CHECKOUT.savedOrders);
		localStorage.setItem("savedOrders", currentOrderJSON);
		let currentTotals = {
			cartItems: null,
			cartQuantity: 0,
			preTaxPrice: "0.00",
			shippingArr: [],
			shippingTotal: 0,
			tax: "0.00",
			totalArr: [],
			totalPrice: "0.00",
		};

		let selectedShipping = [];
		let selectedShippingJSON = JSON.stringify(selectedShipping);

		let cartItems = [];
		let cartItemsJSON = JSON.stringify(cartItems);

		let currentTotalsJSON = JSON.stringify(currentTotals);
		localStorage.setItem("currentTotals", currentTotalsJSON);
		localStorage.setItem("selectedShipping", selectedShippingJSON);
		localStorage.setItem("cartItems", cartItemsJSON);
		CHECKOUT.cartCount.textContent = 0;
	},

	resetCart: function () {
		CHECKOUT.cartItems = "";
		let cartItems = [];
		let cartItemsJSON = JSON.stringify(cartItems);
		LOCAL_STORAGE.setLocalStorageCartItems(cartItemsJSON);
		UPDATE.emptyValues();
	},
	displayOrder: function () {
		console.log("display order ran");
		const ORDER_MAIN = document.createElement("div");
		ORDER_MAIN.classList.add("order-main");
		CHECKOUT.BODY.append(ORDER_MAIN);
	},
};

export { DISPLAY };

//begin building the orders page -- the local storage has all the orders functionality
// that you need, no we just need to just build the display first and then the styling
