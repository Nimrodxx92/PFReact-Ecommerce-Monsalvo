import "./CartWidget.css";
import React from "react";
import carrito from "../../img/carrito-compra.png";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

function CartWidget() {
  const { getTotalItems } = useCart();

  return (
    <div className="cart__widget">
      <Link to="/cart">
        <img src={carrito} alt="Carrito de compras" />
      </Link>
      <div className="item__count">
        <span>{getTotalItems()}</span>
      </div>
    </div>
  );
}

export default CartWidget;
