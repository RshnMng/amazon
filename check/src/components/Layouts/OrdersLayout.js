import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function OrdersLayout() {
  return (
    <>
      <div className="check">
        <Link to=".">View My Orders</Link>
        <Link to="tracking">Track My Orders</Link>
        <Outlet />
      </div>
    </>
  );
}
