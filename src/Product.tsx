import { useState } from "react";

export default function Product(props: any) {
  const [count, setCount] = useState(0);

  const { details } = props;

  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product">
      <img src={details.image} width="50" alt={details.name} />
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          disabled={count === 0}
          onClick={handleDecrementClick}
        >
          -
        </button>
        <h3 className="product-count">{count ? count : ""}</h3>
        <button className="product-add" onClick={handleIncrementClick}>
          +
        </button>
      </div>
    </div>
  );
}
