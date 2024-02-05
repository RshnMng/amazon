import React, { useContext } from "react";
import { productsContext } from "../App";
import Product from "../components/Home/Product";

export default function Home() {
  const products = useContext(productsContext);

  let id = 0;
  const productElements = products.map((product) => {
    id = id + 1;
    return <Product id={product.id} key={product.id} name={product.name} rating={product.rating} image={product.image} priceCents={product.priceCents} />;
  });

  return (
    <>
      <div className="home-page">
        <div className="main-page">
          <main className="product-grid js-product-grid">{productElements}</main>
        </div>
        <div className="error-div"></div>
      </div>
    </>
  );
}
