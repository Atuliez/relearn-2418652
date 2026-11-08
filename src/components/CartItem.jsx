// One row in the cart. It shows data and reports clicks upward; it owns no state

function CartItem({ line, onChangeQty, onRemove }) {

  return (
    <li className="cart-line">
      <div>
        <p className="cart-name">{line.name}</p>
        <p className="muted">RM {line.price.toFixed(2)} each</p>
      </div>
      <div className="qty">
        <button type="button" onClick={() => onChangeQty(line.id, -1)}>
          -
        </button>
        <span> {line.qty} </span>
        <button type="button" onClick={() => onChangeQty(line.id, +1)}>
          +
        </button>
      </div>
      <p className="line-total">RM {(line.price * line.qty).toFixed(2)}</p>
      <button
        type="button"
        className="link danger"
        onClick={() => onRemove(line.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default CartItem;
