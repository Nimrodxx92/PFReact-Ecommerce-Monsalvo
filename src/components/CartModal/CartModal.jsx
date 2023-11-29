import "./CartModal.css";
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../CartContext/CartContext";
import Swal from "sweetalert2";

function CartModal({ producto }) {
  const { nombre, precio, img, descripcion, stock, genero, categoria } =
    producto || {};
  const [cantidadAgregada, setCantidadAgregada] = useState(1);
  const [importeTotal, setImporteTotal] = useState(precio);
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useCart();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleActualizarCantidad = (nuevaCantidad) => {
    setCantidadAgregada(nuevaCantidad);
    setImporteTotal(nuevaCantidad * precio);
  };

  const handleAgregarAlCarrito = () => {
    addToCart({
      nombre,
      precio,
      cantidad: cantidadAgregada,
      img,
      descripcion,
      genero,
      categoria,
    });
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        title: "title-add",
      },
    });
    setShowModal(false);
  };

  return (
    <div>
      <button className="addProducts" onClick={handleOpenModal}>
        Agregar producto
      </button>
      {showModal && (
        <div className="modal__pages">
          <div className="cart__modal">
            <img src={img} alt={nombre} />
            <div className="cart__info">
              <button className="close" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <h3>{nombre}</h3>
              <p>
                <span>Precio:</span> ${precio}
              </p>
              <p>{descripcion}</p>
              <ItemCount
                cantidad={cantidadAgregada}
                precioUnitario={precio}
                stock={stock}
                onCantidadChange={handleActualizarCantidad}
              />
              <p>Importe Total: ${importeTotal}</p>
              <div className="cart__buttons">
                <button onClick={() => setShowModal(false)}>
                  Seguir comprando
                </button>
                <button className="add-cart" onClick={handleAgregarAlCarrito}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
