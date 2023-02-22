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

export default function ProductDetailNutrition() {
  const product: IproductInfo = useOutletContext();
  const nutrition = product.nutrition;

  return (
    <>
      <table className="table table-nutrition">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>{nutrition.protein}</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>{nutrition.carbs}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{nutrition.fat}</td>
          </tr>
          <tr>
            <td>Salt</td>
            <td>{nutrition.salt}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
