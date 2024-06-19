import Producto from "../models/producto.js";

export async function obtenerProducto() {
    const producto = await Producto.findAll();
    return producto
}

export async function obtenerProductoPorId(id) {
    const producto = await Producto.findByPk(id);
    return producto;
}

export async function crearProducto(data) {
    return await Producto.create(data);
}

//Realizar funcion de baja logica de producto
export async function bajaLogicadeProducto(id){
    return await Producto.update({activo: false}, {
        where: {
            idProducto: id
        }
    })};

export async function actualizarProducto(id, data) {
    return await Producto.update(data, {
        where: {
            idProducto: id
        }
    });
}



export async function eliminarProducto(id){
    return Producto.destroy({where: {idProducto: id}});
}