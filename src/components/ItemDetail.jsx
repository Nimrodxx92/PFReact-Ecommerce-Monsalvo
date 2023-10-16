import React from "react";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const { nombre, precio, imagen, descripcion, categoria, genero } = producto;
  const descripcionProducto = descripcion.split(". ");

  return (
    <div className="item__detail">
      <img src={imagen} alt={nombre} />
      <div className="text__content">
        <p className="category">
          {categoria} - {genero}
        </p>
        <h2>{nombre}</h2>
        <p className="price">${precio}</p>
        <ul className="description">
          {descripcionProducto.map((linea, index) => (
            <li key={index}>{linea}</li>
          ))}
        </ul>
        <Link to="/">
          <button className="btn-link">Volver a la lista de productos</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
