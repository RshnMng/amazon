import React from "react";

export default function ImageDiv({ image, name }) {
  return (
    <>
      <div className="img-div">
        <img className="product-img" src={image} />
      </div>
      <div className="product-name-div">
        <p className="product-name js-product-name limit-to-2-lines">{name}</p>
      </div>
    </>
  );
}
