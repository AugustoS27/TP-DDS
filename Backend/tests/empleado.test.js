import request from "supertest";
import app from "../app.js";

describe("Endpoints de Empleados", () => {
    describe("GET /empleados", () => {
        it("debería devolver todos los empleados", async () => {
            const res = await request(app).get("/api/empleados");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /empleados", () => {
        it("debería crear un nuevo empleado", async () => {
            const nuevoEmpleado = { 
                nombre: "John",
                apellido: "Doe",
                telefono: 123456789,
                mail: "john.doe@example.com",
                fechaAlta: "2022-01-01",
                activo: true
            };
            const res = await request(app).post("/api/empleados").send(nuevoEmpleado);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("legajoEmpleado");
        });
    });
    
    describe("GET /empleados/:id", () => {
        it("debería devolver un empleado específico", async () => {
            const idEmpleadoExistente = 1;
            const res = await request(app).get(`/api/empleados/${idEmpleadoExistente}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("legajoEmpleado", idEmpleadoExistente);
        });
    
        it("debería devolver 404 si el empleado no existe", async () => {
            const idEmpleadoNoExistente = 9999;
            const res = await request(app).get(`/api/empleados/${idEmpleadoNoExistente}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /empleados/:id", () => {
        it("debería actualizar un empleado específico", async () => {
            const idEmpleadoExistente = 1;
            const datosEmpleadoActualizados = { 
                nombre: "Jane",
                apellido: "Doe",
                telefono: 987654321,
                mail: "jane.doe@example.com",
                fechaAlta: "2022-01-01",
                activo: true
            };
            const res = await request(app).put(`/api/empleados/${idEmpleadoExistente}`).send(datosEmpleadoActualizados);
            expect(res.status).toBe(204);
        });
    });
    
    describe("DELETE /empleados/:id", () => {
        it("debería eliminar un empleado específico", async () => {
            const idEmpleadoExistente = 14;
            const res = await request(app).delete(`/api/empleados/${idEmpleadoExistente}`);
            expect(res.status).toBe(204);
        });
    });
});



/*
describe("Categorias Endpoints", () => {
    describe("GET /categorias", () => {
        test("should return all categorias", async () => {
        const res = await request(app).get("/api/categorias");
        expect(res.status).toBe(200);
        });
    });
    
    describe("POST /categorias", () => {
        it("should create a new categoria", async () => {
        const newCategoria = { nombre: "Nueva Categoria", descripcion: "Descripcion" };
        const res = await request(app).post("/api/categorias").send(newCategoria);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("idCategoria");
        });
    });
    
    describe("GET /categorias/:id", () => {
        it("should return a specific categoria", async () => {
        const existingCategoriaId = 1;
        const res = await request(app).get(`/api/categorias/${existingCategoriaId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("idCategoria", existingCategoriaId);
        });
    
        it("should return 404 if categoria does not exist", async () => {
        const nonExistingCategoriaId = 9999;
        const res = await request(app).get(`/api/categorias/${nonExistingCategoriaId}`);
        expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /categorias/:id", () => {
        it("should update a specific categoria", async () => {
        const existingCategoriaId = 1;
        const updatedCategoriaData = { nombre: "Nuevo Nombre", descripcion: "Nueva Descripcion" };
        const res = await request(app).put(`/api/categorias/${existingCategoriaId}`).send(updatedCategoriaData);
        expect(res.status).toBe(204);
        });
    });
    
    describe("DELETE /categorias/:id", () => {
        it("should delete a specific categoria", async () => {
        const existingCategoriaId = 14;
        const res = await request(app).delete(`/api/categorias/${existingCategoriaId}`);
        expect(res.status).toBe(204);
        });
    });
});*/
