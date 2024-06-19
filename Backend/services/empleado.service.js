import Empleado from "../models/empleado.js";

export async function obtenerEmpleado() {
    const empleado = await Empleado.findAll();
    return empleado
}

export async function obtenerEmpleadoPorId(id) {
    const empleado = await Empleado.findByPk(id);
    return empleado;
}

export async function crearEmpleado(data) {
    return await Empleado.create(data);
}

export async function actualizarEmpleado(id, data) {
    return await Empleado.update(data, {
        where: {
            legajoEmpleado: id
        }
    });
}

//realizar baja logica de empleado
export async function bajaLogicadeEmpleado(id){
    return await Empleado.update({activo: false}, {
        where: {
            legajoEmpleado: id
        }
    });
}

export async function eliminarEmpleado(id) {
    return Empleado.destroy({ where: { legajoEmpleado: id } });
}