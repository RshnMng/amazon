// let {
//   ADD_BTN,
//   BODY,
//   ERROR_DIV,
//   PRODUCT_DIV,
//   PRODUCT_GRID,
//   OPTION_DIV,
//   id,
//   product_Html,
//   product_Div_Inner_Html,
// } = PAGE_DATA;

// // ABOVE IS THE PAGE DATA//
// //**********************************************************************************************/

// BODY.addEventListener("load", setUpPage());

// function setUpPage() {
// products.forEach((product) => {
//   id = id += 1;
//   product_Html += `
//         <div id=${id} class="product-div js-product-div">
//         <div class='img-div'>
//         <img class='product-img' src="${product.image}" />
//         </div>
//         <div class='product-name-div'>
//         <p class='product-name js-product-name limit-to-2-lines'>${
//           product.name
//         }</p>
//         </div>
//         <div class='product-review'>
//         <img src='${
//           product.rating.stars
//         }' class='product-stars js-product-stars'>
//         <div class='product-count js-product-count'>${
//           product.rating.count
//         }</div>
//         </div>
//         <div class='product-price js-product-price'>$${Number(
//           product.priceCents / 100
//         ).toFixed(2)}</div>
//         <div id=${id} class='quantity-div js-quantity-div'>
//         <select class='drop-menu js-drop-menu'>
//         <option value="1">1</option>
//         <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//           <option value="10">10</option>
//           </select>
//           </div>
//           <div  id=${id} class='option-div'></div>
//           <div id=${id} class='added-div js-added-div'>
//           <img class='checkmark' src='https://www.supersimple.dev/projects/amazon/images/icons/checkmark.png'>
//           <p class='added-text'>Added</p>
//           </div>
//           <button id=${id} class='add-btn js-add-btn'>Add to Cart</button>
//           </div>
//           `;
// });
//   PRODUCT_GRID.innerHTML = product_Html;
//   hideAdded();

// function hideAdded() {

//   // ADD_DIV.forEach((button) => {
// button.childNodes[1].hidden = true;
// button.childNodes[3].hidden = true;
//   // });
// }

// body.addEventListener("load", getSavedCartQuantity());

// function setCartQuantity(number) {
//   let jsonQuantity = JSON.stringify(number);
//   localStorage.setItem("cartQuantity", jsonQuantity);
//   getSavedCartQuantity();
// }

// function getSavedCartQuantity() {
//   let jsonCart = localStorage.getItem("cartQuantity");
//   let savedCartQuantity = JSON.parse(jsonCart);
//   if (savedCartQuantity == null) {
//     savedCartQuantity = 0;
//   }
//   getCartStyling(savedCartQuantity);
// }

// function getCartStyling(savedCartQuantity) {
//   if (savedCartQuantity < 10) {
//     cartCount.classList.add("cart-count-under-ten");
//   } else if (savedCartQuantity > 9 && savedCartQuantity < 100) {
//     cartCount.classList.add("cart-count-over-ten");
//   } else {
//     cartCount.classList.add("cart-count-over-100");
//   }
//   cartCount.textContent = ` ${savedCartQuantity}`;
// }

// addBtn.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     let quantity = getCartQuantity(event);
//     updateCartQuantity(quantity);
//     let productObject = makePoductObject(quantity, event);
//     showAdded(event);
//     createCart(productObject, quantity);
//   });
// });

// // this code adds an event listener to all the add to cart buttons. Add calls
// // the functions that pertain to the cart

// //this functions gets the value of the drop down menu that shares the
// //same id at the button that was clicked, and retuns that number

// function getCartQuantity(event) {
//   let productIndex = event.target.id - 1;
//   let quantity = Number(quantitydiv[productIndex].childNodes[1].value);
//   return quantity;
// }

// // this function adds the quantity to the previous quantity amount and saves
// // it in our cart display

// function updateCartQuantity(quantity) {
//   let jsonCart = localStorage.getItem("cartQuantity");
//   let savedCartQuantity = JSON.parse(jsonCart);
//   savedCartQuantity += quantity;
//   setCartQuantity(savedCartQuantity);
//   return savedCartQuantity;
// }

// function showAdded(event) {
//   const addedDiv = document.querySelectorAll(".js-added-div");
//   addedDiv.forEach((button) => {
//     if (button.id == event.target.id) {
//       button.childNodes[1].hidden = false;
//       button.childNodes[3].hidden = false;
//     }
//     setTimeout(hideAdded, 2000);
//   });
// }

//   let optionArray = check(products);

// function check(products) {
//   let optionArray = [];
//   products.forEach((product) => {
//     if (product.options) {
//       optionArray.push({ name: product.name, values: { ...product.options } });
//     }
//   });

/ }

// //The above code sets up the page and generates the html in our javascript on page load.
// //******************************************************************************************

// // this function, takes the quantity selected, and the name and id, or the
// // item selected and saves it in an object and returns it

// function makePoductObject(quantity, event) {
//   let productIndex = event.target.id - 1;
//   let name = productDiv[productIndex].childNodes[3].textContent;
//   let image = productDiv[productIndex].childNodes[1].currentSrc;
//   let productObject = {
//     item: name,
//     quantity: quantity,
//     id: event.target.id,
//     image: image,
//   };

//   return productObject;
// }

//   return optionArray;
// }

//   matchProduct(optionArray);

// function matchProduct(optionArray) {
//   let productDiv = document.querySelectorAll(".js-product-div");
//   productDiv.forEach((product) => {
//     let productName = product.childNodes[3].childNodes[1].textContent;

//     optionArray.forEach((option) => {
//       let optionValues = option.values;

//       let optionName = option.name;

//       if (optionName == productName) {
//         let optionDiv = product.childNodes[11];

//         addOptions(option, optionDiv, optionValues);
//       }
//     });
//   });
// }

//

// function addOptions(option, optionDiv, optionValues) {
//   let options = Object.keys(option.values);
//   options.forEach((option) => {
//     let styleDiv = document.createElement("div");
//     styleDiv.classList.add("styleDiv");
//     let newOption = document.createElement("p");
//     newOption.classList.add("option-label");
//     let optionName = (document.createTextNode = `${option}`);
//     newOption.textContent = optionName;
//     styleDiv.appendChild(newOption);
//     const optionButtonDiv = document.createElement("div");
//     optionButtonDiv.classList.add("choice-div");

//     optionValues[option].forEach((choice) => {
//       let choiceInput = document.createElement("button");
//       choiceInput.setAttribute("type", "radio");
//       choiceInput.setAttribute("name", `${option}`);
//       choiceInput.classList.add("option-button");
//       choiceInput.textContent = `${choice}`;
//       optionButtonDiv.appendChild(choiceInput);
//     });
//     styleDiv.appendChild(optionButtonDiv);
//     optionDiv.appendChild(styleDiv);
//   });
//   const allOptionButtonDivs = document.querySelectorAll(".choice-div");

