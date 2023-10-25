import { CHECKOUT } from "./checkout.js";
import { LOCAL_STORAGE } from "./localStorage.js";

const DISPLAY = {
  hideHomePage: function () {
    CHECKOUT.HOME_PAGE.hidden = true;
  },
  setUpPage: function () {
    DISPLAY.hideHomePage();
    DISPLAY.loadHeader();
    DISPLAY.hideUpdateDropMenu();
    DISPLAY.displayCheckoutAmount();
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
    <div class='items'>Items(${LOCAL_STORAGE.getNumberOfCartItems()})</div>
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
    <div class="cart-display js-cart-display"></div>
    </div>
    `;
    CHECKOUT_PAGE.innerHTML = headerHtml;
    CHECKOUT.BODY.append(CHECKOUT_PAGE);
  },
  displayCart: function (cartItems) {
    let html = "";
    let i = 0;
    if (cartItems == null) {
      this.showEmpty();
    } else {
      cartItems.map((product) => {
        html += `
        <div class='product-display' productIndex=${
          product.chosenProduct.id
        } localStorageIndex=${i}>
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
       <div class='update'><select class='select-update-number>
       <option class='update-number'>0</option>
       <option class='update-number'>1</option>
       <option class='update-number'>2</option>
       <option class='update-number'>3</option>
       <option class='update-number'>4</option>
       <option class='update-number'>5</option>
       <option class='update-number'>6</option>
       <option class='update-number'>7</option>
       <option class='update-number'>8</option>
       <option class='update-number'>9</option>
       <option class='update-number'>10</option>
       </select>
       </div>
       <div class='link-div'>
       <div class='update-link-div'><a class='update-link' localStorageIndex=${i}> Update</a></div>
       <div class='delete' id='${
         product.chosenProduct.id
       }' ><a class='delete-link' id='${
          product.chosenProduct.id
        }' >Delete</a></div>
       </div>
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
        i += 1;
      });
      let CART_DISPLAY = document.querySelector(".cart-display");
      CART_DISPLAY.innerHTML = html;
    }
  },
  showEmpty: function () {
    const ESTIMATED_TAX = document.querySelector(".tax-total-price");
    const BEFORE_TAX_DIV = document.querySelector(".before-tax-total");
    ESTIMATED_TAX.textContent = `$0.00`;
    BEFORE_TAX_DIV.textContent = `$0.00`;
    DISPLAY.addEmptyCart();
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
      SHIPPING_PRICE_DIV.innerText = `$${shippingTotal}`;
    }
  },
  addEmptyCart: function () {
    let CHECKOUT_PAGE = document.querySelector(".checkout-page");
    const CART_DISPLAY = document.querySelector(".cart-display");
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
    CART_DISPLAY.append(EMPTY_DIV);
    const ADD_CART_BTN = document.querySelector(".place-order");
    ADD_CART_BTN.setAttribute("disabled", "");
    EMPTY_BUTTON.addEventListener("click", () => {
      CHECKOUT.HOME_PAGE.hidden = false;
      CHECKOUT_PAGE.hidden = true;
    });
  },
  convertIntoFloatNumber: function (data) {
    let number = Number(data);
    let float = number / 100;
    let price = float.toFixed(2);
    return price;
  },
};

export { DISPLAY };
