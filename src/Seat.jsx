import React from "react";

export default function Seat({ seat, sectionName, isSelected, onClick }) {
  const seatStyle = {
    width: "40px",
    height: "40px",
    margin: "5px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isSelected ? "#ff6b6b" : "#cfcfcf",
    cursor: isSelected ? "not-allowed" : "pointer",
    borderRadius: "4px",
  };

  return (
    <div style={seatStyle} onClick={!isSelected ? onClick : null}>
      {seat.row + 1}-{seat.col + 1}
    </div>
  );
}
