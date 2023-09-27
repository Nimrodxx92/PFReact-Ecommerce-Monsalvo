import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/img/logo-adidas.png";

function NavBar() {
  const handleLogoClick = () => {
    window.location.href = "../index.html";
  };

  return (
    <div className="container__nav">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo Adidas" />
      </div>
      <nav>
        <ul className="links">
          <li className="nav__links">
            <a href="../index.html">Inicio</a>
          </li>
          <li className="nav__links">
            <a href="/mujer">Mujer</a>
          </li>
          <li className="nav__links">
            <a href="/hombre">Hombre</a>
          </li>
          <li className="nav__links">
            <a href="/niños">Niños</a>
          </li>
          <li className="nav__links">
            <a href="/deporte">Deporte</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
