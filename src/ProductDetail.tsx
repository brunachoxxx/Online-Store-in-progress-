import { useParams, NavLink, Outlet } from "react-router-dom";
import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import Loader from "./Loader";

export default function ProductDetailInfo() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useSWR(productsUrl + `productinfo/id${id}.json`, fetcher);
  if (error) {
    console.log(error);
  }
  console.log(product);
  return (
    <>
      {isLoading && <Loader />}
      {product && (
        <div className="product-details-layout">
          <div>
            <h2>{product.name}</h2>
            <img
              src={product.image}
              width="125"
              height="125"
              className="product-details-image"
              alt={product.name}
            />
          </div>
          <div>
            <div className="tabs">
              <ul>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => (isActive ? "tab-active" : "")}
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="nutrition"
                    className={({ isActive }) => (isActive ? "tab-active" : "")}
                  >
                    Nutrition
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="storage"
                    className={({ isActive }) => (isActive ? "tab-active" : "")}
                  >
                    Storage
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={product} />
          </div>
        </div>
      )}
    </>
  );
}
