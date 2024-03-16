import React from "react";
import { useForm } from "react-hook-form";
import { create } from "../services/ProductoServicio";

function AltaPerri() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
        
        try {
            const user = await create(data);
            alert("Perri creado", user.email)
            console.log("Este es el user creado: ", user);

        } catch (e) {
            alert("Error al crear perri")
            console.log(e.code);
        }
    };

    return (
        <div>
            <h1>Regístrese</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Nombre</label> <br />
                <input type="text" {...register("title", { required: true })} />
                {errors.nombre && (

                    <span>El campo es obligatorio</span>

                )} <br />

                <label>Precio</label> <br />
                <input type="number" {...register("price")} />

                <br />
                <label>Descripción</label> <br />
                <input
                    type="text"
                    {...register("categoria", { required: true })}
                />
                <br />
                <label>URL del perri</label> <br />
                <input
                    type="text"
                    {...register("thumbnail", { required: true })}
                />
                <br />

                <button type="submit" id="botonComprar">Crear</button>
            </form>

        </div >
    );
}

export default AltaPerri;