import { useState } from "react";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [success, setSuccess] = useState(false);

  function checkUser() {
    if (login === "Іван" && password === "111") {
      setSuccess(true);
      setMessage("");
      setColor("");
    } else {
      setSuccess(false);

      if (login === "Іван") {
        setMessage("Неправильний пароль");
        setColor("blue");
      } else {
        setMessage("Неправильний логін");
        setColor("red");
      }
    }
  }

  return (
    <div>
      <h2>Авторизація</h2>

      <div className="field">
        <label>
          Login
          <input
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </label>
      </div>

      <div className="field">
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <button onClick={checkUser}>Go</button>

      {success && <h1>😊</h1>}

      {!success && <p style={{ color: color }}>{message}</p>}
    </div>
  );
}

export default Login;
