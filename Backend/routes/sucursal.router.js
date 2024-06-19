import appExpress from "express";
import { obtenerSucursal,
    crearSucursal,
    obtenerSucursalPorId,
    actualizarSucursal,
    eliminarSucursal,
    bajaLogicadeSucursal } from "../services/sucursal.service.js";

const sucursalRouter = appExpress.Router();


sucursalRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const sucursal = await obtenerSucursal();

        // envío la respuesta con el resultado de la consulta.
        res.json(sucursal);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo sucursales." });
    }
});

sucursalRouter.post("/", async (req, res, next) => {
    try {
        const sucursal = await crearSucursal(req.body);
        res.status(201).json(sucursal);
    }
    catch (err) {
        next(err);
    }
});

sucursalRouter.get("/:id", async (req, res, next) => {
    try {
        const sucursal = await obtenerSucursalPorId(req.params.id);
        if (sucursal) {
            res.json(sucursal);
        }
        else {
            res.status(404).send("sucursal not found");
        }
    }
    catch (err) {
        next(err);
    }
});

sucursalRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarSucursal(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});


//realizar baja logicas de sucursal
sucursalRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeSucursal(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

sucursalRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarSucursal(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default sucursalRouter;