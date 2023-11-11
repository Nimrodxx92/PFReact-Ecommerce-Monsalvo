import "./Cart.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

function Cart() {
  const {
    cartItems,
    removeCartItem,
    clearCart,
    getTotalPrice,
    updateCartItem,
  } = useCart();

  const handleRemoveItem = (item) => {
    removeCartItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleQuantityChange = (item, newQuantity) => {
    updateCartItem({ ...item, cantidad: newQuantity });
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
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="cart__item__details">
                    <h3>{item.nombre}</h3>
                    <p>Categoría: {item.categoria}</p>
                    <p>Género: {item.genero}</p>
                    <p>Precio: ${item.precio}</p>
                    <p>
                      Cantidad:
                      <input
                        type="number"
                        value={item.cantidad}
                        onChange={(e) =>
                          handleQuantityChange(
                            item,
                            parseInt(e.target.value, 10)
                          )
                        }
                        min="1"
                      />
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
