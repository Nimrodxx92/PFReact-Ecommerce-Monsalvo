import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="¡Hola! Gracias por visitar nuestra tienda" />
            }
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/Camisetas" element={<ItemListContainer />} />
          <Route path="/Camperas" element={<ItemListContainer />} />
          <Route path="/Pantalones" element={<ItemListContainer />} />
          <Route path="/Zapatillas" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
