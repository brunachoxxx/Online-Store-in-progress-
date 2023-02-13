import Product from "./Product";
import Loader from "./Loader";
import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function StoreFront() {
  const { data: products, error, isLoading } = useSWR(productsUrl, fetcher);
  const { currency } = useContext(AppContext);

  if (error) {
    console.log(error);
    return <span>error.message</span>;
  }

  return (
    <>
      <p>Shopping in {currency}</p>
      <div className="store-front">
        {isLoading && <Loader />}
        {products &&
          products.map((product: any) => (
            <Product key={product.id} details={product} />
          ))}
      </div>
    </>
  );
}
