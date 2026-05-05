import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#222", color: "#fff" }}>
      <Link to="/">Home</Link> | <Link to="/booking">Booking</Link>
    </nav>
  );
}