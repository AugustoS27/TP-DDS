import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const logHabilitado = process.env.LOG;

const sequelize = new Sequelize({
    dialect: "sqlite", 
    logging: (logHabilitado === "true") ? console.log : false,
    storage: "./data/dbVentas.db" //bd.sqlite
});

export default sequelize;
