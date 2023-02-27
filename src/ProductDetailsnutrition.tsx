import { useOutletContext } from "react-router-dom";
import type { IproductInfo } from "./IntnTypes.js";

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
