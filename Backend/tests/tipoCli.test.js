import request from 'supertest';
import app from '../app';

/*describe("Endpoints de Categorías", () => {
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
});*/
describe("Endpoints de TipoCliente", () => {
    describe("GET /tipoClientes", () => {
        it("debería devolver todos los tipoClientes", async () => {
            const res = await request(app).get("/api/tipoClientes");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /tipoClientes", () => {
        it("debería crear un nuevo tipoCliente", async () => {
            const newTipoCliente = { nombre: "Nuevo TipoCliente", compraMinima: 100, activo: true };
            const res = await request(app).post("/api/tipoClientes").send(newTipoCliente);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idTipoCliente");
        });
    });
    
    describe("GET /tipoClientes/:id", () => {
        it("debería devolver un tipoCliente específico", async () => {
            const existingTipoClienteId = 1;
            const res = await request(app).get(`/api/tipoClientes/${existingTipoClienteId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idTipoCliente", existingTipoClienteId);
        });
    
        it("debería devolver 404 si el tipoCliente no existe", async () => {
            const nonExistingTipoClienteId = 9999;
            const res = await request(app).get(`/api/tipoClientes/${nonExistingTipoClienteId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /tipoClientes/:id", () => {
        it("debería actualizar un tipoCliente específico", async () => {
            const existingTipoClienteId = 1;
            const updatedTipoClienteData = { nombre: "Nuevo Nombre", compraMinima: 200, activo: false };
            const res = await request(app).put(`/api/tipoClientes/${existingTipoClienteId}`).send(updatedTipoClienteData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /tipoClientes/baja/:id", () => {
        it("debería realizar una eliminación lógica de un tipoCliente específico", async () => {
            const existingTipoClienteId = 1;
            const res = await request(app).put(`/api/tipoClientes/baja/${existingTipoClienteId}`);
            expect(res.status).toBe(204);
        });
    })
    
    describe("DELETE /tipoClientes/:id", () => {
        it("debería eliminar un tipoCliente específico", async () => {
            const existingTipoClienteId = 14;
            const res = await request(app).delete(`/api/tipoClientes/${existingTipoClienteId}`);
            expect(res.status).toBe(204);
        });
    });
});