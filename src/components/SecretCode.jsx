import { useState } from "react";
function SecretCode() {
  const [name, setName] = useState("");
  const [secretcode, setSecretcode] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [succes, setSucces] = useState(false);

  function checkData() {
    if (name === "Admin" && secretcode === "2026") {
      setSucces(true);
      setMessage("");
      setColor("");
    } else {
      setMessage("Неправильний код");
      setColor("orange");
      setSucces(false);
      if (name !== "Admin") {
        setMessage("Такого користувача не існує");
        setColor("red");
      }
    }
  }
  return (
    <div>
      <h2>Перевірка коду</h2>

      <div className="field">
        <label>
          Ім'я
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <div className="field">
        <label>
          Секретний код
          <input
            type="text"
            value={secretcode}
            onChange={(event) => setSecretcode(event.target.value)}
          />
        </label>
      </div>
      <button onClick={checkData}>Перевірити</button>
      {succes && <h2>Авторизовано</h2>}
      {!succes && <p style={{ color: color }}>{message}</p>}
    </div>
  );
}
export default SecretCode;
