import React, { useState, useEffect } from "react";
import { getAllProductos } from "../services/ProductoServicio";
import Producto from "./Producto";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState();


  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProductos();

        console.log("Desde productos:", response.results);

        setProductos(response.results);
        setLoading(false);
      } catch (evento) {
        console.log(evento);
      }
    };

    request();
  }, []);



  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <>
          {productos.map((producto) => (
          <Producto
            key={producto.id}
            id={producto.id}
            thumbnail={producto.data().thumbnail}
            nombre={producto.data().title}
            precio={producto.data().price}
            categoria={producto.data().categoria}
          />
        ))}
      </>
    );
  }
}

export default Productos;
