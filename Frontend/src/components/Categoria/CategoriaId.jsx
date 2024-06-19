import React from "react";
import { useForm } from "react-hook-form";
import '../../styles/categorias.css'


export default function CategoriaId({ onSearch }) {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        onSearch(data.buscar_id);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="busqueda-form">
            <input className="input_buscar" placeholder="Ingresar ID" type="text" id="buscar_id" {...register("buscar_id", {
                validate: (value) => {
                    const valor = parseInt(value);
                    if (!isNaN(valor) || value === '') {
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