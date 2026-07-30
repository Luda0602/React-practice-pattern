import { useState } from "react";

function AgeCheck() {
  const [age, setAge] = useState("");

  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Введіть вік"
      />

      {age >= 18 ? <p>Доступ дозволено</p> : <p>Доступ заборонено</p>}
    </div>
  );
}

export default AgeCheck;
