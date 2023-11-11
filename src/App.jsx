import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="¡Hola! Gracias por visitar nuestra tienda" />
              }
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categorias/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
