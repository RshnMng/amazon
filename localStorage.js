import { products } from "./product.js";
import { CART } from "./cart.js";

const LOCAL_STORAGE = {
  itemAmount: 0,
  numberOfItemsInCart: 0,
  chosenItemAndQuantity: [],
  addSelectedItemToStorage: function () {
    this.itemAmount = this.getChosenItemAmount(event);
    products.forEach((product) => {
      this.createSelectedItemArray(product, event);
    });
    this.setLocalStorageCartItems(this.chosenItemAndQuantity);
    this.getNumberOfCartItems();
    this.getCartStyling(this.numberOfItemsInCart);
  },

  createSelectedItemArray: function (product, event) {
    if (product.id == event.target.id) {
      this.chosenItemAndQuantity.push({
        itemQuantity: this.itemAmount,
        chosenProduct: product,
      });
    }
  },
  setLocalStorageCartItems: function (chosenItemAndQuantity) {
    let cartItems_JSON = JSON.stringify(chosenItemAndQuantity);
    localStorage.setItem("cartItems", cartItems_JSON);
  },
  getNumberOfCartItems: function () {
    let cartItems = localStorage.getItem("cartItems");
    let itemsInCart = JSON.parse(cartItems);
    let total = itemsInCart.reduce((total, item) => {
      total += item.itemQuantity;

      return total;
    }, 0);
    this.numberOfItemsInCart = total;
    console.log(this.numberOfItemsInCart);
  },

  getChosenItemAmount: function (event) {
    let dropMenus = CART.getdropMenu();
    let chosenItemQuantity = Number(dropMenus[event.target.id - 1].value);
    return chosenItemQuantity;
  },
  getCartStyling: function (numberOfItemsInCart) {
    if (numberOfItemsInCart < 10) {
      CART.cartCount.classList.add("cart-count-under-ten");
      CART.cartCount.classList.remove("cart-count-over-100");
      CART.cartCount.classList.remove("cart-count-over-ten");
    } else if (numberOfItemsInCart > 9 && numberOfItemsInCart < 100) {
      CART.cartCount.classList.add("cart-count-over-ten");
      CART.cartCount.classList.remove("cart-count-under-ten");
      CART.cartCount.classList.remove("cart-count-over-100");
    } else {
      CART.cartCount.classList.add("cart-count-over-100");
      CART.cartCount.classList.remove("cart-count-over-ten");
      CART.cartCount.classList.remove("cart-count-under-ten");
    }
    CART.cartCount.textContent = ` ${numberOfItemsInCart}`;
  },
};

export { LOCAL_STORAGE };

//the above code handles the onclick of the add to cart btn and takes the item number
// and saves the number of the drop down menu and the product and saves it in an object
// then saves that object into local storage, then it fires a function that goes through
// the local storage object and then counts the total items inside it and saves it to a
// a variable on the checkout object

// next steps:

//  1. go through all files and clean up code // add more files if neccesary
// MAKE SURE ALL THE FUNCTIONALITY WORKS AS DESIRED.
//
//********************************************************************//
