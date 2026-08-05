import { useState } from "react";
import tableImg from "../assets/table.png";
import flowerImg from "../assets/flower.png";

function EnglishTrainer() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const words = [
    {
      english: "table",
      translation: "стіл",
      image: tableImg,
    },
    {
      english: "flower",
      translation: "квітка",
      image: flowerImg,
    },
  ];

  const currentWord = words[0];

  function checkAnswer() {
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = currentWord.translation.toLowerCase();

    if (userAnswer === correctAnswer) {
      setResult(true);
    } else {
      setResult(false);
    }
  }

  let borderColor = "gray";

  if (result === true) {
    borderColor = "green";
  } else if (result === false) {
    borderColor = "red";
  }

  return (
    <div
      style={{
        border: `3px solid ${borderColor}`,
        padding: "20px",
        width: "300px",
      }}
    >
      <img src={currentWord.image} alt={currentWord.english} width="250" />

      <h3>{currentWord.english}</h3>

      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Введіть переклад"
      />

      <button onClick={checkAnswer}>Перевірити</button>

      {result === true && <p>Добре. Молодець!</p>}

      {result === false && <p>Невірно, спробуйте ще раз</p>}
    </div>
  );
}

export default EnglishTrainer;
