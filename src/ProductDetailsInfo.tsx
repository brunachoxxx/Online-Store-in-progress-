import Button from "./Button";
import { useOutletContext } from "react-router-dom";

export default function ProductDetailInfo({ onProductAdd }: any) {
  const product: any = useOutletContext();

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}
