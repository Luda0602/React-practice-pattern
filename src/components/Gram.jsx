import { useState } from "react";

function Convector() {
  const [gram, setGram] = useState("");

  const kilogram = Number(gram) / 1000;
  const tons = Number(gram) / 1000000;

  return (
    <>
      <h2>Конвертер</h2>

      <input
        type="number"
        value={gram}
        onChange={(e) => setGram(e.target.value)}
        placeholder="Введіть значення в грамах"
      />

      <p>Грами: {gram || 0}</p>
      <p>Кілограми: {gram ? kilogram : 0}</p>
      <p>Тонни: {gram ? tons : 0}</p>
    </>
  );
}

export default Convector;
