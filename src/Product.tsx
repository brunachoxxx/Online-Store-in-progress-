import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./store.js";

export default function Product({ details }: any) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const productFromCart = cart.find(
    (product: any) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;
  const onProductAdd = () => dispatch(addProduct(details));
  const onProductdelete = () => dispatch(removeProduct(details));

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
                onClick={() => onProductdelete()}
              >
                x
              </Button>
            )}
          </div>
          <Button outline onClick={() => onProductAdd()}>
            ${details.price}
          </Button>
        </div>
      </div>
    </>
  );
}
