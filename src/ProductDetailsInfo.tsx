import Button from "./Button";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "./store";

export default function ProductDetailInfo() {
  const dispatch = useDispatch();
  const product: any = useOutletContext();
  const onProductAdd = () => dispatch(addProduct(product));

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd()}>${product.price}</Button>
    </>
  );
}
