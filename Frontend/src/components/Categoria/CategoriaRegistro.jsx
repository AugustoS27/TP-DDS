import React from "react";
import { useForm } from "react-hook-form";
import { postCategoria } from "../../services/categorias.services";


export default function CategoriaRegistro({ actualizarCategorias }) {
    
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = (data) => {
        postCategoria(data).then((respuesta) => {
            console.log(respuesta);
            actualizarCategorias();
            reset();
        });
    } 

    return (
        <div className="container mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre: </label>
              <input 
                type="text" 
                id="nombre" 
                {...register("nombre", {
                  required: {
                    value: true,
                    message: 'Nombre requerido'
                  }
                })} 
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} 
              />
              {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
            </div>
    
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción: </label>
              <input 
                type="text" 
                id="descripcion" 
                {...register("descripcion")} 
                className="form-control"
              />
            </div>
    
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                id="activo" 
                {...register("activo")} 
                className="form-check-input"
              />
              <label htmlFor="activo" className="form-check-label">Activo: </label>
            </div>
    
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      );

}