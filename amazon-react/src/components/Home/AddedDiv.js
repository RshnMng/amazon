import React from "react";

export default function AddedDiv({ id }) {
  return (
    <>
      <div id={id} className="added-div js-added-div">
        <img className="checkmark" src="https://www.supersimple.dev/projects/amazon/images/icons/checkmark.png" />
        <p className="added-text">Added</p>
      </div>
    </>
  );
}
