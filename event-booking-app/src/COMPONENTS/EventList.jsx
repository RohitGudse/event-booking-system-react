import React, { useState, useMemo } from "react";
import EventCard from "./EventCard";

const EventList = () => {
  // Event Data
  const [eventData] = useState([
    {
      id: 1,
      name: "Music Concert",
      category: "Entertainment",
      location: "Mumbai",
      date: "20 July 2026",
      price: 999,
      availableSeats: 120,
    },
    {
      id: 2,
      name: "Movie Night",
      category: "Cinema",
      location: "Pune",
      date: "22 July 2026",
      price: 499,
      availableSeats: 80,
    },
    {
      id: 3,
      name: "Stand-Up Comedy",
      category: "Comedy",
      location: "Delhi",
      date: "25 July 2026",
      price: 699,
      availableSeats: 65,
    },
    {
      id: 4,
      name: "Food Festival",
      category: "Festival",
      location: "Bangalore",
      date: "28 July 2026",
      price: 299,
      availableSeats: 200,
    },
    {
      id: 5,
      name: "Tech Conference",
      category: "Technology",
      location: "Hyderabad",
      date: "30 July 2026",
      price: 1499,
      availableSeats: 150,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const filteredEvents = useMemo(() => {
    return eventData.filter((event) =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, eventData]);

  return (
    <div
      style={{
        width: "90%",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <h1>Upcoming Events</h1>

      <p>
        Browse all available events and reserve your seats before they are sold
        out.
      </p>

      <input
        type="text"
        placeholder="Search Event..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <h3>Total Events : {filteredEvents.length}</h3>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          No Event Found.
        </div>
      )}
    </div>
  );
};

export default EventList;