import { useState } from "react";

function Order() {
  const [dish, setDish] = useState("");

  const [waitingList, setWaitingList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  // 1. Додаємо нове замовлення
  function addDish() {
    if (dish.trim() === "") return;

    const newDish = {
      id: Date.now(),
      name: dish.trim(),
    };

    setWaitingList((prev) => [...prev, newDish]);
    setDish("");
  }

  // 2. Очікує -> Готується
  function startCooking(item) {
    setWaitingList((prev) => prev.filter((dish) => dish.id !== item.id));

    setProcessingList((prev) => [...prev, item]);
  }

  // 3. Готується -> Готове
  function finishCooking(item) {
    setProcessingList((prev) => prev.filter((dish) => dish.id !== item.id));

    setCompletedList((prev) => [...prev, item]);
  }

  // 4. Подано -> видаляємо
  function serveDish(item) {
    setCompletedList((prev) => prev.filter((dish) => dish.id !== item.id));
  }

  return (
    <div>
      <h2>Нова замовлена страва:</h2>

      <input
        type="text"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        placeholder="Введіть страву"
      />

      <button onClick={addDish}>Додати</button>

      <table border="1">
        <thead>
          <tr>
            <th>Очікують на виконання</th>
            <th>Виконуються</th>
            <th>Готові до виносу</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {/* 1 список */}
            <td>
              {waitingList.map((item) => (
                <div key={item.id}>
                  {item.name}

                  <button onClick={() => startCooking(item)}>Готувати</button>
                </div>
              ))}
            </td>

            {/* 2 список */}
            <td>
              {processingList.map((item) => (
                <div key={item.id}>
                  {item.name}

                  <button onClick={() => finishCooking(item)}>
                    Приготовано
                  </button>
                </div>
              ))}
            </td>

            {/* 3 список */}
            <td>
              {completedList.map((item) => (
                <div key={item.id}>
                  {item.name}

                  <button onClick={() => serveDish(item)}>Подано</button>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Order;
