import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function UserProfile() {
  const { user } = useContext(BookingContext);
  return <p>User: {user.name}</p>;
}