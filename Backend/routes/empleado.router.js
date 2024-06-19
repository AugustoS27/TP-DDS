import appExpress from "express";
import { obtenerEmpleado,
    crearEmpleado,
    obtenerEmpleadoPorId,
    actualizarEmpleado,
    eliminarEmpleado,
    bajaLogicadeEmpleado } from "../services/empleado.service.js";

const empleadoRouter = appExpress.Router();

empleadoRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const empleado = await obtenerEmpleado();

        // envío la respuesta con el resultado de la consulta.
        res.json(empleado);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo empleados." });
    }
});

empleadoRouter.post("/", async (req, res, next) => {
    try {
        const empleado = await crearEmpleado(req.body);
        res.status(201).json(empleado);
    }
    catch (err) {
        next(err);
    }
});

empleadoRouter.get("/:id", async (req, res, next) => {
    try {
        const empleado = await obtenerEmpleadoPorId(req.params.id);
        if (empleado) {
            res.json(empleado);
        }
        else {
            res.status(404).send("Empleado not found");
        }
    }
    catch (err) {
        next(err);
    }
});

empleadoRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarEmpleado(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//realizar baja logica de empleado
empleadoRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeEmpleado(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});


empleadoRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarEmpleado(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default empleadoRouter;