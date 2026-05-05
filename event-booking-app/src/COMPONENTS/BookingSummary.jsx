import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingSummary() {
  const { selectedSeats } = useContext(BookingContext);

  return (
    <div>
      <h3>Selected Seats:</h3>
      {selectedSeats.join(", ")}
    </div>
  );
}