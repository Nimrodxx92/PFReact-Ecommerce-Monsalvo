import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  const { id, nombre, precio, img } = producto;

  return (
    <div className="item">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <Link to={`/detalle/${id}`}>
        <button className="button-details">Ver Detalle</button>
      </Link>
    </div>
  );
}

export default Item;
