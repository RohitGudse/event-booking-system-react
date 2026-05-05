import { useState } from "react";

export default function useSeats() {
  const [seats, setSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return { seats, toggleSeat };
}