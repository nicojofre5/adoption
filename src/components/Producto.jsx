import React, { useState } from "react";

function Producto(props) {

  const [comprar, setComprar] = useState("");

  const handleComprar = (e) => {
    setComprar("Compró el producto")
  };
  return (
    <>
     
      <div class="cont-card">
        <div class="card">
          <h1>{props.nombre}</h1>
          <picture>
            <img src={props.imagen} alt="Imagen nike" />
          </picture>
          <div class="cont-precio">
            <h2> $ {props.precio}</h2>
          </div>
          
          <div>{comprar}</div>
          <div class="cont-button">
            
            <button className="comprar" id="comprar" onClick={handleComprar}>
              Comprar
            </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Producto;
