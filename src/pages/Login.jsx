import React from "react";

function Login() {
  return(
    <div className="cont-gral-form">
    <form action="/" method="post" className="form-login">
        <label for="user">
           Usuario
        </label>
        <input type="text" name="user" id="" required placeholder="Ingresar usuario" />
        <label for="pass">
           Password
        </label>
        <input type="password" name="pass" id="" required placeholder="Ingresar password" />
        <div className="cont-button-submit">
            <button type="submit" className="enviar-form">Enviar</button>
        </div>
      </form>
</div>
  );
}

export default Login;
