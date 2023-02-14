import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import { useParams, Link, Outlet } from "react-router-dom";
import Loader from "./Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(productsUrl + `productdetails/id${id}.json`, fetcher);

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <Link to="/">Back Home</Link>
      {isLoading && <Loader />}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width="100" />
          <p>
            View <Link to="delivery">delivery notes</Link>
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
}
