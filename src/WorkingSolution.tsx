import React, { useState } from "react";
import "./App.css";

const sectionsData = [
  { name: "VIP", rows: 5, seatsPerRow: 5 },
  { name: "General", rows: 6, seatsPerRow: 6 },
  { name: "Economy", rows: 8, seatsPerRow: 8 },
];

const App = () => {
  const [bookedSeats, setBookedSeats] = useState({});

  const toggleSeat = (section, row, seat) => {
    const key = `${section}-${row}-${seat}`;
    setBookedSeats((prev) => {
      const updatedSeats = { ...prev };
      if (updatedSeats[key]) {
        delete updatedSeats[key]; // Unselect if already selected
      } else {
        if (Object.keys(updatedSeats).length < 5) {
          updatedSeats[key] = true; // Select seat if less than 5 are selected
        } else {
          alert("You can only book a maximum of 5 seats.");
        }
      }
      return updatedSeats;
    });
  };

  const isBooked = (section, row, seat) => {
    return bookedSeats[`${section}-${row}-${seat}`];
  };

  const confirmBooking = () => {
    const seatNumbers = Object.keys(bookedSeats).map((key) =>
      key.replace(/-/g, " ")
    );
    if (seatNumbers.length) {
      alert(`Seats booked: ${seatNumbers.join(", ")}`);
    } else {
      alert("No seats selected.");
    }
  };

  return (
    <div className="App">
      {sectionsData.map((section) => (
        <div key={section.name} className="section">
          <h3>
            {section.name} Section ({section.rows}x{section.seatsPerRow})
          </h3>
          <div className="seat-grid">
            {[...Array(section.rows)].map((_, rowIndex) => (
              <div key={rowIndex} className="seat-row">
                {[...Array(section.seatsPerRow)].map((_, seatIndex) => (
                  <div
                    key={seatIndex}
                    className={`seat ${
                      isBooked(section.name, rowIndex + 1, seatIndex + 1)
                        ? "booked"
                        : ""
                    }`}
                    onClick={() =>
                      toggleSeat(section.name, rowIndex + 1, seatIndex + 1)
                    }
                  >
                    {seatIndex + 1}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={confirmBooking} className="confirm-button">
        Confirm Booking
      </button>
    </div>
  );
};

export default App;
