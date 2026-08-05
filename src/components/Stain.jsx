import { useState } from "react";
function MyButton({ onClick }) {
  return <button onClick={onClick}>+</button>;
}
function Count() {
  const [count, setCount] = useState(0);
  //   function increment() {
  //     setCount(count + 1);
  //   }
  //   function decrement() {
  //     setCount(count - 1);
  //   }
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <h2>Count{count}</h2>
      <MyButton />
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>+</button>
    </>
  );
}

export default Count;
