import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartModal from "../CartModal/CartModal";

function Checkout() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  const handleItemCountChange = (itemId, newQuantity) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              importeTotal: newQuantity * item.precio,
            }
          : item
      )
    );
  };

  const handleCheckout = () => {
    console.log("Orden finalizada:", {
      name,
      lastName,
      phone,
      email,
      orderItems,
    });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {orderItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity} - Importe Total: $
              {item.importeTotal}
            </li>
          ))}
        </ul>
      )}

      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Confirmar Email:
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </label>

        {orderItems.map((item) => (
          <ItemCount
            key={item.id}
            cantidadInicial={item.quantity}
            precioUnitario={item.precio}
            onCantidadChange={(newQuantity) =>
              handleItemCountChange(item.id, newQuantity)
            }
          />
        ))}

        <button type="button" onClick={handleCheckout}>
          Finalizar Orden
        </button>
      </form>

      <div className="cart-buttons">
        <Link to="/">Volver a la tienda</Link>
      </div>

      <CartModal orderItems={orderItems} />
    </div>
  );
}

export default Checkout;
