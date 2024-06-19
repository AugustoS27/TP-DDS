import React from "react";
import { useForm } from "react-hook-form";
import { buscarPorId } from "../../services/categorias.services.js";

export default function CategoriaId() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="buscar_id" >ID: </label>
            <input type="text" id="buscar_id" {...register("buscar_id", {
                validate: (value) => {
                    const valor = parseInt(value);
                    if (!isNaN(valor)) {
                        return true;
                    } else {
                        return "ID debe ser un número";
                    }    
                } 
            })}/>
            {errors.buscar_id && <span>{errors.buscar_id.message}</span>}
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    );

}