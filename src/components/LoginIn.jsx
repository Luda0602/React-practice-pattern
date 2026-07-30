import { useState } from "react";

function LoginIn() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h2>Авторизація</h2>

      <label>
        <input
          type="checkbox"
          checked={isLogin}
          onChange={(event) => setIsLogin(event.target.checked)}
        />
        Користувач увійшов
      </label>

      <br />
      <br />

      {isLogin && <button>Вийти</button>}
    </div>
  );
}

export default LoginIn;
