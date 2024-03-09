import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from '../services/UsuarioService';

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onChange" });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Usuario</label><br />
            <input type="text" {...register("usuario", { required: true })} /><br />
            <label>Contraseña</label> <br />
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })} required
            /> <br />
            {errors.password && (
              <>
                {errors.password?.type === "required" && (
                  <span>El campo es obligatorio</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Debe completar al menos 6 caracteres</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span>Debe completar menos de 12 caracteres</span>
                )}
              </>
            )} <br />
            <button type="submit" id="botonComprar">Enviar</button>
          </form>
        </div>);
}

export default Login;