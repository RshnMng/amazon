import React from "react";
import ImageDiv from "./ImageDiv";
import RatingPriceDiv from "./RatingPriceDiv";
import QuantityDiv from "./QuantityDiv";
import OptionDiv from "./OptionDiv";

export default function Product(props) {
  const { id, image, name, rating, priceCents } = props;
  return (
    <>
      <div id={id} class="product-div js-product-div">
        <ImageDiv image={image} name={name} />
        <RatingPriceDiv rating={rating} priceCents={priceCents} />
        <QuantityDiv id={id} />
        <OptionDiv id={id} />
      </div>
    </>
  );
}
