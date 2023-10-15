const CHECKOUT_DATA = {
  cartDisplayElem: document.querySelector(".cart-display"),
  cartCount: document.querySelector(".cart-count"),
  checkOutHeader: document.querySelector(".checkout-header"),
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
    this.checkOutHeader.innerHTML = `Checkout (${cartQuantity} items)`;
  },
};

export { CHECKOUT_DATA };
