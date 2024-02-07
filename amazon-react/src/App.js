import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import OrdersLayout from "./components/Layouts/OrdersLayout";
import Home from "./pages/Home";
import { products } from "./data/product";
import { LOCAL_STORAGE } from "./functions/LocalStorage";

const Context = createContext();
export { Context };

function App() {
  const [data, setData] = useState({
    count: 0,
    storage: [],
    products: products,
  });

  //1. figure out why products isnt working home pate
  // 2. clean up the rest of the context so were only using one
  // 3. clean up state so our App isnt using 7 different use states
  // 4. why data is nested on home page when passed through context but not anywhere else like in optioin div
  // 4. make it so when we add the same product to the cart it doent add a new item but adds to the cart quantity instead

  useEffect(() => {
    updateCount();
  }, [data.count]);

  function updateCount() {
    let totalQuantity = 0;
    let cartItems = LOCAL_STORAGE.getLocalStorage("cartItems");
    cartItems
      ? cartItems.forEach((item) => {
          totalQuantity += Number(item.productQuantity);
        })
      : setData((prevState) => {
          return { ...prevState, count: 0 };
        });
    setData((prevState) => {
      return { ...prevState, count: totalQuantity };
    });
  }

  return (
    <>
      <Context.Provider value={{ data }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="checkout" element={<Checkout />} />
              <Route path="orders" element={<OrdersLayout />}>
                <Route index element={<Orders />} />
                <Route path="tracking" element={<Tracking />} /> */}
            </Route>
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
