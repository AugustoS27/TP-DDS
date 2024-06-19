import appExpress from "express";
import { obtenerLocalidad,
    crearLocalidad,
    obtenerLocalidadPorId,
    actualizarLocalidad,
    eliminarLocalidad,
    bajaLogicadeLocalidad } from "../services/localidad.service.js";

const localidadRouter = appExpress.Router();

localidadRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const localidad = await obtenerLocalidad();

        // envío la respuesta con el resultado de la consulta.
        res.status(200).json(localidad);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo localidad." });
    }
});

localidadRouter.post("/", async (req, res, next) => {
    try {
        const localidad = await crearLocalidad(req.body);
        res.status(201).json(localidad);
    }
    catch (err) {
        next(err);
    }
});

localidadRouter.get("/:id", async (req, res, next) => {
    try {
        const localidad = await obtenerLocalidadPorId(req.params.id);
        if (localidad) {
            res.status(200).json(localidad);
        }
        else {
            res.status(404).send("Localidad not found");
        }
    }
    catch (err) {
        next(err);
    }
});

localidadRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarLocalidad(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//Ruta de la baja logica de una localidad funcion bajaLoficaDeLocalidad
localidadRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeLocalidad(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

localidadRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarLocalidad(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default localidadRouter;