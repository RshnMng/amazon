import React from "react";
import { Link } from "react-router-dom";

export default function LogoDiv() {
  return (
    <>
      <div className="logo-div">
        <span className="amazon-link">
          <Link to="/">
            <img className="amazon-logo-img" src="https://supersimple.dev/projects/amazon/images/amazon-logo-white.png" alt="amazon logo" />
          </Link>
        </span>
      </div>
    </>
  );
}
