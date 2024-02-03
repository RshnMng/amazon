import React, { useContext } from "react";
import { productsContext } from "../App";

export default function Home() {
  const products = useContext(productsContext);
  console.log(products);

  // take products array here and map through them
  // for each item in array create a <Product /> component while passing down props, we can pass down props
  // in this instance because the items are uniform and wont change or be affected dynamically

  return (
    <>
      <div className="home-page">
        <div className="main-page">
          <main className="product-grid js-product-grid">
            <div>This is the Home Page</div>
          </main>
        </div>
        <div className="error-div"></div>
      </div>
    </>
  );
}
