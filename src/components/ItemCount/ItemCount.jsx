import "./ItemCount.css";
import React, { useState, useEffect } from "react";

function ItemCount({ stock, cantidadInicial, onCantidadChange }) {
  const [count, setCount] = useState(cantidadInicial || 1);

  useEffect(() => {
    if (count < 1) {
      setCount(1);
    } else if (count > stock) {
      setCount(stock);
    }

    onCantidadChange(count);
  }, [count, stock, onCantidadChange]);

  const incrementCount = () => {
    setCount((prevCount) => Math.min(prevCount + 1, stock));
  };

  const decrementCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  return (
    <div className="change__cant">
      <p>Cantidad:</p>
      <div>
        <button className="discount" onClick={decrementCount}>
          -
        </button>
        <span>{count}</span>
        <button className="add" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
