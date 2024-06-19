// cliente.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";
import TipoCliente from "./tipoCliente.js";

const Cliente = sequelize.define('Cliente', {
    idCliente: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        field: 'idCliente'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    apellido:{
        type: DataTypes.STRING,
        field: 'apellido'
    },
    dni: {
        type: DataTypes.STRING,
        field: 'dni'
    },
    fechaAlta: {
        type: DataTypes.DATE,
        field: 'fechaAlta'
    },
    idTipoCliente: {
        type: DataTypes.INTEGER,
        field: 'idTipoCliente'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
}, {tableName: 'Cliente',
    timestamps: false
});

Cliente.belongsTo(TipoCliente, {foreignKey: 'idTipoCliente'});

export default Cliente