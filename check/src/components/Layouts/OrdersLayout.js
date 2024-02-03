import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function OrdersLayout() {
  return (
    <>
      <div className="check">
        <Outlet />
        <Link to="tracking">Track My Orders</Link>
        <Link to=".">View My Orders</Link>
      </div>
    </>
  );
}
