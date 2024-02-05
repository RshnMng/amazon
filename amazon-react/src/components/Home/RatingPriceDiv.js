import React from "react";

export default function RatingPriceDiv({ rating, priceCents }) {
  return (
    <>
      <div class="product-review">
        <img src={rating.stars} class="product-stars js-product-stars" />
        <div class="product-count js-product-count">{rating.count}</div>
      </div>
      <div class="product-price js-product-price">${priceCents}</div>
      {/* above price cents was set by [DISPLAY.convertIntoFloatNumber(priceCents)] */}
    </>
  );
}
