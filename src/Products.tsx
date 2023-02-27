import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import Loader from "./Loader";
import Product from "./Product";
import type { Iproduct } from "./IntnTypes.js";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR<Iproduct[], string>(productsUrl + "supermarket.json", fetcher);
  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>

        <div className="products-grid">
          {isLoading && <Loader />}
          {products &&
            products.map((product: Iproduct) => (
              <Product key={product.id} details={product}></Product>
            ))}
        </div>
      </div>
    </>
  );
}
