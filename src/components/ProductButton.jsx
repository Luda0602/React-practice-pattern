function ProductButton({ name, price, onBuy }) {
  function handleClick() {
    onBuy(price);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {name} - {price}грн
      </button>
    </div>
  );
}
export default ProductButton;
