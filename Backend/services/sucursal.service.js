import Sucursal from '../models/sucursal.js';

export async function obtenerSucursal() {
    const sucursal = await Sucursal.findAll();
    return sucursal;
}

export async function obtenerSucursalPorId(id) {
    const sucursal = await Sucursal.findByPk(id);
    return sucursal
}

export async function crearSucursal(data) {
    return await Sucursal.create(data);
}

export async function actualizarSucursal(id, data) {
    return await Sucursal.update(data, {
        where: {
            idSucursal: id
        }
    });
}

//Realizar funcion de baja logica de sucursal
export async function bajaLogicadeSucursal(id){
    return await Sucursal.update({activo: false}, {
        where: {
            idSucursal: id
        }
    });
}

export async function eliminarSucursal(id) {
    return Sucursal.destroy({ where: { idSucursal: id } })
}
