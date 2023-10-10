const CART = {
  cartCount: document.querySelector(".cart-count"),
  getdropMenu: function () {
    let dropMenus = document.querySelectorAll(".drop-menu");
    return dropMenus;
  },

  getPageCartQuantity: function () {
    return CART.cartCount.innerText;
  },

  updatePageCartQuantity: function (event) {
    let cartQuantity = Number(this.getPageCartQuantity());
    let dropMenus = this.getdropMenu();
    let itemQuantity = Number(dropMenus[event.target.id - 1].value);
    let newQuantity = cartQuantity + itemQuantity;
    this.cartCount.innerText = newQuantity;
    this.getCartStyling(newQuantity);
    return newQuantity;
  },

  setLocalStorageCartQuantity: function (number) {
    let jsonQuantity = JSON.stringify(number);
    localStorage.setItem("cartQuantity", jsonQuantity);
  },

  getLocalStorageCartQuantity: function () {
    const JSON_CART = localStorage.getItem("cartQuantity");

    let savedCartQuantity = JSON.parse(JSON_CART);
    if (savedCartQuantity == null) {
      savedCartQuantity = 0;
    }
    return savedCartQuantity;
  },

  getCartStyling: function (savedCartQuantity) {
    if (savedCartQuantity < 10) {
      CART.cartCount.classList.add("cart-count-under-ten");
      CART.cartCount.classList.remove("cart-count-over-100");
      CART.cartCount.classList.remove("cart-count-over-ten");
    } else if (savedCartQuantity > 9 && savedCartQuantity < 100) {
      CART.cartCount.classList.add("cart-count-over-ten");
      CART.cartCount.classList.remove("cart-count-under-ten");
      CART.cartCount.classList.remove("cart-count-over-100");
    } else {
      CART.cartCount.classList.add("cart-count-over-100");
      CART.cartCount.classList.remove("cart-count-over-ten");
      CART.cartCount.classList.remove("cart-count-under-ten");
    }
    CART.cartCount.textContent = ` ${savedCartQuantity}`;
  },
};

export { CART };

// function setCartQuantity(number) {
//   let jsonQuantity = JSON.stringify(number);
//   localStorage.setItem("cartQuantity", jsonQuantity);
//   getSavedCartQuantity();
// }

// let quantity = getCartQuantity(event);
//     updateCartQuantity(quantity);
//     let productObject = makePoductObject(quantity, event);
//     showAdded(event);
//     createCart(productObject, quantity);

// export function createCart(productObject, quantity) {
//   let jsonCart = localStorage.getItem("cartItems");
//   let isEmpty = JSON.parse(jsonCart);

//   if (isEmpty == null) {
//     let cartItems = [];
//     cartItems.push(productObject);
//     saveLocal(cartItems);
//   } else {
//     let cartItems = isEmpty;
//     addToCart(productObject, quantity, cartItems);
//   }
// }

// // this function checks to see if the product is already in the cart,
// // if it isnt, it adds it to the cart, if it isnt it passes it to the next
// // function

// export function addToCart(productObject, quantity, cartItems) {
//   let isItemInCart = cartItems.some((product) => {
//     return productObject.id === product.id;
//   });

//   if (isItemInCart) {
//     filterCart(cartItems, productObject, quantity);
//   } else {
//     cartItems.push(productObject);
//     saveLocal(cartItems);
//   }
// }

// // this takes the product object and finds the one that matches it in the
// // cart and just adds it quantity to the existing quantity -- to avoid duplicates

// function filterCart(cartItems, productObject, quantity) {
//   cartItems.forEach((product) => {
//     if (product.id == productObject.id) {
//       product.quantity += quantity;
//     }
//   });
//   saveLocal(cartItems);
// }

// function saveLocal(data) {
//   let dataString = JSON.stringify(data);
//   localStorage.setItem("cartItems", dataString);
// }
