import appExpress from "express";
import { obtenerArea,
    crearArea,
    obtenerAreaPorId,
    actualizarArea,
    eliminarArea,
    bajaLogicadeArea } from "../services/area.service.js";

const areaRouter = appExpress.Router();

areaRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const area = await obtenerArea();

        // envío la respuesta con el resultado de la consulta.
        res.status(200).json(area);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo areas." });
    }
});

areaRouter.post("/", async (req, res, next) => {
    try {
        const area = await crearArea(req.body);
        res.status(201).json(area);
    }
    catch (err) {
        next(err);
    }
});

areaRouter.get("/:id", async (req, res, next) => {
    try {
        const area = await obtenerAreaPorId(req.params.id);
        if (area) {
            res.status(200).json(area);
        }
        else {
            res.status(404).send("Area not found");
        }
    }
    catch (err) {
        next(err);
    }
});

areaRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarArea(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//Ruta de la baja logica de una area funcion bajaLoficaDeArea
areaRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeArea(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

areaRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarArea(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default areaRouter;