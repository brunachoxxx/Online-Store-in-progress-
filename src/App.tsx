import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./Abaut";
import Home from "./Home";
import NotFound from "./NotFound";
import Products from "./Products";
import Cart from "./Cart";
import ProductDetails from "./ProductDetail";
import ProductDetailInfo from "./ProductDetailsInfo";
import ProductDetailNutrition from "./ProductDetailsnutrition";
import ProductDetailStorage from "./ProductDetailStorage";

export default function App() {
  return (
    <>
      <SWRConfig>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products/" element={<Products />}></Route>
              <Route path="/products/:id/" element={<ProductDetails />}>
                <Route path="" element={<ProductDetailInfo />}></Route>
                <Route
                  path="nutrition"
                  element={<ProductDetailNutrition />}
                ></Route>
                <Route
                  path="storage"
                  element={<ProductDetailStorage />}
                ></Route>
              </Route>

              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </SWRConfig>
    </>
  );
}
