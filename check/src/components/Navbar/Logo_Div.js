import React from "react";
import { Link } from "react-router-dom";

export default function LogoDiv() {
  return (
    <>
      <div class="logo-div">
        <span class="amazon-link">
          <Link to="/">
            <img class="amazon-logo-img" src="https://supersimple.dev/projects/amazon/images/amazon-logo-white.png" alt="amazon logo" />
          </Link>
        </span>
      </div>
    </>
  );
}
