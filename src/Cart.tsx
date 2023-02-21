import { useSelector } from "react-redux";
import { cartValueSelector } from "./store.js";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const totalPrice = useSelector(cartValueSelector);
  console.log(cart);
  return (
    <>
      <div className="cart-layout">
        <div>
          <h1>Your Cart</h1>
          {cart.length === 0 && (
            <p>You have not added any product to your cart yet.</p>
          )}
          {cart.length > 0 && (
            <table className="table table-cart">
              <thead>
                <tr>
                  <th datra-width="25%" className="th-product">
                    Product
                  </th>
                  <th data-width="20%">Unit price</th>
                  <th data-width="10%">Quanity</th>
                  <th data-width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product: any) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          width="30"
                          height="30"
                          alt=""
                          src={product.image}
                        />
                        {product.name}
                      </td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">{totalPrice}</th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
