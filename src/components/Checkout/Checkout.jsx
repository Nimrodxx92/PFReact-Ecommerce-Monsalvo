import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebase";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [orderID, setOrderID] = useState();
  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const { Nombre, Email, Telefono } = buyer;

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrder = async (data) => {
    try {
      setLoading(true);
      const ordersCollection = collection(db, "Orders");
      const orderRef = await addDoc(ordersCollection, data);
      setOrderID(orderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems) {
      console.error("El carrito es undefined o null");
      return;
    }
    const dia = new Date();
    const items = cartItems.map((e) => {
      return {
        nombre: e.nombre,
        precio: e.precio,
        cantidad: e.cantidad,
      };
    });
    const total = getTotalPrice();
    const data = {
      buyer: {
        Nombre,
        Email,
        Telefono,
      },
      items,
      dia,
      total,
    };
    generateOrder(data);
  };

  return (
    <>
      <div className="checkout">
        <h1>Finalizar Compra</h1>
        <ul className="orders__items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                {item.nombre} - ${item.precio} / Cantidad: {item.cantidad}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {!orderID && (
        <div className="checkout__form">
          <h4>Completar Datos:</h4>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              value={Nombre}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={handleInputChange}
              required
            />
            <input
              name="Telefono"
              placeholder="Telefono"
              value={Telefono}
              onChange={handleInputChange}
              required
            />
            <input
              type="submit"
              value="Finalizar Compra"
              className="finish-orders"
              disabled={loading}
            />
          </form>
          {loading && <div className="spinner"></div>}
        </div>
      )}
      <div>
        {orderID && (
          <div className="order__placed">
            <h5>Compra finalizada con éxito</h5>
            <p>{`Su código de compra es: ${orderID}`}</p>
            <Link to="/">
              <button>Realizar otra compra</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
