import React, { useState } from "react";


function Producto({id, nombre, precio, thumbnail, categoria }) {

    const [comprar, setComprar] = useState("");

    const handleComprar = (e) =>{
        setComprar("Compró el producto!!!")
    }

    return (
        <div className="contenerdorProducto">
            <img src={thumbnail} alt="Imagen producto" /><br />
            <div className="nombreYPrecio">
            <h2>{nombre}</h2>
            <h3>AR${precio}</h3>
            </div><br />
            <h3>{categoria}</h3>
            <div>{comprar}</div>
            <button id="botonComprar" onClick={handleComprar}>Comprar</button><button id="modificar">Modificar</button>
        </div>
    )
}

export default Producto;