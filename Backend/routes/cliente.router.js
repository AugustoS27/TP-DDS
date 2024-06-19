import appExpress from 'express';
import {
    obtenerCliente, 
    crearCliente, 
    obtenerClientePorId, 
    actualizarCliente, 
    eliminarCliente,
    bajaLogicadeCliente
} from '../services/cliente.service.js';

const clienteRouter = appExpress.Router();

clienteRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const cliente = await obtenerCliente();

        // envío la respuesta con el resultado de la consulta.
        res.json(cliente);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo clientes." });
    }
});

clienteRouter.post("/", async (req, res, next) => {
    try {
        const cliente = await crearCliente(req.body);
        res.status(201).json(cliente);
    }
    catch (err) {
        next(err);
    }
});

clienteRouter.get("/:id", async (req, res, next) => {
    try {
        const cliente = await obtenerClientePorId(req.params.id);
        if (cliente) {
            res.json(cliente);
        }
        else {
            res.status(404).send("Cliente not found");
        }
    }
    catch (err) {
        next(err);
    }
});

clienteRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarCliente(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//Realizar baja logica de cliente
clienteRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeCliente(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

clienteRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarCliente(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default clienteRouter;