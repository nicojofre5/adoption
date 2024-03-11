import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { Routes, Route } from "react-router-dom";
import AltaPerro from "../pages/AltaPerri";
function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Altaperro" element={<AltaPerro />} />
    </Routes>
  );
}

export default Rutas;
