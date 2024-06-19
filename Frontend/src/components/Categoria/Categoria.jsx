import React, { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import CategoriaRegistro from "./CategoriaRegistro.jsx";
import { getCategorias,deleteCategoria, bajaLogicadeCategoria, buscarPorId } from "../../services/categorias.services";
import CategoriaId from "./CategoriaId.jsx";

function Categoria() {

    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState(false);

    const buscarTodos = () => {
            getCategorias().then(data => {
            setCategorias(data);
        });
    }

    const buscarPorIdHandler = (id) => {
        if (id) {
            buscarPorId(id).then(data => {
                setCategorias(data ? [data] : []);
                setBusqueda(true);
            });
        } else {
            buscarTodos();
        }
    }

    useEffect( () => {
        buscarTodos();
    }, [])


    const eliminarCategoria = (id) => {
        deleteCategoria(id).then(() => {
            buscarTodos();
        });
    }


    return (
        <>
            <CategoriaId onSearch={buscarPorIdHandler} />

            {categorias.length > 0 && (
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

                                        <button className="btn btn-danger m-3" onClick={() => {eliminarCategoria(categoria.idCategoria)}}>Eliminar</button>

                                        <button className="btn btn-warning m-3" onClick={() => { bajaLogicadeCategoria(categoria.idCategoria)
                                        buscarTodos() }}>Baja</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
            <CategoriaRegistro actualizarCategorias={buscarTodos} />
        </>
    );
}

export default Categoria;