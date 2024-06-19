import appExpress from "express";
import { obtenerTipoCliente,
    crearTipoCliente,
    obtenerTipoClientePorId,
    actualizarTipoCliente,
    eliminarTipoCliente,
    bajaLogicadeTipoCliente } from "../services/tipoCliente.service.js";

const tipoClienteRouter = appExpress.Router();

tipoClienteRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const tipoCliente = await obtenerTipoCliente();

        // envío la respuesta con el resultado de la consulta.
        res.status(200).json(tipoCliente);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo tipo Clientes." });
    }
});

tipoClienteRouter.post("/", async (req, res, next) => {
    try {
        const tipoCliente = await crearTipoCliente(req.body);
        res.status(201).json(tipoCliente);
    }
    catch (err) {
        next(err);
    }
});

tipoClienteRouter.get("/:id", async (req, res, next) => {
    try {
        const tipoCliente = await obtenerTipoClientePorId(req.params.id);
        if (tipoCliente) {
            res.status(200).json(tipoCliente);
        }
        else {
            res.status(404).send("TipoCliente not found");
        }
    }
    catch (err) {
        next(err);
    }
});

tipoClienteRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarTipoCliente(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//Ruta de la baja logica de una tipoCliente funcion bajaLoficaDeTipoCliente
tipoClienteRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeTipoCliente(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

tipoClienteRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarTipoCliente(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default tipoClienteRouter;