/* eslint-disable no-unused-vars */
// Import sequelize
import sequelize from "./db.js";
// Import de los Modelos
/*import Categoria from "../models/categoria.js";
import Cliente from "../models/cliente.js";
import DetalleVenta from "../models/detalleVenta.js";
import Empleado from "../models/empleado.js";
import Producto from "../models/producto.js";
import Sucursal from "../models/sucursal.js";
import Venta from "../models/venta.js";*/

// Funcion para sincronizar los modelos con la base de datos
async function dbInit() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Modelos sincronizados con la base de datos.");
    }
    catch (error) {
        console.error("Error al sincronizar modelos:", error);
    }
}
export default dbInit