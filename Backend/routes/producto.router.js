import appExpress from "express";
import { obtenerProducto,
    crearProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
    bajaLogicadeProducto} from "../services/producto.service.js";

const productoRouter = appExpress.Router();

productoRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const producto = await obtenerProducto();

        // envío la respuesta con el resultado de la consulta.
        res.json(producto);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo productos." });
    }
});

productoRouter.post("/", async (req, res, next) => {
    try {
        const producto = await crearProducto(req.body);
        res.status(201).json(producto);
    }
    catch (err) {
        next(err);
    }
});

productoRouter.get("/:id", async (req, res, next) => {
    try {
        const producto = await obtenerProductoPorId(req.params.id);
        if (producto) {
            res.json(producto);
        }
        else {
            res.status(404).send("Producto not found");
        }
    }
    catch (err) {
        next(err);
    }
});

productoRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarProducto(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

// realizar baja logica de producto
productoRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeProducto(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
})

productoRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarProducto(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default productoRouter;
