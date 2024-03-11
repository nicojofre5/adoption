import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { Link } from "react-router-dom";
import imgico from "../img/icoperri.png"

function NavBar() {
  return (
    <nav className="nav-bar">
      <picture className="cont-ico">
        <img src={imgico} alt="logo perro" />
      </picture>

      <ul className="menu">
        <Link to="/" element={<Home />} className="nav-link">
          Home
        </Link>
        <Link to="/Login" element={<Login />} className="nav-link">
          Login
        </Link>
        <Link to="/Registro" element={<Registro />} className="nav-link">
          Registro
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
