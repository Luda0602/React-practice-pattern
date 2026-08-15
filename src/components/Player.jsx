import { useState } from "react";
function Player({ playerNumber }) {
  const [digit, setDigit] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    if (value === "" || /^[0-9]$/.test(value)) {
      setDigit(value);
    }
  }
  return (
    <div>
      <h2>Гравець{playerNumber}</h2>
      <label>Цифра:</label>
      <input type="text" value={digit} onChange={handleChange} />
      <button>Зроби хід</button>
    </div>
  );
}
export default Player;
