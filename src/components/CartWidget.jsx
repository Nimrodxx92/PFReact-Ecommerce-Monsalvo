import React from "react";
import carrito from "../img/carrito-compra.png";

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
