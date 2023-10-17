const CHECKOUT = {
  CART_LINK: document.querySelector(".cart-link"),
  HOME_PAGE: document.querySelector(".home-page"),
  BODY: document.querySelector("body"),
  cartDisplayElem: document.querySelector(".cart-display"),
  cartCount: document.querySelector(".cart-count"),
  shippingTotal: 0,
  tax: 0,
  itemPrice: 0,
  totalPrice: 0,
  priceArr: [],
  loadCheckoutPage: function () {
    CHECKOUT.hideHomePage();
    CHECKOUT.loadHeader();
    CHECKOUT.displayShippingTotal(this.shippingTotal);
  },
  hideHomePage: function () {
    this.HOME_PAGE.hidden = true;
  },
  loadHeader: function () {
    let CHECKOUT_PAGE = document.createElement("div");
    CHECKOUT_PAGE.classList.add("checkout-page");
    let headerHtml = `<nav class="header-content">
      <div class="logo-container">
        <a href="index.html">
          <img
            class="checkout-logo"
            src="https://supersimple.dev/projects/amazon/images/amazon-logo.png"
          />
        </a>
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
    <h1> Review your Order </h1>
    <div class='order-summary'>
    <h2> Order Summary </h2>
    <div class='items'>items(${this.getCartQuantity()})</div>
    <div class='shipping'>Shipping & handling</div>
    <div class='shipping-price'></div>
    <div class='before-tax'>Total before tax</div>
    <div class='before-tax-total'></div>
    <div class='tax-total'>Estimated tax (10%)</div>
    <div class='tax-total-price'></div>
    <div class='total'>Order total:</div>
    <div class='total-cost'></div>
    <div class='paypal'>Use PayPal</div>
    <input type='checkbox'></input>
    <button class='place-order'>place your order</button>
    </div>
    <div class="cart-display js-cart-display"></div>`;
    CHECKOUT_PAGE.innerHTML = headerHtml;
    CHECKOUT.BODY.append(CHECKOUT_PAGE);
    let cartQuantity = CHECKOUT.getCartQuantity();
    this.displayCheckoutAmount(cartQuantity);
    let cartItems = this.getCartItems();
    this.displayCart(cartItems);
  },
  getCartQuantity: function () {
    let cartQuantityJson = localStorage.getItem("cartQuantity");
    let cartQuantity = Number(JSON.parse(cartQuantityJson));
    return cartQuantity;
  },
  getCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    let itemsInCart = JSON.parse(cartItems);
    this.getPriceBeforeTaxArr(itemsInCart);
    return itemsInCart;
  },
  displayCheckoutAmount: function (cartQuantity) {
    let checkOutHeader = document.querySelector(".checkout-header");
    checkOutHeader.innerHTML = `Checkout (<span class= 'checkout-count'>${cartQuantity} items </span>)`;
  },
  displayCart: function (cartItems) {
    let html = "";
    let i = 1;
    if (cartItems == null) {
      this.showEmpty();
    } else {
      cartItems.map((product) => {
        i += 1;
        html += `
        <div class='product-display'>
        <div class='delivery-date'>Delivery date: Tuesday, October 24</div>
        <div class='product-img'>
        <img class='checkout-img' src="${product.chosenProduct.image}" />
        <div class='product-info'>
        <h3 class='product-name'>${product.chosenProduct.name}</h3>
        <div class='price'>$${Number(
          product.chosenProduct.priceCents / 100
        ).toFixed(2)}</div>
        <div class='product-quantity-div'>
       <div class='product-quantity'> Quantity: ${product.itemQuantity}</div>
       <div class='update'><a class='update-link'>Update</a></div>
       <div class='delete'><a class='delete-link'>Delete</a></div>
       <div class='delivery-div'>
       <h3 class='delivery-header'>Choose a delivery option:</h3>
       <div class='option-div'>
       <div class='option-1 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' checked/>
       </div>
       <div class='date-div'>
       <div class='date'>Tuesday, October 24</div>
       <div class='shipping-cost'>FREE Shipping</div>
       </div>
        </div>
            <div class='option-2 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' />
       </div>
       <div class='date-div'>
       <div class='date'>Wednesday, October 18</div>
       <div class='shipping-cost'>$4.99 Shipping</div>
       </div>
       </div>
       <div class='option-3 option'>
       <div class='checkbox-div'>
       <input type='radio' name='shipping-${i}' class='radio-btn' />
       </div>
       <div class='date-div'>
       <div class='date'>Monday, October 16</div>
       <div class='shipping-cost'>$9.99 Shipping</div>
       </div>
       </div>
       </div>
        </div>
        </div>
        </div> 
      `;
      });
      let CART_DISPLAY = document.querySelector(".cart-display");
      CART_DISPLAY.innerHTML = html;
    }

    this.addEventsToRadioBtn();
  },
  showEmpty: function () {
    const ESTIMATED_TAX = document.querySelector(".tax-total-price");
    const BEFORE_TAX_DIV = document.querySelector(".before-tax-total");
    ESTIMATED_TAX.textContent = `$0.00`;
    BEFORE_TAX_DIV.textContent = `$0.00`;

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
    this.BODY.append(EMPTY_DIV);
    const ADD_CART_BTN = document.querySelector(".place-order");
    ADD_CART_BTN.setAttribute("disabled", "");
  },
  addEventsToRadioBtn: function () {
    let RADIO_BTS = document.querySelectorAll(".radio-btn");
    RADIO_BTS.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.getOptionDiv(event);
      });
    });
  },
  getOptionDiv: function (event) {
    let optionDiv = event.target.parentElement.parentElement.parentElement;
    let options = optionDiv.children;
    let optionsArr = Array.from(options);
    optionsArr.forEach((button) => {
      button.classList.remove("selected");
    });
    let optionBtn = event.target.parentElement.parentElement;
    optionBtn.classList.add("selected");
    this.getSelectedShippingOptions();
  },
  getSelectedShippingOptions() {
    let shippingArr = [];
    let check = document.querySelectorAll(".option");
    check.forEach((item) => {
      if (
        item.classList.contains("selected") &&
        item.classList.contains("option-2")
      ) {
        shippingArr.push(4.99);
      } else if (
        item.classList.contains("selected") &&
        item.classList.contains("option-3")
      ) {
        shippingArr.push(9.99);
      } else {
        return;
      }
    });
    this.shippingTotal = this.getShippingTotal(shippingArr);
  },
  getShippingTotal: function (shippingArr) {
    let total = shippingArr.reduce((total, shippingPrice) => {
      total += shippingPrice;
      return total;
    }, 0);
    this.shippingTotal = total;
    this.displayShippingTotal(this.shippingTotal);
  },
  displayShippingTotal(shippingTotal) {
    let SHIPPING_PRICE_DIV = document.querySelector(".shipping-price");
    if (shippingTotal == 0 || shippingTotal == null) {
      SHIPPING_PRICE_DIV.innerText = "$0.00";
    } else {
      SHIPPING_PRICE_DIV.innerText = `$${shippingTotal}`;
    }
    this.calculateTotal(this.tax, this.itemPrice, this.shippingTotal);
  },
  getPriceBeforeTaxArr: function (itemsInCart) {
    if (itemsInCart == null) {
    } else {
      itemsInCart.forEach((item) => {
        let itemPrice = Number(
          (item.itemQuantity * item.chosenProduct.priceCents) / 100
        ).toFixed(2);
        this.priceArr.push(itemPrice);
      });
      this.getTotalBeforeTax(this.priceArr);
    }
  },
  getTotalBeforeTax: function (priceArr) {
    let sum = priceArr.reduce((total, price) => {
      return (total += Number(price));
    }, 0);
    let total = sum.toFixed(2);
    this.itemPrice = total;
    this.displayTotalBeforeTax(total);
  },
  displayTotalBeforeTax(total) {
    const BEFORE_TAX_DIV = document.querySelector(".before-tax-total");
    BEFORE_TAX_DIV.textContent = `$${total}`;
    this.calculateTax(total);
  },
  calculateTax: function (total) {
    let tenPercent = total * 0.1;
    this.tax = tenPercent.toFixed(2);

    const ESTIMATED_TAX = document.querySelector(".tax-total-price");
    ESTIMATED_TAX.textContent = `$0.00`;
    ESTIMATED_TAX.textContent = `$${this.tax}`;
    this.calculateTotal(this.tax, this.itemPrice, this.shippingTotal);
  },
  calculateTotal(tax, total, shippingTotal) {
    let taxTotal = Number(tax);
    let itemTotal = Number(total);
    let price = taxTotal + itemTotal + shippingTotal;
    this.totalPrice = price.toFixed(2);
    const TOTAL_COST_DIV = document.querySelector(".total-cost");
    TOTAL_COST_DIV.textContent = `$${this.totalPrice}`;
  },
};

export { CHECKOUT };

//finish html for cart display, then make the page dynamic so it updates prices
// and delivery dates  based on real information.
