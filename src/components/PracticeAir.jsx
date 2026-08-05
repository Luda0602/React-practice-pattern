import { useState } from "react";

function TicketOfAirport() {
  const [ticket, setTicket] = useState("");
  const [newspaper, setNewspaper] = useState("");
  const [cognac, setCognac] = useState("");
  const [snack, setSnack] = useState("");
  const [beer, setBeer] = useState("");
  const [chips, setChips] = useState("");

  let background = "";

  if (ticket === "business") {
    background = `${import.meta.env.BASE_URL}business.png`;
  } else if (ticket === "econom") {
    background = `${import.meta.env.BASE_URL}econom.png`;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Вибір квитка</h2>

      <select value={ticket} onChange={(e) => setTicket(e.target.value)}>
        <option value="">Виберіть</option>
        <option value="business">Бізнес</option>
        <option value="econom">Економ</option>
      </select>

      {/* Бізнес */}
      {ticket === "business" && (
        <div>
          <h3>Бізнес клас</h3>

          <p>Газета</p>
          <select
            value={newspaper}
            onChange={(e) => setNewspaper(e.target.value)}
          >
            <option value="">Оберіть газету</option>
            <option value="Forbes">Forbes</option>
            <option value="Financial Times">Financial Times</option>
            <option value="The Times">The Times</option>
          </select>

          <p>Коньяк</p>
          <select value={cognac} onChange={(e) => setCognac(e.target.value)}>
            <option value="">Оберіть коньяк</option>
            <option value="Hennessy">Hennessy</option>
            <option value="Martell">Martell</option>
            <option value="Courvoisier">Courvoisier</option>
          </select>

          {cognac !== "" && (
            <div>
              <p>Закуска?</p>
              <select value={snack} onChange={(e) => setSnack(e.target.value)}>
                <option value="">Оберіть</option>
                <option value="Так">Так</option>
                <option value="Ні">Ні</option>
              </select>
            </div>
          )}
        </div>
      )}

      {/* Економ */}
      {ticket === "econom" && (
        <div>
          <h3>Економ клас</h3>

          <p>Тип пива</p>
          <select value={beer} onChange={(e) => setBeer(e.target.value)}>
            <option value="">Оберіть пиво</option>
            <option value="Світле">Світле</option>
            <option value="Темне">Темне</option>
            <option value="Безалкогольне">Безалкогольне</option>
          </select>

          <p>Чипси</p>
          <select value={chips} onChange={(e) => setChips(e.target.value)}>
            <option value="">Оберіть чипси</option>
            <option value="Lays">Lays</option>
            <option value="Pringles">Pringles</option>
            <option value="Люкс">Люкс</option>
          </select>
        </div>
      )}
      <p>{ticket}</p>
    </div>
  );
}

export default TicketOfAirport;
