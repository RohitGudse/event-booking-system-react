import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [event, setEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [user, setUser] = useState({ name: "Rohit" });

  return (
    <BookingContext.Provider
      value={{
        event,
        setEvent,
        selectedSeats,
        setSelectedSeats,
        user,
        setUser,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};