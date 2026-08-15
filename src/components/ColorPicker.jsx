import { useState } from "react";
import ColorButton from "./ColorButton";
function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("");
  function handleColor(color) {
    setSelectedColor(color);
  }
  return (
    <div>
      <h2>Обраний колір: {selectedColor}</h2>
      <ColorButton color="red" onChange={handleColor} />
      <ColorButton color="green" onChange={handleColor} />
      <ColorButton color="blue" onChange={handleColor} />
    </div>
  );
}
export default ColorPicker;
