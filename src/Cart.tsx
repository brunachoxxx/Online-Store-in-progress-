export default function Cart({ cart }: any) {
  const totalPrice = cart.reduce((total: any, product: any) => {
    total + product.price * product.quantity;
  }, 0);
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
                  <th datra-width="20%">Unit price</th>
                  <th datra-width="10%">Quanity</th>
                  <th datra-width="25%">Total</th>
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
