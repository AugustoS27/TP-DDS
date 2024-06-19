import React from "react";
import { useForm } from "react-hook-form";
import { postCategoria } from "../../services/categorias.services";
import Accordion from 'react-bootstrap/Accordion';

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
      <Accordion defaultActiveKey="none" className="mt-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Registrar Categoria</Accordion.Header>
        <Accordion.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="shadow-sm">
            <div className="mb-3">
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
                placeholder="Ingresar Nombre" 
              />
              {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
            </div>
    
            <div className="mb-3">
              <input 
                type="text" 
                id="descripcion" 
                {...register("descripcion")} 
                className="form-control"
                placeholder="Ingresar Descripcion"
              />
            </div>
    
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                id="activo" 
                {...register("activo")} 
                className="form-check-input"
              />
              <label htmlFor="activo" className="form-check-label">Activo</label>
            </div>
    
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      );

}





