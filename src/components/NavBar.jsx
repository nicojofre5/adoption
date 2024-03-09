import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="nav-bar">
        <ul className="menu">
          <Link to="/" element={<Home />} className="nav-link">
            Home
          </Link>
          <Link to="/Loguear" element={<Login />} className="nav-link">
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