import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo-adidas.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="container__nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo Adidas" />
        </NavLink>
      </div>
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/Camisetas" className="nav__links">
              Camisetas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Camperas" className="nav__links">
              Camperas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pantalones" className="nav__links">
              Pantalones
            </NavLink>
          </li>
          <li>
            <NavLink to="/Zapatillas" className="nav__links">
              Zapatillas
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
