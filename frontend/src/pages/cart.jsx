import { useState, useContext } from "react"; // <-- add useState here
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
    { id: 1, name: "Pizza", price: 199, qty: 1 },
    { id: 2, name: "Burger", price: 99, qty: 1 },
  ]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button className="checkout-btn" onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
}
