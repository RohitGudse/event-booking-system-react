import { v4 as uuid } from "uuid";

export default function Ticket({ seats }) {
  return (
    <div>
      <h2>Ticket</h2>
      <p>ID: {uuid()}</p>
      <p>Seats: {seats.join(", ")}</p>
    </div>
  );
}