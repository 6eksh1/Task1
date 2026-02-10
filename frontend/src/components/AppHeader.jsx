import "../styles/home.css";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="location">
        📍 <span>Chennai</span>
      </div>

      <input
        type="text"
        placeholder="Search for food or restaurant..."
        className="search-bar"
      />

      <div className="user-icon">👤</div>
    </header>
  );
}
