import "./ItemList.css";
import React from "react";
import Item from "../Item/Item";

function ItemList({ productos, onAddToCart }) {
  return (
    <div className="item__list">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ItemList;
