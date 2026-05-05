import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import Ticket from "../components/Ticket";

export default function Success() {
  const { selectedSeats } = useContext(BookingContext);

  return (
    <div>
      <h2>Success</h2>
      <Ticket seats={selectedSeats} />
    </div>
  );
}