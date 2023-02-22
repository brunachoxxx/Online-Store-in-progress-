import { useParams, NavLink, Outlet } from "react-router-dom";
import useSWR from "swr";
import fetcher, { productsUrl } from "./Fetcher";
import Loader from "./Loader";
import { useOutletContext } from "react-router-dom";

interface IproductInfo {
  description: string;
  id: number;
  image: string;
  name: string;
  nutrition: {
    carbs: number;
    fat: number;
    protein: number;
    salt: number;
  };
  price: number;
  price_id: string;
  storage: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useSWR<IproductInfo, string>(
    productsUrl + `productinfo/id${id}.json`,
    fetcher
  );
  if (error) {
    console.log(error);
  }

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
                    end
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
