import "./ItemCount.css";
import React, { useState } from "react";

function ItemCount({ precioUnitario, cantidadInicial, onCantidadChange }) {
  const [count, setCount] = useState(cantidadInicial || 1);

  const incrementCount = () => {
    setCount(count + 1);
    onCantidadChange(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      onCantidadChange(count - 1);
    }
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
