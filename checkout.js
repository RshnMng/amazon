let ShitInCart;
let cartDisplay = document.querySelector(".js-cart-display");
let cartCount = document.querySelector(".cart-count");
let html = "";

cartDisplay.addEventListener("load", getLocal());

function getLocal() {
  let cartItems = localStorage.getItem("cartItems");
  let jsonCartQuantity = localStorage.getItem("cartQuantity");
  ShitInCart = JSON.parse(cartItems);
  let savedCartQuantity = JSON.parse(jsonCartQuantity);
  console.log(savedCartQuantity);
  showItems(savedCartQuantity);
}

function showItems(savedCartQuantity) {
  getCartStyling(savedCartQuantity);
  ShitInCart.forEach((item) => {
    html += `<p> item : ${item.item} - 
  quantity : ${item.quantity}</p>`;
  });

  cartDisplay.innerHTML = html;
}

function getCartStyling(savedCartQuantity) {
  if (savedCartQuantity < 10) {
    cartCount.classList.add("cart-count-under-ten");
  } else if (savedCartQuantity > 9 && savedCartQuantity < 100) {
    cartCount.classList.add("cart-count-over-ten");
  } else {
    cartCount.classList.add("cart-count-over-100");
  }
  cartCount.textContent = ` ${savedCartQuantity}`;
}
