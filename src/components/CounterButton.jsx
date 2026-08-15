function CounterButton({ value, onCount }) {
  function handleClick() {
    onCount(value);
  }
  return (
    <div>
      <button onClick={handleClick}>+{value}</button>
    </div>
  );
}
export default CounterButton;
