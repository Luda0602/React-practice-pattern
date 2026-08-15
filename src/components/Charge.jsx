import { useState } from "react";
import styles from "./Charge.module.css";
function ChargeConvector() {
  const [charge, setCharge] = useState("");
  function getChargeBackground() {
    if (charge === "") {
      return styles.white;
    }
    const charges = Number(charge);
    if (charges <= 20) {
      return styles.red;
    } else if (charges <= 50) {
      return styles.orange;
    } else if (charges <= 80) {
      return styles.yellow;
    } else {
      return styles.green;
    }
  }
  return (
    <div className={`${StyleSheet.container} ${getChargeBackground()}`}>
      <h2>Заряд</h2>
      <input
        type="number"
        value={charge}
        onChange={(e) => setCharge(e.target.value)}
        placeholder="Введіть рівень заряду"
      />
      <p>Заряд батареї:{charge || 0}%</p>
    </div>
  );
}
export default ChargeConvector;
