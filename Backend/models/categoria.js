// categoria.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Categoria = sequelize.define('Categoria', {
    idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idCategoria'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    descripcion: {
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
}, {tableName: 'Categoria',
    timestamps: false
});

export default Categoria;