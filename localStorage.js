import { products } from "./product.js";

const LOCAL_STORAGE = {
  itemAmount: 0,
  numberOfItemsInCart: 0,
  cartCount: document.querySelector(".cart-count"),
  addSelectedItemToStorage: function () {
    this.itemAmount = this.getChosenItemAmount(event);
    let cartItems = this.getCartItems();
    if (cartItems == null) {
      let cartItems = [];
      this.addFirstProductToCart(cartItems);
    } else {
      this.isItemAlreadyInCart(cartItems);
    }
    this.getNumberOfCartItems();
    this.getCartStyling(this.numberOfItemsInCart);
  },
  addFirstProductToCart: function (cartItems) {
    let productID = event.target.id;
    let productIndex = event.target.id - 1;
    let chosenProduct = products[productIndex];
    let itemQuantity = this.getChosenItemAmount(event);
    cartItems.push({
      itemQuantity: itemQuantity,
      chosenProduct: chosenProduct,
      id: productID,
    });
    this.setLocalStorageCartItems(cartItems);
  },
  getChosenItemAmount: function (event) {
    let dropMenus = this.getdropMenu();
    let chosenItemQuantity = Number(dropMenus[event.target.id - 1].value);
    return chosenItemQuantity;
  },
  getdropMenu: function () {
    let dropMenus = document.querySelectorAll(".drop-menu");
    return dropMenus;
  },
  isItemAlreadyInCart: function (cartItems) {
    let productID = event.target.id;
    let itemInCart = cartItems.some((item) => {
      return item.chosenProduct.id == productID;
    });
    if (itemInCart == true) {
      this.addItemAmountToExistingProduct(
        cartItems,
        productID,
        this.itemAmount
      );
    } else {
      this.addNewProductToExistingCart(cartItems, productID, this.itemAmount);
    }
  },
  addNewProductToExistingCart: function (cartItems, productID, itemAmount) {
    let product = products[productID - 1];
    cartItems.push({
      itemQuantity: itemAmount,
      chosenProduct: product,
      id: productID,
    }),
      this.setLocalStorageCartItems(cartItems);
  },
  addItemAmountToExistingProduct: function (cartItems, productID, itemAmount) {
    cartItems.forEach((item) => {
      if (productID === item.id) {
        item.itemQuantity += itemAmount;
      }
    });
    this.setLocalStorageCartItems(cartItems);
  },
  setLocalStorageCartItems: function (chosenItemAndQuantity) {
    let cartItems_JSON = JSON.stringify(chosenItemAndQuantity);
    localStorage.setItem("cartItems", cartItems_JSON);
  },
  getNumberOfCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems == null) {
      return 0;
    } else {
      let itemsInCart = JSON.parse(cartItems);
      let total = itemsInCart.reduce((total, item) => {
        total += item.itemQuantity;

        return total;
      }, 0);
      this.numberOfItemsInCart = total;
      return total;
    }
  },
  getCartStyling: function (numberOfItemsInCart) {
    if (numberOfItemsInCart < 10) {
      this.cartCount.classList.add("cart-count-under-ten");
      this.cartCount.classList.remove("cart-count-over-100");
      this.cartCount.classList.remove("cart-count-over-ten");
    } else if (numberOfItemsInCart > 9 && numberOfItemsInCart < 100) {
      this.cartCount.classList.add("cart-count-over-ten");
      this.cartCount.classList.remove("cart-count-under-ten");
      this.cartCount.classList.remove("cart-count-over-100");
    } else {
      this.cartCount.classList.add("cart-count-over-100");
      this.cartCount.classList.remove("cart-count-over-ten");
      this.cartCount.classList.remove("cart-count-under-ten");
    }
    this.cartCount.textContent = ` ${numberOfItemsInCart}`;
  },
  getCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    let itemsInCart = JSON.parse(cartItems);
    return itemsInCart;
  },
};

export { LOCAL_STORAGE };
