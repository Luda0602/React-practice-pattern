import { useState } from "react";
function Service() {
  const [technics, setTechnics] = useState("");
  const [waitingList, setWaitingList] = useState([]);
  function addApplication() {
    if (technics === "") return;
    const newTechnics = {
      id: Date.now(),
      technics: technics.trim(),
    };
    setWaitingList((prev) => [...prev, newTechnics]);
    setTechnics("");
  }
  return (
    <div>
      <h2>Список заявок у сервісному центрі</h2>
      <input
        type="text"
        value={technics}
        onChange={(e) => setTechnics(e.target.value)}
        placeholder="Назва техніки"
      />
      <button onClick={addApplication}>Додати заявку</button>
    </div>
  );
}
export default Service;
