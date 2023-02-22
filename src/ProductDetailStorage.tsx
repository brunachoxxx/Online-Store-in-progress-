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
