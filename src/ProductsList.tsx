import React from "react";
import Product from "./Product";

export default function ProductsList(props: any) {
  return (
    <ul className="store-front">
      {props.products.map((product: any) => (
        <li key={product.id}>
          <Product details={product} />
          <button
            className="btn-outline btn-delete"
            onClick={() => props.onDeleteClick(product.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
