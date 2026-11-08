import { useNavigate } from "react-router";
import CartItem from "../components/CartItem.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import useCart from "../hooks/useCart.js";

function CartPage({}) {
  const navigate = useNavigate();
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart();

  if (cart.length === 0) {
    return (

        <p className="muted">
          Your cart is empty. Pick something from the menu first.
        </p>

    );
  }

  function handlePlaceOrder(details) {
    placeOrder(details);
    navigate("/orders");
  }

  return (
    <section className="cart-page">
      <h1>Your cart</h1>

      <div className="cart-layout">
        <div className="card">
          <ul className="cart-list">
            {cart.map((line) => (
              <CartItem
                key={line.id}
                line={line}
                onChangeQty={changeQty}
                onRemove={removeFromCart}
              />
            ))}
          </ul>
          <p className="cart-total">Total: RM {total.toFixed(2)}</p>
        </div>

        <CheckoutForm onPlaceOrder={handlePlaceOrder} />
      </div>
    </section>
  );
}

export default CartPage;
