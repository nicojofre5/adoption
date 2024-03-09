import React, { useState, useEffect } from "react";
import { getAllProductos } from "../services/ProductoServicio";
import Producto from "./Producto";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState();
  const [buscar, setBuscar] = useState("iPhone");

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProductos(buscar);

        console.log("Desde productos:", response.results);

        setProductos(response.results);
        setLoading(false);
      } catch (evento) {
        console.log(evento);
      }
    };

    request();
  }, [buscar]);

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setBuscar(value);
  };

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <>
     
      
       
        {productos.slice(1, 17).map((producto) => (
          <Producto
            id={producto.id}
            imagen={producto.thumbnail}
            nombre={producto.title}
            precio={producto.price}
          />
        ))}
      </>
    );
  }
}

export default Productos;
