import React from "react";

export default function SearchDiv() {
  return (
    <>
      <div className="search-div">
        <input className="search-bar" placeholder="Search" name="search-bar" id="search-bar" />
        <button className="search-btn">
          <img className="search-img" src="https://supersimple.dev/projects/amazon/images/icons/search-icon.png" />
        </button>
      </div>
    </>
  );
}
