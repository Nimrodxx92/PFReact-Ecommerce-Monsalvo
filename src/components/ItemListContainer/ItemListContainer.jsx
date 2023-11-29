import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer(saludar) {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productData = [];

      try {
        const q = idCategoria
          ? query(
              collection(db, "Productos"),
              where("categoria", "==", idCategoria)
            )
          : collection(db, "Productos");

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>
          productData.push({ ...doc.data(), id: doc.id })
        );

        setProductos(
          idCategoria
            ? productData.filter(
                (producto) => producto.categoria === idCategoria
              )
            : productData.sort(() => Math.random() - 0.5)
        );
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [idCategoria]);

  return (
    <div className="title__container">
      <h1>{saludar.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
