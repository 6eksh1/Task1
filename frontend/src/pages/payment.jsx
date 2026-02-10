import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/menu");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Payment</h2>

        <input type="text" placeholder="Card Holder Name" required />
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiry (MM/YY)" required />
        <input type="password" placeholder="CVV" required />

        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}

