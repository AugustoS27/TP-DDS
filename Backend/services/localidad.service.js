import Localidad from "../models/localidad.js"
import Sucursal from "../models/sucursal.js";

export async function obtenerLocalidad() {
    const localidad = await Localidad.findAll();
    return localidad
}
    
export async function obtenerLocalidadPorId(id) {
    const localidad = await Localidad.findByPk(id);
    return localidad;
}
    
export async function crearLocalidad(data) {
    return await Localidad.create(data);
}
    
export async function actualizarLocalidad(id, data) {
    return await Localidad.update(data, {
        where: {
            idLocalidad: id
        }
    });
}

export async function bajaLogicadeLocalidad(id){
    return await Localidad.update({activo: false}, {
        where: {
            idLocalidad: id
        }
    });
}

export async function eliminarLocalidad(id) {
    const sucursalAsociado = await Sucursal.findOne({ where: { idLocalidad: id } });
    if (sucursalAsociado){
        throw new Error(`No se puede eliminar la localidad con id ${id} porque está asociada a un sucursal.`);
    }else{
        return Localidad.destroy({ where: { idLocalidad: id } });
    }
}