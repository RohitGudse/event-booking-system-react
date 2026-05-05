import { useParams, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Event {id}</h2>
      <button onClick={() => navigate("/booking")}>
        Book Now
      </button>
    </div>
  );
}