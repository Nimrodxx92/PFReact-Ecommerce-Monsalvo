import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productData = [];

      const collections = ["camisetas", "Camperas", "Pantalones", "Zapatillas"];

      try {
        for (const collectionName of collections) {
          const querySnapshot = await getDocs(collection(db, collectionName));
          querySnapshot.forEach((doc) => productData.push(doc.data()));
        }

        const filteredProducts = idCategoria
          ? productData.filter((producto) => producto.categoria === idCategoria)
          : productData.sort(() => Math.random() - 0.5);

        setProductos(filteredProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, [idCategoria]);

  return (
    <div className="title__container">
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
