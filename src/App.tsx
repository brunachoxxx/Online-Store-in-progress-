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
import { useState } from "react";

export default function App() {
  const [cart, setCart]: any = useState([]);

  function handleProductAdd(newProduct: any) {
    //check if product exist
    const alreadyOnCart = cart.find((product: {}) => product === newProduct);

    if (alreadyOnCart) {
      //map the cart and find the product and return product.quantity++
      const updatedCart = cart.map((product: any) => {
        //if find the product
        if (product.id === newProduct.id) {
          //return quantity++
          return { ...product, quantity: product.quantity + 1 };
        }
        //if not find the prduct return product
        return product;
      });
      //add udapted cart to de cart
      setCart(updatedCart);
    } else {
      //if is a new product add it to the cart with quantity 1
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  }
  function handleProductDelete(id: number) {
    const updatedCart = cart.filter((product: any) => {
      product.id !== id;
    });
    setCart(updatedCart);
  }
  return (
    <>
      <SWRConfig>
        <BrowserRouter>
          <NavBar cart={cart} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/products/"
                element={
                  <Products
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />
                }
              ></Route>
              <Route
                path="/products/:id/"
                element={<ProductDetails onProductAdd={handleProductAdd} />}
              >
                <Route
                  path=""
                  element={
                    <ProductDetailInfo onProductAdd={handleProductAdd} />
                  }
                ></Route>
                <Route
                  path="nutrition"
                  element={<ProductDetailNutrition />}
                ></Route>
                <Route
                  path="storage"
                  element={<ProductDetailStorage />}
                ></Route>
              </Route>

              <Route path="/Cart" element={<Cart cart={cart} />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </SWRConfig>
    </>
  );
}
