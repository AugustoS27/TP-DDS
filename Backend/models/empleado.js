// empleado.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";
import Area from "./area.js";

const Empleado = sequelize.define('Empleado', {
    legajoEmpleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'legajoEmpleado'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    apellido: {
        type: DataTypes.STRING,
        field: 'apellido'
    },
    telefono: {
        type: DataTypes.INTEGER ,
        field: 'telefono'
    },
    mail: {
        type: DataTypes.STRING,
        field: 'mail'
    },
    fechaAlta: {
        type: DataTypes.DATE,
        field: 'fechaAlta'
    },
    idArea: {
        type: DataTypes.INTEGER,
        field: 'idArea'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
}, {tableName: 'Empleado',
    timestamps: false
});

Empleado.belongsTo(Area, {foreignKey: 'idArea'});

export default Empleado