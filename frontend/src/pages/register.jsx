import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <form className="auth-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button onClick={() => navigate("/")}>Register</button>
      </form>
    </div>
  );
}
