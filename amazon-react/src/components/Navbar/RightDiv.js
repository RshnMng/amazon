import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE } from "../../functions/LocalStorage";
import { Link } from "react-router-dom";

export default function RightDiv() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    updateCount();
  }, [count]);

  function updateCount() {
    let totalQuantity = 0;
    let cartItems = LOCAL_STORAGE.getLocalStorage("cartItems");
    cartItems
      ? cartItems.forEach((item) => {
          totalQuantity += Number(item.productQuantity);
        })
      : setCount(0);
    setCount(totalQuantity);
  }

  // 1. we have to make it so update count runs on add button click
  // 2. make it so correct styling is applied to the cart count depending on the amount

  return (
    <>
      <div className="right-div">
        <Link to="checkout" className="cart-link">
          <img className="cart-img" src="https://supersimple.dev/projects/amazon/images/icons/cart-icon.png" />
        </Link>
        <div className="cart-count">{count}</div>
        <div className="cart-name">cart</div>
      </div>
    </>
  );
}
