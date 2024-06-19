import React, { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import CategoriaRegistro from "./CategoriaRegistro.jsx";
import { getCategorias,deleteCategoria, bajaLogicadeCategoria } from "../../services/categorias.services";
import CategoriaId from "./CategoriaId.jsx";

function Categoria() {

    const [categorias, setCategorias] = useState([]);

    const buscarTodos = () => {
            getCategorias().then(data => {
            setCategorias(data);
        });
    }

    useEffect( () => {
        buscarTodos();
    }, [<CategoriaRegistro/>])


    return (
        <>
            <CategoriaId />
            
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>DESCRIPCION</th>
                <th>ACTIVO</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map((categoria) => {
                    return (
                        <tr key={categoria.idCategoria}>
                            <td>{categoria.idCategoria}</td>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.descripcion}</td>
                            <td>{categoria.activo ? 'SI' : 'NO'}</td>
                            <td>
                                <button className="btn btn-primary m-3">Editar</button>
                                <button className="btn btn-danger m-3" onClick={() => {deleteCategoria(categoria.idCategoria)}}>Eliminar</button>
                                <button className="btn btn-warning m-3" onClick={() => {bajaLogicadeCategoria(categoria.idCategoria)}}>Baja</button>
                            </td>
                        </tr>
                        )
                })}
                
            </tbody>
            </Table>
            <CategoriaRegistro />
        </>

    );
}

export default Categoria;