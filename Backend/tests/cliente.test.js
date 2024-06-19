import request from "supertest";
import app from "../app.js";

describe("Endpoints de Cliente", () => {
    describe("GET /clientes", () => {
        it("debería devolver todos los clientes", async () => {
            const res = await request(app).get("/api/clientes");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /clientes", () => {
        it("debería crear un nuevo cliente", async () => {
            const newCliente = { nombre: "Nuevo Cliente", apellido: "Apellido", dni: "12345678", fechaAlta: "2022-01-01", activo: true };
            const res = await request(app).post("/api/clientes").send(newCliente);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idCliente");
        });
    });
    
    describe("GET /clientes/:id", () => {
        it("debería devolver un cliente específico", async () => {
            const existingClienteId = 1;
            const res = await request(app).get(`/api/clientes/${existingClienteId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idCliente", existingClienteId);
        });
    
        it("debería devolver 404 si el cliente no existe", async () => {
            const nonExistingClienteId = 9999;
            const res = await request(app).get(`/api/clientes/${nonExistingClienteId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /clientes/:id", () => {
        it("debería actualizar un cliente específico", async () => {
            const existingClienteId = 1;
            const updatedClienteData = { nombre: "Nuevo Nombre", apellido: "Nuevo Apellido", dni: "87654321", fechaAlta: "2022-02-01", activo: false };
            const res = await request(app).put(`/api/clientes/${existingClienteId}`).send(updatedClienteData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /clientes/baja/:id", () => {
        it("debería realizar una eliminación lógica de un cliente específico", async () => {
            const existingClienteId = 1;
            const res = await request(app).put(`/api/clientes/baja/${existingClienteId}`);
            expect(res.status).toBe(204);
        });
    });
    
    describe("DELETE /clientes/:id", () => {
        it("debería eliminar un cliente específico", async () => {
            const existingClienteId = 14;
            const res = await request(app).delete(`/api/clientes/${existingClienteId}`);
            expect(res.status).toBe(204);
        });
    });
});
