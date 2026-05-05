import EventCard from "./EventCard";

const events = [
  { id: 1, name: "Music Concert" },
  { id: 2, name: "Movie Night" },
];

export default function EventList() {
  return (
    <div>
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}