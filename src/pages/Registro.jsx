import React from "react";

function Registro() {
  return (
    <div class="cont-form">
      <h1>Registrarse</h1>
      <div class="contenedorform">
        <form action="#" method="post" class="form-registrar">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id=""
            required
            placeholder="Ingresar nombre"
          />
          <label for="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id=""
            required
            placeholder="Ingresar apellido"
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Ingresar email"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Ingresar password"
          />
          <label for="confpassword">Confirmar password</label>
          <input
            type="password"
            name="confpassword"
            id=""
            required
            placeholder="Repetir password"
          />
          <div class="cont-button-submit">
            <button type="submit" class="enviar-form">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
