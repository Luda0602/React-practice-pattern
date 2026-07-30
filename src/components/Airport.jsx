import { useState } from "react";

function Airport() {
  const [ticket, setTicket] = useState("");
  const [newspaper, setNewspaper] = useState("");
  const [drink, setDrink] = useState("");
  const [snack, setSnack] = useState("");
  const [beer, setBeer] = useState("");
  const [chips, setChips] = useState("");

  return (
    <div>
      <h2>Виберіть клас квитка</h2>

      <select value={ticket} onChange={(e) => setTicket(e.target.value)}>
        <option value="">Виберіть</option>
        <option value="business">Бізнес</option>
        <option value="econom">Економ</option>
      </select>

      {/* Бізнес клас */}
      {ticket === "business" && (
        <div>
          <h3>Бізнес клас</h3>

          <p>Газета</p>
          <select
            value={newspaper}
            onChange={(e) => setNewspaper(e.target.value)}
          >
            <option value="">Виберіть газету</option>
            <option value="Forbes">Forbes</option>
            <option value="Times">Times</option>
          </select>

          <p>Напій</p>
          <select value={drink} onChange={(e) => setDrink(e.target.value)}>
            <option value="">Виберіть напій</option>
            <option value="Коньяк">Коньяк</option>
            <option value="Сік">Сік</option>
          </select>

          {drink === "Коньяк" && (
            <>
              <p>Закуска</p>

              <select value={snack} onChange={(e) => setSnack(e.target.value)}>
                <option value="">Виберіть</option>
                <option value="Так">Так</option>
                <option value="Ні">Ні</option>
              </select>
            </>
          )}
        </div>
      )}

      {/* Економ клас */}
      {ticket === "econom" && (
        <div>
          <h3>Економ клас</h3>

          <p>Пиво</p>
          <select value={beer} onChange={(e) => setBeer(e.target.value)}>
            <option value="">Виберіть пиво</option>
            <option value="Світле">Світле</option>
            <option value="Темне">Темне</option>
          </select>

          <p>Чипси</p>
          <select value={chips} onChange={(e) => setChips(e.target.value)}>
            <option value="">Виберіть чипси</option>
            <option value="Lays">Lays</option>
            <option value="Pringles">Pringles</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Airport;
