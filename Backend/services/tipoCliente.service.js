import TipoCliente from "../models/tipoCliente.js"
import Cliente from "../models/cliente.js";

export async function obtenerTipoCliente() {
    const tipoCliente = await TipoCliente.findAll();
    return tipoCliente
}
    
export async function obtenerTipoClientePorId(id) {
    const tipoCliente = await TipoCliente.findByPk(id);
    return tipoCliente;
}
    
export async function crearTipoCliente(data) {
    return await TipoCliente.create(data);
}
    
export async function actualizarTipoCliente(id, data) {
    return await TipoCliente.update(data, {
        where: {
            idTipoCliente: id
        }
    });
}

export async function bajaLogicadeTipoCliente(id){
    return await TipoCliente.update({activo: false}, {
        where: {
            idTipoCliente: id
        }
    });
}

export async function eliminarTipoCliente(id) {
    const clienteAsociado = await Cliente.findOne({ where: { idTipoCliente: id } });
    if (clienteAsociado){
        throw new Error(`No se puede eliminar el tipo de cliente con id ${id} porque está asociada a un cliente.`);
    }else{
        return TipoCliente.destroy({ where: { idTipoCliente: id } });
    }
}