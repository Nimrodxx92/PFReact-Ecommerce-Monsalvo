import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "../data/productos.json";
import { useLocation } from "react-router-dom";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const location = useLocation();
  const categoria = location.pathname.replace("/", "");

  useEffect(() => {
    const productosFiltrados = categoria
      ? productosData.filter((producto) => producto.categoria === categoria)
      : productosData;

    const productosAleatorios = productosFiltrados.sort(
      () => Math.random() - 0.5
    );

    setProductos(productosAleatorios);
  }, [categoria]);

  return (
    <div className="title__container">
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
