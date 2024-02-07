import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";

export default function RightDiv() {
  const value = useContext(Context);
  const count = value.count;

  const cartClass = count > 100 ? "cart-count cart-count-over-100" : count > 10 ? "cart-count cart-count-over-ten" : "cart-count cart-count-under-ten";

  return (
    <>
      <div className="right-div">
        <Link to="checkout" className="cart-link">
          <img className="cart-img" src="https://supersimple.dev/projects/amazon/images/icons/cart-icon.png" />
        </Link>
        <div className={cartClass}>{count}</div>
        <div className="cart-name">cart</div>
      </div>
    </>
  );
}
