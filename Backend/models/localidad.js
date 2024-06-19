// categoria.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Localidad = sequelize.define('Localidad', {
    idLocalidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idLocalidad'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    codigoPostal: {
        type: DataTypes.INTEGER,
        field: 'codigoPostal'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
},{
    tableName: 'Localidad',
    timestamps: false
}
)

export default Localidad;