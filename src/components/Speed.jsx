import { useState } from "react";
import styles from "./Speed.module.css";
function ChangeSpeed() {
  const [speedLimit, setSpeedLimit] = useState("");
  const [currentSpeed, setCurrentSpeed] = useState("");
  const percent = (Number(currentSpeed) / Number(speedLimit)) * 100;
  function getSpeedColor() {
    if (currentSpeed === "") {
      return styles.white;
    }

    if (percent < 50) {
      return styles.orange;
    } else if (percent <= 100) {
      return styles.green;
    } else {
      return styles.red;
    }
  }

  return (
    <div className={`${styles.container} ${getSpeedColor()}`}>
      <h2 className={styles.title}>Швидкість</h2>
      <div className="field">
        <label className="label">Дозволена швидкість</label>

        <input
          className={getSpeedColor()}
          type="number"
          value={speedLimit}
          onChange={(e) => setSpeedLimit(e.target.value)}
          placeholder="Введіть дозволену швидкість"
        />
      </div>
      <div className="field">
        <label className="label">Поточна швидкість</label>
        <input
          className="input"
          type="number"
          value={currentSpeed}
          onChange={(e) => setCurrentSpeed(e.target.value)}
          placeholder="Введіть поточну швидкість"
          disabled={speedLimit === ""}
        />
      </div>
      {percent > 90 && <p className={styles.warning}>Увага!</p>}
    </div>
  );
}
export default ChangeSpeed;
