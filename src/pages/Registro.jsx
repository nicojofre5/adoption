import React from "react";
import { useForm } from "react-hook-form";
//import { useState } from "react";
import { create } from "../services/UsuarioService";

function Registro() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
    //setLoading(true);
    try {
      const user = await create(data);
      alert("hola");
      console.log("Este es el user creado: ", user);
      //setLoading(false);
      /*setAlert({
        variant: "success",
        text: "Gracias por registrarte",
        duration: 3000,
        link: "/ingresar",
      });*/

    } catch (e) {
        alert("error de usuario");
      console.log(e.code);


    }
  };

    return (
        <div>
            <h1>Regístrese</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Nombre</label> <br />
                <input type="text" {...register("nombre", { required: true })} />
                {errors.nombre && (

                    <span>El campo es obligatorio</span>

                )} <br />

                <label>Apellido</label> <br />
                <input type="text" {...register("apellido")} />

                <br />
                <label>Email</label> <br />
                <input
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                    })}
                />
                <br />
                {errors.email && (
                    <>
                        {errors.email?.type === "required" && (
                            <span>El campo es obligatorio</span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span>Formato email no valido</span>
                        )}
                    </>
                )}
                <br />
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

                <button type="submit" id="botonComprar">Registrarse</button>
            </form>

        </div >
    );
}


export default Registro;