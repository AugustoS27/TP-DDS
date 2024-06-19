import request from "supertest";
import app from "../app.js";

/* eslint-disable no-undef */

describe("Endpoints de Categorías", () => {
    describe("GET /categorias", () => {
        it("debería devolver todas las categorías", async () => {
        const res = await request(app).get("/api/categorias");
        expect(res.status).toBe(200);
        });
    });
    
    describe("POST /categorias", () => {
        it("debería crear una nueva categoría", async () => {
        const newCategoria = { nombre: "Nueva Categoría", descripcion: "Descripción" };
        const res = await request(app).post("/api/categorias").send(newCategoria);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("idCategoria");
        });
    });
    
    describe("GET /categorias/:id", () => {
        it("debería devolver una categoría específica", async () => {
        const existingCategoriaId = 1;
        const res = await request(app).get(`/api/categorias/${existingCategoriaId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("idCategoria", existingCategoriaId);
        });
    
        it("debería devolver 404 si la categoría no existe", async () => {
        const nonExistingCategoriaId = 9999;
        const res = await request(app).get(`/api/categorias/${nonExistingCategoriaId}`);
        expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /categorias/:id", () => {
        it("debería actualizar una categoría específica", async () => {
        const existingCategoriaId = 1;
        const updatedCategoriaData = { nombre: "Nuevo Nombre", descripcion: "Nueva Descripción" };
        const res = await request(app).put(`/api/categorias/${existingCategoriaId}`).send(updatedCategoriaData);
        expect(res.status).toBe(204);
        });
    });

    describe("PUT /categorias/baja/:id", () => {
        it("debería realizar una eliminación lógica de una categoría específica", async () => {
        const existingCategoriaId = 1;
        const res = await request(app).put(`/api/categorias/baja/${existingCategoriaId}`);
        expect(res.status).toBe(204);
        });
    })
    
    describe("DELETE /categorias/:id", () => {
        it("debería eliminar una categoría específica", async () => {
        const existingCategoriaId = 14;
        const res = await request(app).delete(`/api/categorias/${existingCategoriaId}`);
        expect(res.status).toBe(204);
        });
    });
});
