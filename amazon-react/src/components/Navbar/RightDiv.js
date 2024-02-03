import React from "react";
import { Link } from "react-router-dom";

export default function RightDiv() {
  return (
    <>
      <div className="right-div">
        <Link to="checkout" className="cart-link">
          <img className="cart-img" src="https://supersimple.dev/projects/amazon/images/icons/cart-icon.png" />
        </Link>
        <div className="cart-count"></div>
        <div className="cart-name">Cart</div>
      </div>
    </>
  );
}
