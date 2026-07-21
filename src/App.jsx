// import { useState } from "react";

// import "./App.css";

// function Message() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleMessage() {
//     setIsOpen((current) => !current);
//   }
//   return (
//     <>
//       <button onClick={toggleMessage}>
//         {isOpen ? "Сховати повідомлення" : "Показати повідомлення"}
//       </button>
//       {isOpen && <div>Привіт</div>}
//     </>
//   );
// }

// function AddFruit() {
//   const [fruits, setFruits] = useState(["🍎", "🍌", "🍓"]);

//   function addFruit() {
//     setFruits((current) => [...current, "🍓"]);
//   }

//   function deleteFruit(indexToDelete) {
//     setFruits((current) =>
//       current.filter((fruit, index) => index !== indexToDelete),
//     );
//   }

//   function updateFruit(indexToUpdate) {
//     setFruits((current) =>
//       current.map((fruit, index) => (index === indexToUpdate ? "🥝" : fruit)),
//     );
//   }

//   return (
//     <>
//       <button onClick={addFruit}>Додати 🍓</button>

//       {fruits.map((fruit, index) => (
//         <div key={index}>
//           {fruit}

//           <button onClick={() => deleteFruit(index)}>Видалити</button>

//           <button onClick={() => updateFruit(index)}>Оновити</button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default AddFruit;

//Поки що App.jsx буде лише "вмикати" потрібний урок.
//Наприклад, якщо хочемо дивитися Lesson1:
// import Lesson1 from "./components/Lesson1";

// function App() {
//   return <Lesson1 />;
// }

// export default App;
//Якщо захочеш перейти до другого уроку, змінюєш лише імпорт і один рядок:
// import Lesson2 from "./components/Lesson2";

// function App() {
//   return <Lesson2 />;
// }

// export default App;
import "./App.css";
import UpdateItems from "./components/UpdateItems";
function App() {
  return <UpdateItems />;
}
export default App;
