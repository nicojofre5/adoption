import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { Routes, Route } from "react-router-dom";
function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  );
}

export default Rutas;
