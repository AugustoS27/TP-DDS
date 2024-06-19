// categoria.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Area = sequelize.define('Area', {
    idArea: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idArea'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    objetivo: {
        type: DataTypes.STRING,
        field: 'objetivo'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
},{
    tableName: 'Area',
    timestamps: false}
)

export default Area;