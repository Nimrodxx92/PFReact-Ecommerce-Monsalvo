import "./Cart.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

function Cart() {
  const { cartItems, removeCartItem, clearCart, getTotalPrice } = useCart();
  console.log(cartItems);

  const handleRemoveItem = (item) => {
    removeCartItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart__container">
      <h2>Bienvenidos al carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart__item">
                  <img src={item.img} alt={item.nombre} />
                  <div className="cart__item__details">
                    <p className="genero">
                      {item.categoria} / {item.genero}
                    </p>
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <p>
                      Cantidad: <span>{item.cantidad}</span>
                    </p>
                    <p>Total: ${item.precio * item.cantidad}</p>
                    <button
                      className="delete"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="finish__cart">
            <p>Total: ${getTotalPrice()}</p>
            <div className="cart__buttons">
              <button className="clear" onClick={handleClearCart}>
                Vaciar Carrito
              </button>
              <Link to="/checkout">
                <button className="finish">Finalizar Compra</button>
              </Link>
              <Link to="/">
                <button>Volver a la tienda</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
