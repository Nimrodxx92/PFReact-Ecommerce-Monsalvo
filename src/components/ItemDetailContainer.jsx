import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productosData from "../data/productos.json";

function ItemDetailContainer() {
  const { id } = useParams();
  const productId = parseInt(id);
  const producto = productosData.find((producto) => producto.id === productId);

  return (
    <div className="container__detail">
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div>No se encontró el producto</div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
