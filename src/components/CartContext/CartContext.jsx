import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const updateCartItem = (updatedItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.nombre === updatedItem.nombre ? updatedItem : item
      )
    );
  };

  const removeCartItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.nombre !== itemToRemove.nombre)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};
