import Area from "../models/area.js"
import Empleado from "../models/empleado.js";

export async function obtenerArea() {
    const area = await Area.findAll();
    return area
}
    
export async function obtenerAreaPorId(id) {
    const area = await Area.findByPk(id);
    return area;
}
    
export async function crearArea(data) {
    return await Area.create(data);
}
    
export async function actualizarArea(id, data) {
    return await Area.update(data, {
        where: {
            idArea: id
        }
    });
}

export async function bajaLogicadeArea(id){
    return await Area.update({activo: false}, {
        where: {
            idArea: id
        }
    });
}

export async function eliminarArea(id) {
    const empleadoAsociado = await Empleado.findOne({ where: { idArea: id } });
    if (empleadoAsociado){
        throw new Error(`No se puede eliminar el area con id ${id} porque está asociada a un empleado.`);
    }else{
        return Area.destroy({ where: { idArea: id } });
    }
}