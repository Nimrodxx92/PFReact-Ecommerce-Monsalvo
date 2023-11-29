import "./ItemDetail.css";
import React from "react";
import { Link } from "react-router-dom";
import CartModal from "../CartModal/CartModal";

function ItemDetail({ producto }) {
  const { nombre, precio, img, descripcion, categoria, genero } = producto;
  const descripcionProducto = descripcion ? descripcion.split(". ") : [];

  return (
    <div className="item__detail">
      <img src={img} alt={nombre} />
      <div className="text__content">
        <p className="category">
          {categoria} - {genero}
        </p>
        <h2>{nombre}</h2>
        <p className="price">${precio}</p>
        <CartModal producto={producto} />
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
