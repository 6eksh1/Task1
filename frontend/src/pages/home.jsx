import "../Styles/home.css";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

import bannerImg from "../images/banner.jpg";

export default function Home() {
  const categories = [
    { name: "All", img: "https://www.bing.com/th/id/OIP.4ea2hCkoyJSgqLcFb8athAHaEJ?w=329&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Idli", img: "https://th.bing.com/th/id/OIP.4O0xLx18Q_srTduV3meTUQHaI5?w=145&h=108&c=7&qlt=90&bgcl=7b74ab&r=0&o=6&dpr=1.3&pid=13.1" },
    { name: "Vada", img: "https://www.bing.com/th/id/OIP.iL-gKm60MbCRXcNQ7Ae6TAHaE8?w=292&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Dosa", img: "https://www.bing.com/th/id/OIP.skicA__OnDk5OTFK-x1zkQHaE7?w=226&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Pongal", img: "https://www.bing.com/th/id/OIP.DdCE2rPUK4s69S5Dm5uTLQHaFE?w=272&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Poori", img: "https://www.bing.com/th/id/OIP.hl0gjE4cQKKBXm_6zUno3QHaGw?w=187&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Biryani", img: "https://www.bing.com/th/id/OIP.hYAWojbrro3xW62L1cH6awHaE8?w=283&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Veg Meals", img: "https://www.bing.com/th/id/OIP.q7EDDPEXoEXHDn5-jxQr7AHaEK?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Non-Veg Meals", img: "https://www.bing.com/th/id/OIP.y9hHIhT-QBAx69P80YmssAHaHQ?w=198&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Fried Rice", img: "https://th.bing.com/th/id/OIP.58ZtpxDDfmx-7uTJ6WdicQHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"},
    { name: "Starters", img: "https://www.bing.com/th/id/OIP.fqTbwUDGyGFI3EAR-g1rYwHaGl?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  ];

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="top-bar">
        <div className="location">
          📍 45/3A Chennai
        </div>
        <button
          className="cart-btn"
          onClick={() => navigate("/menu")}
        >
          📋 Menu
        </button>
      </div>

      <div className="search-box">
        <input placeholder='Search "vada"' />
        🎤
      </div>

      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bannerImg})`,
        }}
      >
        <h2>GOLD FLASH SALE</h2>
        <p>₹1 for 3 months</p>
        <button>Join Gold Now</button>
      </div>

      <div className="categories">
        {categories.map((item) => (
          <div className="category" key={item.name}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="filters">
        <button>Filters</button>
        <button>Under ₹200</button>
        <button>Rating 4.0+</button>
        <button>Great Offers</button>
      </div>

      <h3 className="section-title">Recommended with Deals</h3>

      <div className="restaurant-list">
        <div className="card">
          <img src="https://www.bing.com/th/id/OIP.CQUh7csiGro7zBiZnYaMewHaEK?w=229&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h4>Tambura Pure Veg</h4>
          <p>⭐ 4.2 · 40–55 mins</p>
          <p>₹120 for one</p>
        </div>

        <div className="card">
          <img src="https://www.bing.com/th/id/OIP.sGuHPXVkto6zvM45Cp_71QHaE8?w=263&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h4>Bevi Tiffen Center</h4>
          <p>⭐ 3.5 · 30–35 mins</p>
          <p>₹90 for one</p>
        </div>

        <div className="card">
          <img src="https://www.bing.com/th/id/OIP.fCmVdNGvwur-YApJKnoJwwAAAA?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h4>Geetham</h4>
          <p>⭐ 3.9 · 10–15 mins</p>
          <p>₹120 for one</p>
        </div>

        <div className="card">
          <img src="https://www.bing.com/th/id/OIP.4sbyiR-05DXPTyV7l5JfhQHaHa?w=169&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h4>Zaitoon</h4>
          <p>⭐ 4.9 · 30–45 mins</p>
          <p>₹120 for one</p>
        </div>

        <div className="card">
          <img src="https://www.bing.com/th/id/OIP.4HnQ0AlevB8d4v1OO5lKCgHaEJ?w=354&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
          <h4>That Mallu Joint</h4>
          <p>⭐ 4.8 · 15–25 mins</p>
          <p>₹120 for one</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
