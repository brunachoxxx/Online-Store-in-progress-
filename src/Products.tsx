import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import Loader from "./Loader";
import Product from "./Product";
import { Link } from "react-router-dom";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR(productsUrl + "supermarket.json", fetcher);
  if (error) {
    console.log(error);
  }
  console.log(products);

  return (
    <>
      <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>

        <div className="products-grid">
          {isLoading && <Loader />}
          {products &&
            products.map((product: any) => (
              <Link to={"/products/" + product.id}>
                <Product details={product}></Product>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
