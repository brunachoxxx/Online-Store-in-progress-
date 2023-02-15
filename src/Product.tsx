import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products({ details }: any) {
  console.log(details);
  return (
    <>
      <div className="product">
        <div className="product-image-container">
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
          />
          <div className="product-quantity-container">
            <div className="product-quantity">0</div>
          </div>
        </div>
        <div className="product-info">
          <h3>{details.name}</h3>
          <p>{details.description}</p>
        </div>
        <div className="product-checkout">
          <div>
            <button className="product-delete">x</button>
          </div>
          <button>${details.price}</button>
        </div>
      </div>
    </>
  );
}
