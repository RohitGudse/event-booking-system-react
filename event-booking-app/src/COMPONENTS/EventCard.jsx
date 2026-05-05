import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{event.name}</h3>
      <Link to={`/event/${event.id}`}>View</Link>
    </div>
  );
}