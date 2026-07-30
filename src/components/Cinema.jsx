import { useState } from "react";

function Cinema() {
  const [hall, setHall] = useState("");
  const [drink, setDrink] = useState("");
  const [snack, setSnack] = useState("");
  const [popcorn, setPopcorn] = useState("");
  const [juice, setJuice] = useState("");

  return (
    <div>
      <div className="container">
        <h2>Замовлення квитка</h2>

        <select value={hall} onChange={(e) => setHall(e.target.value)}>
          <option value="">Виберіть зал</option>
          <option value="VIP">VIP</option>
          <option value="Standard">Standard</option>
        </select>

        {/* VIP */}
        {hall === "VIP" && (
          <div>
            <h3>VIP</h3>

            <p>Напій</p>
            <select value={drink} onChange={(e) => setDrink(e.target.value)}>
              <option value="">Виберіть напій</option>
              <option value="Кава">Кава</option>
              <option value="Шампанське">Шампанське</option>
            </select>

            {drink === "Шампанське" && (
              <>
                <p>Закуска</p>

                <select
                  value={snack}
                  onChange={(e) => setSnack(e.target.value)}
                >
                  <option value="">Виберіть закуску</option>
                  <option value="Полуниця">Полуниця</option>
                  <option value="Сир">Сир</option>
                  <option value="Без закуски">Без закуски</option>
                </select>
              </>
            )}
          </div>
        )}

        {/* Standard */}
        {hall === "Standard" && (
          <div>
            <h3>Standard</h3>

            <p>Попкорн</p>
            <select
              value={popcorn}
              onChange={(e) => setPopcorn(e.target.value)}
            >
              <option value="">Виберіть попкорн</option>
              <option value="Солодкий">Солодкий</option>
              <option value="Солоний">Солоний</option>
            </select>

            <p>Напій</p>
            <select value={juice} onChange={(e) => setJuice(e.target.value)}>
              <option value="">Виберіть напій</option>
              <option value="Кола">Кола</option>
              <option value="Сік">Сік</option>
            </select>
          </div>
        )}

        {/* Підсумок */}
        {hall && (
          <div>
            <h2>Ваше замовлення</h2>

            <p>Зал: {hall}</p>

            {hall === "VIP" && (
              <>
                <p>Напій: {drink}</p>

                {drink === "Шампанське" && <p>Закуска: {snack}</p>}
              </>
            )}

            {hall === "Standard" && (
              <>
                <p>Попкорн: {popcorn}</p>
                <p>Напій: {juice}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cinema;
