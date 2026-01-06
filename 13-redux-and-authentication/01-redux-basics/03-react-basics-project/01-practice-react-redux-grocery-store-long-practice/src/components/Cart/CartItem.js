import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
  updateCount,
} from "../../store/cart";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => dispatch(updateCount(item.id, e.target.value))}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(incrementItem(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decrementItem(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
