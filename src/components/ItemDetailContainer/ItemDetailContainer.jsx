import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  const getSelected = async (idDetalle) => {
    try {
      const document = doc(db, "Productos", idDetalle);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };

      setProducto(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <div className="loading-products">
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
