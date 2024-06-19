// categoria.js
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const TipoCliente = sequelize.define('TipoCliente', {
    idTipoCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idTipoCliente'
    },
    nombre: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    compraMinima: {
        type: DataTypes.INTEGER,
        field: 'compraMinima'
    },
    activo: {
        type: DataTypes.BOOLEAN,
        field: 'activo'
    }
},{
    tableName: 'TipoCliente',
    timestamps: false
}
)

export default TipoCliente;