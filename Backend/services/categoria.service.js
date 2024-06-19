import Categoria from "../models/categoria.js"
import Producto from "../models/producto.js";

export async function obtenerCategoria() {
    const categoria = await Categoria.findAll();
    return categoria
}
    
export async function obtenerCategoriaPorId(id) {
    const categoria = await Categoria.findByPk(id);
    return categoria;
}
    
export async function crearCategoria(data) {
    return await Categoria.create(data);
}
    
export async function actualizarCategoria(id, data) {
    return await Categoria.update(data, {
        where: {
            idCategoria: id
        }
    });
}

//Se realiza una baja logica cambiando de true a false el campo activo
export async function bajaLogicadeCategoria(id){
    return await Categoria.update({activo: false}, {
        where: {
            idCategoria: id
        }
    });
}

export async function eliminarCategoria(id) {
    const productoAsociado = await Producto.findOne({ where: { idCategoria: id } });
    if (productoAsociado){
        throw new Error(`No se puede eliminar la categoría con id ${id} porque está asociada a un producto.`);
    }else{
        return Categoria.destroy({ where: { idCategoria: id } });
    }
}