import React from "react";
import { Link } from "react-router-dom";

export default function LeftDiv() {
  return (
    <>
      <div className="left-div">
        <Link to="orders" className="return-link">
          <div className="return-text">Returns</div>
          <div className="order-text">& Orders</div>
        </Link>
      </div>
    </>
  );
}
