import React from "react";

export default function QuantityDiv({ id }) {
  return (
    <>
      <div id={id} class="quantity-div js-quantity-div">
        <select class="drop-menu js-drop-menu" name="drop-menu" id={`drop-menu-${id}`}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </>
  );
}
