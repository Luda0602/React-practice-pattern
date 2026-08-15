import ProductButton from "./ProductButton";
import { useState } from "react";
function Shop() {
  const [total, setTotal] = useState(0);
  function handleBuy(price) {
    setTotal((prev) => prev + price);
  }
  return (
    <div>
      <h2>загальна сума: {total}</h2>
      <ProductButton name="Кава" price={80} onBuy={handleBuy} />
      <ProductButton name="Торт" price={120} onBuy={handleBuy} />
      <ProductButton name="Сік" price={50} onBuy={handleBuy} />
    </div>
  );
}
export default Shop;
