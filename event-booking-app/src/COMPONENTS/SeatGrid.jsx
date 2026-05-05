import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import Seat from "./Seat";

export default function SeatGrid() {
  const { selectedSeats, setSelectedSeats } = useContext(BookingContext);

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggle = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 200 }}>
      {seats.map((s) => (
        <Seat
          key={s}
          seat={s}
          selected={selectedSeats.includes(s)}
          onClick={() => toggle(s)}
        />
      ))}
    </div>
  );
}