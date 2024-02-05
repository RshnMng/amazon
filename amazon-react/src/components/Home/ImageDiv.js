import React from "react";

export default function ImageDiv({ image, name }) {
  return (
    <>
      <div class="img-div">
        <img class="product-img" src={image} />
      </div>
      <div class="product-name-div">
        <p class="product-name js-product-name limit-to-2-lines">{name}</p>
      </div>
    </>
  );
}
