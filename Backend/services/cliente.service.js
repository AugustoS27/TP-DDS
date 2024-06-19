import Cliente from '../models/cliente.js';

export async function obtenerCliente() {
        const clientes = await Cliente.findAll();
        return clientes;
    
}

export async function obtenerClientePorId(id) {
    const cliente = await Cliente.findByPk(id);
    return cliente
}

export async function crearCliente(data) {
    return await Cliente.create(data);
}

export async function actualizarCliente(id, data) {
    return await Cliente.update(data, {
        where: {
            idCliente: id
        }
    });
}

//Realizar funcion de baja logica de cliente
export async function bajaLogicadeCliente(id){
    return await Cliente.update({activo: false}, {
        where: {
            idCliente: id
        }
    });
}

export async function eliminarCliente(id) {
    return Cliente.destroy({ where: { idCliente: id } });
}
