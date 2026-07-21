//Тут буде Update.
import { useState } from "react";
//Додавання фруктів
function Add() {
  const [fruits, setFruits] = useState([]);
  // "🍎", "🍌", "🍓", "🥝"
  function AddFruit() {
    setFruits((current) => [...current, "🍓"]);
  }
  //Видалення фруктів
  function deleteFruits(indexToDoDelete) {
    setFruits((current) =>
      current.filter((fruit, index) => index !== indexToDoDelete),
    );
  }
  function updateFruit(updateElement) {
    setFruits((current) =>
      current.map((fruit, index) => (index === updateElement ? "🥝" : fruit)),
    );
  }
  return (
    <>
      <h3>Мій перший React-проєкт</h3>
      <h1>Мої фрукти</h1>
      <button onClick={AddFruit}>Додати полуницю</button>

      {fruits.length === 0 ? (
        <p>Список порожній</p>
      ) : (
        fruits.map((fruit, index) => (
          <div key={index}>
            {fruit}
            <button onClick={() => deleteFruits(index)}>Видалити</button>
            <button onClick={() => updateFruit(index)}>Замінити на ківі</button>
          </div>
        ))
      )}
    </>
  );
}
export default Add;
