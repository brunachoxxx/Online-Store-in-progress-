import { useState, useContext } from "react";
import { SWRConfig } from "swr";
import StoreFront from "./StoreFront";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetail";
import ProductDelivery from "./ProductDelivery";
import Nav from "./Nav";
import About from "./Abaut";
import Home from "./Home";
import NotFound from "./NotFound";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <>
        <SWRConfig>
          <BrowserRouter>
            <Nav />
            <main>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<StoreFront />}></Route>
                <Route path="/products/:id" element={<ProductDetails />}>
                  <Route
                    path="/products/:id/delivery"
                    element={<ProductDelivery />}
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </SWRConfig>

        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
          Login
        </button>
      </>
    );
  }
}
