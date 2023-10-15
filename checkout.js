import { CHECKOUT_DATA } from "./checkout_1.js";

const CHECKOUT = {
  CART_LINK: document.querySelector(".cart-link"),
  HOME_PAGE: document.querySelector(".home-page"),
  BODY: document.querySelector("body"),
  cartDisplayElem: document.querySelector(".cart-display"),
  cartCount: document.querySelector(".cart-count"),
  loadCheckoutPage: function () {
    CHECKOUT.hideHomePage();
    CHECKOUT.loadHeader();
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
    <div class='items'>items(4)</div>
    <div class='item-price>60.79</div>
    <div class='shipping'>Shipping & handling</div>
    <div class='shipping-price'>0.00</div>
    <div class='before-tax'>Total before tax</div>
    <div class='before-tax-total'>60.79</div>
    <div class='tax-total'>Estimated tax (10%)</div>
    <div class='tax-total-price>6.08</div>
    <div class='total'>Order total:</div>
    <div class='total-cost'>66.87</div>
    <div class='paypal'>Use PayPal</div>
    <input type='checkbox'></input>
    <button class='place-order'>place your order</button>
    </div>
    <div class="cart-display js-cart-display"></div>`;
    CHECKOUT_PAGE.innerHTML = headerHtml;
    CHECKOUT.BODY.append(CHECKOUT_PAGE);
    let cartQuantity = CHECKOUT.getCartQuantity();
    this.displayCheckoutAmount(cartQuantity);
  },
  getCartQuantity: function () {
    let cartQuantityJson = localStorage.getItem("cartQuantity");
    let cartQuantity = Number(JSON.parse(cartQuantityJson));
    return cartQuantity;
  },
  getCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    let itemsInCart = JSON.parse(cartItems);
    return itemsInCart;
  },

  displayCart: function (cartItems) {
    let html = "";
    cartItems.map((product) => {
      let checkoutHTML = ``;
    });
  },
  displayCheckoutAmount: function (cartQuantity) {
    let checkOutHeader = document.querySelector(".checkout-header");
    checkOutHeader.innerHTML = `Checkout (<span class= 'checkout-count'>${cartQuantity} items </span>)`;
  },
};

export { CHECKOUT };
