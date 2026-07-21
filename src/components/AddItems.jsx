//Тут буде Add.

import { useState } from "react";

function Add() {
  const [fruits, setFruits] = useState([]);
  // "🍎", "🍌", "🍓", "🥝"
  function AddFruit() {
    setFruits((current) => [...current, "🍓"]);
  }

  return (
    <>
      <h3>Мій перший React-проєкт</h3>
      <h1>Мої фрукти</h1>
      <button onClick={AddFruit}>Додати полуницю</button>

      {fruits.length === 0 ? (
        <p>Список порожній</p>
      ) : (
        fruits.map((fruit, index) => <div key={index}>{fruit}</div>)
      )}
    </>
  );
}
export default Add;
