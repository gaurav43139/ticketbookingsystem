import React from "react";
import Seat from "./Seat";

export default function Section({
  sectionName,
  rows,
  cols,
  selectedSeats,
  onSeatSelect,
}) {
  const seats = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => ({
      row: rowIndex,
      col: colIndex,
    }))
  );

  return (
    <div>
      <h2>{sectionName} Section</h2>
      <div
        style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {seats.flat().map((seat) => (
          <Seat
            key={`${sectionName}-${seat.row}-${seat.col}`}
            seat={seat}
            sectionName={sectionName}
            isSelected={selectedSeats.some(
              (s) =>
                s.sectionName === sectionName &&
                s.seat.row === seat.row &&
                s.seat.col === seat.col
            )}
            onClick={() => onSeatSelect(sectionName, seat)}
          />
        ))}
      </div>
    </div>
  );
}
