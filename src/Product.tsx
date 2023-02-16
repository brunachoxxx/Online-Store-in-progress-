import { Link } from "react-router-dom";

export default function Products({
  details,
  cart,
  onProductAdd,
  onProductDelete,
}: any) {
  console.log(details);
  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <Link to={"/products/" + details.id}>
            <img
              src={details.image}
              width="100"
              height="100"
              className="product-image"
              alt={details.name}
            />
          </Link>
          <div className="product-quantity-container">
            <div className="product-quantity">0</div>
          </div>
        </div>
        <Link to={"/products/" + details.id}>
          <div className="product-info">
            <h3>{details.name}</h3>
            <p>{details.description}</p>
          </div>
        </Link>
        <div className="product-checkout">
          <div>
            <button
              className="product-delete"
              onClick={() => onProductDelete(details.id)}
            >
              x
            </button>
          </div>
          <button onClick={() => onProductAdd(details)}>
            ${details.price}
          </button>
        </div>
      </div>
    </>
  );
}
