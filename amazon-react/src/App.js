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

const productsContext = createContext(products);
export { productsContext };

const localStorageContext = createContext([]);
export { localStorageContext };

const Context = createContext();
export { Context };

function App() {
  const [count, setCount] = useState(0);
  //  const [localStorage, setLocalStorage ] = useState([]);
  //  const [products, setProducts] = useState(products)

  useEffect(() => {
    updateCount();
  }, [count]);

  function updateCount() {
    let totalQuantity = 0;
    let cartItems = LOCAL_STORAGE.getLocalStorage("cartItems");
    cartItems
      ? cartItems.forEach((item) => {
          totalQuantity += Number(item.productQuantity);
        })
      : setCount(0);
    setCount(totalQuantity);
  }

  return (
    <>
      <Context.Provider value={{ count: count, updateCount: updateCount }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="orders" element={<OrdersLayout />}>
                <Route index element={<Orders />} />
                <Route path="tracking" element={<Tracking />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
