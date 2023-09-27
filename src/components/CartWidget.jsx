import React from "react";
import carrito from "../assets/img/carrito-compra.png";

// Acá va la función para contabilizar el carrito, el <span> se reemplaza
function CartWidget() {
  return (
    <div className="cart__widget">
      <img src={carrito} alt="Carrito de compras" />
      <div className="item__count">
        <span>3</span>
      </div>
    </div>
  );
}

export default CartWidget;
