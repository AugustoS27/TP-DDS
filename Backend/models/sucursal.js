// sucursal.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";
import Localidad from "./localidad.js";

const Sucursal = sequelize.define("Sucursal", {
    idSucursal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idSucursal'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    direccion: {
        type: DataTypes.STRING,
        field: 'direccion'
    },
    fechaAlta: {
        type: DataTypes.DATE,
        field: 'fechaAlta'
    },
    cuit: {
        type: DataTypes.INTEGER,
        field: 'cuit'
    },
    idLocalidad: {
        type: DataTypes.INTEGER,
        field: 'idLocalidad'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }   
}, {tableName: 'Sucursal',
    timestamps: false
});

Sucursal.belongsTo(Localidad, {foreignKey: 'idLocalidad'});

export default Sucursal;



