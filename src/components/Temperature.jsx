import { useState } from "react";
import styles from "./Temperature.module.css";
function ConvertarTemperature() {
  const [temperature, setTemperature] = useState("");
  function getBackgroundColor() {
    if (temperature === "") {
      return styles.white;
    }
    const temp = Number(temperature);
    if (temp < 0) {
      return styles.white;
    } else if (temp <= 10) {
      return styles.blue;
    } else if (temp <= 22) {
      return styles.green;
    } else {
      return styles.red;
    }
  }
  return (
    <div className={`${styles.container} ${getBackgroundColor()}`}>
      <h2>Температура</h2>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Введіть градуси"
      />
      <p>Температура:{temperature || 0}°C</p>
    </div>
  );
}
export default ConvertarTemperature;
