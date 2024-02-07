import React from "react";
import { Util } from "../../functions/UtilityFunctions";

export default function RatingPriceDiv({ rating, priceCents }) {
  return (
    <>
      <div className="product-review">
        <img src={rating.stars} className="product-stars js-product-stars" />
        <div className="product-count js-product-count">{rating.count}</div>
      </div>
      <div className="product-price js-product-price">${Util.convertIntoFloatNumber(priceCents)}</div>
    </>
  );
}
