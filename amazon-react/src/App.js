import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import OrdersLayout from "./components/Layouts/OrdersLayout";
import Home from "./pages/Home";
import { products } from "./data/product";

const productsContext = createContext(products);
export { productsContext };

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
