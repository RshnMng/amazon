import React from "react";
import { Link } from "react-router-dom";

export default function LeftDiv() {
  return (
    <>
      <div class="left-div">
        <Link to="orders" className="return-link">
          <div class="return-text">Returns</div>
          <div class="order-text">& Orders</div>
        </Link>
      </div>
    </>
  );
}
