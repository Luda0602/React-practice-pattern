import { useState } from "react";

function CmConverter() {
  const [cm, setCm] = useState("");
  const meter = Number(cm) / 100;
  const kilometer = Number(cm) / 100000;
  return (
    <>
      <h2>Конвертар</h2>
      <input
        type="number"
        value={cm}
        onChange={(e) => setCm(e.target.value)}
        placeholder="Введіть значення в сантиметрах"
      />
      <p>Сантиметри:{cm || 0}</p>
      <p>Метри:{cm ? meter : 0}</p>
      <p>Кілометри:{cm ? kilometer : 0}</p>
    </>
  );
}
export default CmConverter;
