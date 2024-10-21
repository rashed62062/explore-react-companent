import React, { useState } from "react";

export default function Team() {
  const [team, seTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    seTeam(newTeam);
  };

  const handleRemove = () => {
    seTeam(team - 1);
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <button onClick={handleAdd}> ADD</button>
      <button onClick={handleRemove}> Remove</button>
    </div>
  );
}
