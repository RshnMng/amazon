import React from "react";

export default function OptionDiv({ id }) {
  return (
    <>
      <div id={id} class="option-div"></div>
      {/* above id was set to by [OPTIONS.getOPTION_ID(product)] */}
      <div id={id} class="added-div js-added-div">
        <img class="checkmark" src="https://www.supersimple.dev/projects/amazon/images/icons/checkmark.png" />
        <p class="added-text">Added</p>
      </div>
      <button id={id} class="add-btn js-add-btn">
        Add to Cart
      </button>
    </>
  );
}
