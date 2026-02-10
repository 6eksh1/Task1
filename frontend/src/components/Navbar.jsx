import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🍔 FoodExpress</h2>
      <div>
        <Link to="/menu" style={styles.link}>Menu</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/payment" style={styles.link}>Payment</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#ff4d4d",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "white"
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
