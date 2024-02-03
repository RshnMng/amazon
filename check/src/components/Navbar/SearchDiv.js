import React from "react";

export default function SearchDiv() {
  return (
    <>
      <div class="search-div">
        <input class="search-bar" placeholder="Search" name="search-bar" id="search-bar" />
        <button class="search-btn">
          <img class="search-img" src="https://supersimple.dev/projects/amazon/images/icons/search-icon.png" />
        </button>
      </div>
    </>
  );
}
