import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useForm } from "react-hook-form";
import { actualizarCategoria } from "../../services/categorias.services";

export default function CategoriaActualizar({ actualizarCambios }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await actualizarCategoria(data);
    actualizarCambios();
    reset();
  }

  return (
    <Accordion defaultActiveKey='none'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Actualizar Categoria</Accordion.Header>
        <Accordion.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input type="text" placeholder="Ingresar ID" {...register("id", 
              {required: {
                value: true,
                message: 'ID requerido'
              }}
            )} className="form-control"/>
            {errors.id && <span className="text-danger">{errors.id.message}</span>}
          </div>
          
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
              <label htmlFor="activo">Activo</label>
              <input 
                type="checkbox" 
                id="activo" 
                {...register("activo")} 
                className="form-check-input"
              />
            </div>

            <button className="btn btn-primary">Enviar</button>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
