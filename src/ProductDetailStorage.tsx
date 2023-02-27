import { useOutletContext } from "react-router-dom";
import type { IproductInfo } from "./IntnTypes.js";

export default function ProductDetailStorage() {
  const product: IproductInfo = useOutletContext();
  const storage = product.storage;

  return (
    <>
      <p>
        <strong>Storage instructions:</strong> {storage}
      </p>
    </>
  );
}
