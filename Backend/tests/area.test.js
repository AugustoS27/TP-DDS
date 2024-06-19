import request from "supertest";
import app from "../app.js";

describe("Endpoints de Áreas", () => {
    describe("GET /areas", () => {
        it("debería devolver todas las áreas", async () => {
            const res = await request(app).get("/api/areas");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /areas", () => {
        it("debería crear un nuevo área", async () => {
            const newArea = { nombre: "Nuevo Área", objetivo: "Objetivo", activo: true };
            const res = await request(app).post("/api/areas").send(newArea);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idArea");
        });
    });
    
    describe("GET /areas/:id", () => {
        it("debería devolver un área específica", async () => {
            const existingAreaId = 1;
            const res = await request(app).get(`/api/areas/${existingAreaId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idArea", existingAreaId);
        });
    
        it("debería devolver 404 si el área no existe", async () => {
            const nonExistingAreaId = 9999;
            const res = await request(app).get(`/api/areas/${nonExistingAreaId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /areas/:id", () => {
        it("debería actualizar un área específica", async () => {
            const existingAreaId = 6;
            const updatedAreaData = { nombre: "Nuevo Nombre", objetivo: "Nuevo Objetivo", activo: true };
            const res = await request(app).put(`/api/areas/${existingAreaId}`).send(updatedAreaData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /areas/baja/:id", () => {
        it("debería realizar una eliminación lógica de un área específica", async () => {
            const existingAreaId = 6;
            const res = await request(app).put(`/api/areas/baja/${existingAreaId}`);
            expect(res.status).toBe(204);
        });
    })
    
    describe("DELETE /areas/:id", () => {
        it("debería eliminar un área específica", async () => {
            const existingAreaId = 555;
            const res = await request(app).delete(`/api/areas/${existingAreaId}`);
            expect(res.status).toBe(204);
        });
    });
});