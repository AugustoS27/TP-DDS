import appExpress from "express";
import { obtenerCategoria,
    crearCategoria,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria,
    bajaLogicadeCategoria } from "../services/categoria.service.js";

const categoriaRouter = appExpress.Router();

categoriaRouter.get("/", async (req, res) => {
    try {
        // realizo la consulta a la base de datos.
        const categoria = await obtenerCategoria();

        // envío la respuesta con el resultado de la consulta.
        res.status(200).json(categoria);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ error: "Database error obteniendo categorias." });
    }
});

categoriaRouter.post("/", async (req, res, next) => {
    try {
        const categoria = await crearCategoria(req.body);
        res.status(201).json(categoria);
    }
    catch (err) {
        next(err);
    }
});

categoriaRouter.get("/:id", async (req, res, next) => {
    try {
        const categoria = await obtenerCategoriaPorId(req.params.id);
        if (categoria) {
            res.status(200).json(categoria);
        }
        else {
            res.status(404).send("Categoria not found");
        }
    }
    catch (err) {
        next(err);
    }
});

categoriaRouter.put("/:id", async (req, res, next) => {
    try {
        await actualizarCategoria(req.params.id, req.body);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

//Ruta de la baja logica de una categoria funcion bajaLoficaDeCategoria
categoriaRouter.put("/baja/:id", async (req, res, next) => {
    try {
        await bajaLogicadeCategoria(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

categoriaRouter.delete("/:id", async (req, res, next) => {
    try {
        await eliminarCategoria(req.params.id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});

export default categoriaRouter;