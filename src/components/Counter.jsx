// const [count, setCount] = useState(0);
import { useState } from "react";
import CounterButton from "./CounterButton";
function Counter() {
  const [count, setCount] = useState(0);
  function handleButton(value) {
    setCount((prev) => prev + value);
  }
  return (
    <div>
      <h2>Рахунок:{count}</h2>
      <CounterButton value={1} onChange={handleButton} />
      <CounterButton value={5} onChange={handleButton} />
      <CounterButton value={10} onChange={handleButton} />
    </div>
  );
}
export default Counter;
