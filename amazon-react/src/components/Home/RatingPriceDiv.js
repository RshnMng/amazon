import React from "react";

export default function RatingPriceDiv({ rating, priceCents }) {
  return (
    <>
      <div className="product-review">
        <img src={rating.stars} class="product-stars js-product-stars" />
        <div className="product-count js-product-count">{rating.count}</div>
      </div>
      <div className="product-price js-product-price">${priceCents}</div>
      {/* above price cents was set by [DISPLAY.convertIntoFloatNumber(priceCents)] */}
    </>
  );
}
