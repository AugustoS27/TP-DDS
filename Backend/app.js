// Trabajo Práctico Integrador - Etapa 1 y 2: Backend y Frontend.
// Autores: [94269] Adragna, Jimena | [94373] Serafini, Augusto | [94269] Valenti, Lucila | y [96061] Valverde, Fabrizio.
// Fecha de entrega: 05/06/2024.

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
/*import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.js";*/

import dbInit from "./data/db-init.js";

/*
// Seguridad
import logger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import tokenExtractor from "./middlewares/tokenExtractor.js";
*/

import productoRouter from "./routes/producto.router.js";
import categoriaRouter from "./routes/categoria.router.js";
import clienteRouter from "./routes/cliente.router.js";
import tipoClienteRouter from "./routes/tipoCliente.router.js";
import empleadoRouter from "./routes/empleado.router.js";
import areaRouter from "./routes/area.router.js";
import sucursalRouter from "./routes/sucursal.router.js";
import localidadRouter from "./routes/localidad.router.js";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();

app.use(cors());

app.use(express.json()); // Body parser para transformar httpBody en objetos json

/*
// Logs
if (process.env.LOG === "true") {
    app.use(logger);
}


app
    .use("/status", serverStatusRouter)
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app
    .use("/api", loginRouter)
    .use("/api/barrios", tokenExtractor, barriosRouter)
    .use("/api/estaciones", tokenExtractor, estacionesRouter)
    .use("/api/usuarios", tokenExtractor, usuariosRouter);

app
    .use(errorHandler)
    .use(notFound);
*/

app.use("/api/productos", productoRouter);
app.use("/api/categorias", categoriaRouter);
app.use("/api/clientes", clienteRouter);
app.use("/api/tipoclientes", tipoClienteRouter);
app.use("/api/empleados", empleadoRouter);
app.use("/api/areas", areaRouter);
app.use("/api/sucursales", sucursalRouter);
app.use("/api/localidades", localidadRouter);

async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
}

await start();

export default app;

