// import { createCart } from "./index_Cart.js";
// import { products } from "./product.js";

// function findKeyWords(searchArr, products, searchResults) {
//   let found = [];
//   console.log(searchArr);
//   let search = "";
//   products.forEach((product) => {
//     product.keywords.forEach((item) => {
//       searchArr.forEach((searchText) => {
//         if (item.includes(searchText)) {
//           search = filterSearchArray(product, searchResults);
//         } else {
//           found.push("not found");
//         }
//       });
//     });
//   });

//   showRelevantProducts(search);
// }

// function filterSearchArray(product, searchResults) {
//   if (searchResults.includes(product)) {
//     return;
//   } else {
//     searchResults.push(product);
//   }
//   return searchResults;
// }

// function showRelevantProducts(search) {
//   if (searchBar.value.length > 2) {
//     let searchResultsHTML = "";

//     try {
//       let found = "found";
//       search.forEach((result) => {
//         searchResultsHTML += `
//               <div id=${id} class="product-div js-product-div">
//         <div class='img-div'>
//         <img class='product-img' src="${result.image}" />
//         </div>
//         <div class='product-name-div'>
//         <p class='product-name js-product-name limit-to-2-lines'>${
//           result.name
//         }</p>
//         </div>
//         <div class='product-review'>
//         <img src='${
//           result.rating.stars
//         }' class='product-stars js-product-stars'>
//         <div class='product-count js-product-count'>${result.rating.count}</div>
//         </div>
//         <div class='product-price js-product-price'>$${Number(
//           result.priceCents / 100
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
//               `;

//         showorhide(found);
//       });
//     } catch {
//       let found = [];

//       if (errorDiv.childNodes.length >= 1) {
//         found.push("not found");
//         console.log(found);
//         console.log("top");
//         showorhide(found);
//         return;
//       } else {
//         found.push("not found");
//         console.log(found);
//         console.log(found.length);
//         console.log("bottom");
//         // const notFoundText = (document.createTextNode =
//         //   "Item Not Found. Please Refine Your Search and Try Again");
//         // const notFoundElem = document.createElement("p");
//         // notFoundElem.classList.add("notFound");
//         // notFoundElem.textContent = notFoundText;
//         // errorDiv.appendChild(notFoundElem);
//         showorhide(found);
//       }
//     }

//     productGrid.innerHTML = searchResultsHTML;

//     hideAdded();
//   } else if (searchBar.value.length <= 2) {
//     console.log("less than 2");
//     setUpPage();
//   }
// }

// function showorhide(found) {
//   if (found == "found" || found.length <= 1) {
//     console.log(found);
//     console.log("product grid display, error div hidden");

//     return;
//   } else {
//     errorDiv.style.display = "";
//     productGrid.style.display = "none";
//     console.log("error div display, product grid hidden");
//     console.log(found);
//   }
// }

// searchBar.addEventListener("keydown", (event, search) => {
//   if (event.key == "Backspace") {
//     console.log("check");
//     showRelevantProducts(search);
//   }
// });
// **** next step : when using search functionality, when a second keyword is added,
//  the nav bar moves down and product grid gets pushed down, figure out why and fix it***
