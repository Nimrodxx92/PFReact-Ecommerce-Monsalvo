import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Hola! Gracias por visitar nuestra tienda" />
    </div>
  );
}

export default App;
