function ColorButton({ color, onSelect }) {
  function handleClick() {
    onSelect(color);
  }
  return (
    <div>
      <button onClick={handleClick}>{color}</button>
    </div>
  );
}
export default ColorButton;
