import React, { useContext, useMemo } from "react";
import { BookingContext } from "../context/BookingContext";

const PRICE_PER_SEAT = 250;

function BookingSummary() {
  const { selectedSeats } = useContext(BookingContext);

  // Calculate total seats
  const totalSeats = useMemo(() => {
    return selectedSeats.length;
  }, [selectedSeats]);

  // Calculate total amount
  const totalAmount = useMemo(() => {
    return totalSeats * PRICE_PER_SEAT;
  }, [totalSeats]);

  // Booking status
  const bookingStatus = useMemo(() => {
    if (totalSeats === 0) {
      return "No Seats Selected";
    }

    if (totalSeats <= 2) {
      return "Small Booking";
    }

    if (totalSeats <= 5) {
      return "Family Booking";
    }

    return "Group Booking";
  }, [totalSeats]);

  return (
    <section className="booking-summary-container">
      <div className="booking-summary-card">
        <header className="booking-header">
          <h2>Booking Summary</h2>
          <p>Review your selected movie seats before confirming.</p>
        </header>

        <div className="booking-content">

          <div className="summary-box">
            <h4>Booking Status</h4>
            <p>{bookingStatus}</p>
          </div>

          <div className="summary-box">
            <h4>Total Seats</h4>
            <p>{totalSeats}</p>
          </div>

          <div className="summary-box">
            <h4>Price Per Seat</h4>
            <p>₹{PRICE_PER_SEAT}</p>
          </div>

          <div className="summary-box">
            <h4>Total Amount</h4>
            <p>₹{totalAmount}</p>
          </div>

          <div className="selected-seat-section">
            <h3>Selected Seats</h3>

            {selectedSeats.length === 0 ? (
              <div className="empty-state">
                <p>No seats have been selected.</p>
                <p>Please choose your preferred seats.</p>
              </div>
            ) : (
              <div className="seat-list">
                {selectedSeats.map((seat, index) => (
                  <div
                    key={`${seat}-${index}`}
                    className="seat-card"
                  >
                    <span>Seat</span>
                    <strong>{seat}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedSeats.length > 0 && (
            <div className="booking-note">
              <h4>Booking Information</h4>

              <ul>
                <li>Seats selected successfully.</li>
                <li>Please verify your seat numbers.</li>
                <li>Tickets cannot be cancelled after confirmation.</li>
                <li>Carry your booking confirmation while entering the theatre.</li>
              </ul>
            </div>
          )}
        </div>

        <footer className="booking-footer">
          <button
            disabled={selectedSeats.length === 0}
            className="confirm-btn"
          >
            Confirm Booking
          </button>

          <button className="cancel-btn">
            Cancel
          </button>
        </footer>
      </div>
    </section>
  );
}

export default BookingSummary;