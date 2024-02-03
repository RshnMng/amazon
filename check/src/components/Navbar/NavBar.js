import React from "react";
import LogoDiv from "./Logo_Div";
import SearchDiv from "./SearchDiv";
import CartDiv from "./CartDiv";

export default function NavBar() {
  return (
    <>
      <div class="home-page">
        <div class="nav-div">
          <div class="nav-bar">
            <LogoDiv />
            <SearchDiv />
            <CartDiv />
          </div>
        </div>
        <div class="error-div"></div>
        <div class="main-page">
          <main class="product-grid js-product-grid"></main>
        </div>
      </div>
    </>
  );
}

// move home page div to the right place, along with error div, main page and product grid

// create Links and connect them to dummy pages where our app will go

// drill down navbar to smaller components to make it more manageable, seperate logo div, search div, cart div, right div
//into seperate components
