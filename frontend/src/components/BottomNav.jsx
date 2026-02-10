export default function BottomNav() {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-around",
      padding: "10px",
      background: "#fff",
      borderTop: "1px solid #ddd"
    }}>
      <span>🚴 Delivery</span>
      <span>🍽 Dining</span>
      <span>👤 Profile</span>
    </div>
  );
}
