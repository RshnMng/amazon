import React from "react";
import LogoDiv from "./Logo_Div";
import SearchDiv from "./SearchDiv";
import CartDiv from "./CartDiv";

export default function NavBar() {
  return (
    <>
      <div className="nav-div">
        <div className="nav-bar">
          <LogoDiv />
          <SearchDiv />
          <CartDiv />
        </div>
      </div>
    </>
  );
}
