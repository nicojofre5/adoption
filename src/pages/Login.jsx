import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/UsuarioService";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onChange" });
    
      const onSubmit = async (data) => {
        try {
          const user = await login(data.email, data.password);
          alert("Logueado con éxito!!!");
          console.log("Se logueó el user: ", user);
        } catch (error) {
          alert("Error en loggin: ",error.code)
          console.log("Error en login: ",error.code);
        }
      };
    
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Usuario</label><br />
            <input type="email" {...register("email", { required: true })} /><br />
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