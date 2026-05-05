export default function Seat({ seat, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 30,
        height: 30,
        margin: 5,
        background: selected ? "green" : "gray",
      }}
    >
      {seat}
    </div>
  );
}