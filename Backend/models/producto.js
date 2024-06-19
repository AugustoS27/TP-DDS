// producto.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";
import Categoria from "./categoria.js"; // Importa el modelo Categoria

const Producto = sequelize.define("Producto", {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "idProducto", // Nombre real del campo en la tabla de base de datos
    },
    nombre: {
        type: DataTypes.STRING(100),
        field: "nombre", // Nombre real del campo en la tabla de base de datos
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        field: "fechaVencimiento", // Nombre real del campo en la tabla de base de datos
    },
    precio: {
        type: DataTypes.INTEGER,
        field: "precio", // Nombre real del campo en la tabla de base de datos
    },
    descripcion: {
        type: DataTypes.STRING(100),
        field: "descripcion", // Nombre real del campo en la tabla de base de datos
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        field: "idCategoria", // Nombre real del campo en la tabla de base de datos
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
}, {
    timestamps: false, // No necesitamos campos de fecha de creación y actualización automáticos
    tableName: "Producto", // Nombre real de la tabla en la base de datos
});

Producto.belongsTo(Categoria, { foreignKey: "idCategoria" });

export default Producto;
