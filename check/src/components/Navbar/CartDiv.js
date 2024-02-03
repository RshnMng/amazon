import React from "react";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

export default function CartDiv() {
  return (
    <>
      <div className="cart-div">
        <LeftDiv />
        <RightDiv />
      </div>
    </>
  );
}
