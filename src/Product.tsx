import { Link } from "react-router-dom";
import Button from "./Button";
export default function Product({
  details,
  cart,
  onProductAdd,
  onProductDelete,
}: any) {
  const inCart = cart.find((product: any) => product.id === details.id);

  const quantity = inCart ? inCart.quantity : 0;

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
            {quantity > 0 && <div className="product-quantity">{quantity}</div>}
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
            {quantity > 0 && (
              <Button
                outline
                className="product-delete"
                onClick={() => onProductDelete(details.id)}
              >
                x
              </Button>
            )}
          </div>
          <Button outline onClick={() => onProductAdd(details)}>
            ${details.price}
          </Button>
        </div>
      </div>
    </>
  );
}
