import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import OrdersLayout from "./components/OrdersLayout";
import Home from "./pages/Home";

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
