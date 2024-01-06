import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";
import { DATES } from "./dates.js";
import { UPDATE } from "./update.js";
import { ORDERS } from "./orders.js";

const DISPLAY = {
	firstLoad: true,
	ordersFirstLoad: true,
	ordersPageExist: false,
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

		const ORDERS_PAGE = document.querySelector(".orders-page");

		if (ORDERS_PAGE == null) {
			return;
		} else {
			ORDERS_PAGE.hidden = true;
		}
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
			console.log("show empty not ran");
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
		let ORDERS_PAGE = document.querySelector(".orders-page");
		let emptyDiv = document.querySelector(".empty");
		CHECKOUT.HOME_PAGE.hidden = true;
		CHECKOUT.NAV_BAR.hidden = true;
		CHECKOUT_PAGE.hidden = false;
		UPDATE.updateTotals();

		if (ORDERS_PAGE == null) {
			console.log("testing");
		} else {
			console.log("orders page should be shut down");
			ORDERS_PAGE.hidden = true;
		}
		let cartItems = LOCAL_STORAGE.getCartItems();
		console.log(cartItems);

		if (cartItems == null || cartItems.length == 0) {
			console.log(emptyDiv);
			console.log("this ran");
			emptyDiv.hidden = false;
		}
	},
	hideEmptyDiv: function (emptyDiv) {
		if (emptyDiv == null) {
			console.log("testing");
		} else {
			emptyDiv.hidden = true;
		}
	},
	goToHomePage: function () {
		let CHECKOUT_PAGE = document.querySelector(".checkout-page");
		const ORDERS_PAGE = document.querySelector(".orders-page");
		const ORDERS_PAGE_DISPLAY = document.querySelector(".order-page-display-div");
		LOCAL_STORAGE.cartCount.textContent = LOCAL_STORAGE.getNumberOfCartItems();
		CHECKOUT.cartQuantity = LOCAL_STORAGE.getNumberOfCartItems();
		LOCAL_STORAGE.getCartStyling(CHECKOUT.cartQuantity, LOCAL_STORAGE.cartCount);
		CHECKOUT.HOME_PAGE.hidden = false;
		CHECKOUT.NAV_BAR.classList.remove("move-up");
		CHECKOUT.NAV_BAR.hidden = false;
		let emptyDiv = document.querySelector(".empty");

		if (emptyDiv == null) {
			console.log("whatever");
		} else {
			emptyDiv.hidden = true;
		}

		if (ORDERS_PAGE == null) {
			console.log("order page doesnt exist");
		} else {
			ORDERS_PAGE.hidden = true;
		}
		if (CHECKOUT_PAGE == null) {
			console.log("testing");
		} else {
			CHECKOUT_PAGE.hidden = true;
		}

		// the ordrs page doesnt become hidden when this function runs // fix that

		// this.emptyOrderPageDisplay();
	},
	goToOrdersPage: function (event) {
		if (event.target.classList.contains("place-order")) {
			let CHECKOUT_PAGE = document.querySelector(".checkout-page");
			let PRODUCT_DISPLAY_DIV = document.querySelector(".product-display-div");
			this.saveOrderToLocal();
			PRODUCT_DISPLAY_DIV.innerHTML = "";
			CHECKOUT_PAGE.hidden = true;
			CHECKOUT.NAV_BAR.hidden = false;
			CHECKOUT.NAV_BAR.classList.add("move-up");
			this.setUpOrdersPage();
		} else {
			CHECKOUT.HOME_PAGE.hidden = true;
			CHECKOUT.NAV_BAR.classList.add("move-up");

			this.setUpOrdersPage();
		}
	},
	setUpOrdersPage: function () {
		if (this.ordersFirstLoad == true) {
			let ordersPage = document.createElement("div");
			ordersPage.classList.add("orders-page");
			CHECKOUT.BODY.append(ordersPage);
			const ORDER_MAIN = document.createElement("div");
			ORDER_MAIN.classList.add("order-main");
			ordersPage.append(ORDER_MAIN);
			const HEADER = document.createElement("div");
			HEADER.classList.add("order-page-header");
			HEADER.innerHTML = ` <p class='order-page-header-text'> Your Orders </p> `;
			ORDER_MAIN.append(HEADER);
			const ORDER_PAGE_DISPLAY_DIV = document.createElement("div");
			ORDER_PAGE_DISPLAY_DIV.classList.add("order-page-display-div");
			ORDER_MAIN.append(ORDER_PAGE_DISPLAY_DIV);

			// above sets up header on order page regardless if page has any previous saved orders

			this.displayOrder(ORDER_PAGE_DISPLAY_DIV);
			this.ordersFirstLoad = false;
		} else {
			const ORDER_PAGE_DISPLAY_DIV = document.querySelector(".order-page-display-div");
			const ORDERS_PAGE = document.querySelector(".orders-page");
			this.displayOrder(ORDER_PAGE_DISPLAY_DIV);
			ORDERS_PAGE.hidden = false;
			let headerText = document.querySelector(".order-page-header-text");
			headerText.hidden = false;
		}
	},
	saveOrderToLocal: function () {
		let savedCart = LOCAL_STORAGE.getCartItems();
		let orderDate = new Date().toDateString();
		let uniqueID = Date.now();
		let orderTotal = document.querySelector(".total-cost").textContent;

		let deliveryDates = document.querySelectorAll(".delivery-date");
		let i = 0;
		deliveryDates.forEach((date) => {
			savedCart[i].deliveryDate = deliveryDates[i].textContent;
			i++;
		});
		let totalOrder = {
			orderDate,
			orderTotal,
			uniqueID,
			savedCart,
		};

		let savedOrdersJSON = localStorage.getItem("savedOrders");
		let savedOrders = JSON.parse(savedOrdersJSON);

		if (savedOrders == null) {
			CHECKOUT.savedOrders = [];
		} else {
			CHECKOUT.savedOrders = savedOrders;
		}

		CHECKOUT.savedOrders.unshift(totalOrder);
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
	displayOrder: function (ORDER_PAGE_DISPLAY_DIV) {
		let savedOrdersJSON = localStorage.getItem("savedOrders");
		let savedOrders = JSON.parse(savedOrdersJSON);

		if (savedOrders == null) {
			this.showEmptyOrders();
		} else {
			this.test(savedOrders, ORDER_PAGE_DISPLAY_DIV);
		}
	},

	test: function (savedOrders, ORDER_PAGE_DISPLAY_DIV) {
		let orderHtml = "";
		let i = 0;
		let thisCart = savedOrders.map((order) => {
			orderHtml += `
        <div class='order-page-display'>
             <div class='order-info'>
                 <div class='order-placed-div order-label-divs'>
                     <div class='order-placed-label order-label'>Order Placed:</div>
                     <div class='order-placed-text'> ${order.orderDate}</div>
                  </div>

                  <div class='order-total-div order-label-divs'>
                       <div class='order-total-label order-label'>Total:</div>
                       <div class='order-total-text'>${order.orderTotal}</div>
                  </div>
                  <div class='order-id-div order-label-divs'>
                        <div class='order-id-label order-label'>Order Id:</div>
                        <div class='order-id-text'>${order.uniqueID}</div>
                  </div> 
        </div>
        <div class='order-product-div' id='order-div-${i}'>
        </div>
        </div>
        `;
			let thisCart = order.savedCart;
			i++;
			return thisCart;
		});
		ORDER_PAGE_DISPLAY_DIV.innerHTML = orderHtml;
		this.displayPurchasedProducts(thisCart);
	},

	displayPurchasedProducts: function (thisCart) {
		let cartHtml = "";
		let i = 0;
		let secTest = thisCart.map((cart) => {
			let j = 0;
			let testing = cart.map((product) => {
				cartHtml = `
				<div class='bought-product-div' id="bought-product-div${i}">
				    <div class='order-photo-div'>
                <img class='order-item-img' src='${product.chosenProduct.image}'/>
            </div>
            <div class='order-info-div'>
                <div class='order-name-div  order-facts'> 
                      <p class='order-item-name'>${product.chosenProduct.name}</p>
                </div>
                <div class='order-arrive-div> order-facts'>
                      <p class='order-arrive-date'>${product.deliveryDate}</p>
                      <p class='order-item-count'>Quantity: ${product.itemQuantity}</p>
                </div>
                <div class='order-track-div order-facts'>
				<div class='buy-div'>
                      <button class='buy-again-btn' id='${product.id}' quantity='${product.itemQuantity}' homepageindex='${product.id - 1}'>
                            <img class='buy-again-logo' src='	https://supersimple.dev/projects/amazon/images/icons/buy-again.png' >
                      <p class='buy-btn-label'>Buy it again</p>
                      
                      </button>
				</div>
                      <button class='tracking-btn'>Track Package</button>
                </div>
            </div>
				</div>
				`;
				j++;
				return cartHtml;
			});
			i++;
			return testing;
		});
		this.loopOrderProductDiv(secTest);
		ORDERS.addEventsToBuyBtns();
	},

	loopOrderProductDiv: function (secTest) {
		let productDivs = document.querySelectorAll(".order-product-div");
		let i = 0;
		secTest.map((cart) => {
			cart.map((cartItem) => {
				let productDiv = productDivs[i];
				productDiv.innerHTML += cartItem;
			});
			i++;
		});
	},

	showEmptyOrders: function () {
		console.log(DISPLAY.ordersPageExist);
		if (DISPLAY.ordersPageExist == false) {
			let orderPageDisplayDiv = document.querySelector(".order-page-display-div");
			let emptyLogodiv = document.createElement("div");
			emptyLogodiv.classList.add("empty-orders-logo-div");
			let emptyLogo = document.createElement("img");
			emptyLogo.setAttribute("src", "https://stylesage.co/blog/content/images/2018/10/sad_amazon.0.png");
			emptyLogo.classList.add("empty-logo-img");
			emptyLogodiv.append(emptyLogo);
			orderPageDisplayDiv.append(emptyLogodiv);
			let emptyOrdersLabelDiv = document.createElement("div");
			emptyOrdersLabelDiv.classList.add("empty-label-div");
			emptyOrdersLabelDiv.innerHTML = `<p class='empty-order-label'>Oh No! You haven't made <span class='any-text'>any orders</span> yet! Go back to the home page and keep shopping!</p>`;
			orderPageDisplayDiv.append(emptyOrdersLabelDiv);
			let homeBTN = document.createElement("button");

			let emptyBtnDiv = document.createElement("div");
			emptyBtnDiv.classList.add("empty-btn-div");
			homeBTN.classList.add("empty-order-btn");
			homeBTN.textContent = "View Products";
			emptyBtnDiv.append(homeBTN);
			orderPageDisplayDiv.append(emptyBtnDiv);
			let headerText = document.querySelector(".order-page-header-text");
			headerText.hidden = true;
			DISPLAY.ordersPageExist = true;
			console.log(DISPLAY.ordersPageExist);
		} else {
			const ORDERS_PAGE = document.querySelector(".orders-page");
			ORDERS_PAGE.hidden = false;
			headerText.hidden = false;
		}
	},
};

export { DISPLAY };
