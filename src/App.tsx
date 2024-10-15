import "./App.css";
import WorkingSolution from "./WorkingSolution";

import React, { useState } from "react";
import Section from "./Section.jsx";
import Seat from "./Seat.jsx";

const sections = [
  { name: "VIP", rows: 5, cols: 5 },
  { name: "General", rows: 6, cols: 6 },
  { name: "Economy", rows: 8, cols: 8 },
];

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Add a new seat to the selected seats array
  const handleSeatSelect = (sectionName, seat) => {
    if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, { sectionName, seat }]);
    } else {
      alert("You can only book up to 5 seats.");
    }
  };

  // Confirm booking and clear selected seats
  const confirmBooking = () => {
    alert(
      `You have booked the following seats:\n${selectedSeats
        .map(
          (s) =>
            `${s.sectionName} - Row ${s.seat.row + 1}, Col ${s.seat.col + 1}`
        )
        .join("\n")}`
    );
    setSelectedSeats([]); // Reset selected seats after confirmation
  };

  return (
    <div>
      <h1>Diljit Dosanjh Concert Ticket Booking</h1>
      {sections.map((section) => (
        <Section
          key={section.name}
          sectionName={section.name}
          rows={section.rows}
          cols={section.cols}
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
        />
      ))}
      <button onClick={confirmBooking} disabled={selectedSeats.length === 0}>
        Confirm Booking
      </button>
    </div>
  );
}
