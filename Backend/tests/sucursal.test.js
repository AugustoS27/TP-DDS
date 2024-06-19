import request from 'supertest';
import app from '../app';

/*
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
});*/

describe("Endpoints de Sucursal", () => {
    describe("GET /sucursales", () => {
        it("debería devolver todas las sucursales", async () => {
            const res = await request(app).get("/api/sucursales");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /sucursales", () => {
        it("debería crear una nueva sucursal", async () => {
            const newSucursal = { nombre: "Nueva Sucursal", direccion: "Dirección", fechaAlta: "2022-01-01", cuit: 123456789, activo: true };
            const res = await request(app).post("/api/sucursales").send(newSucursal);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idSucursal");
        });
    });
    
    describe("GET /sucursales/:id", () => {
        it("debería devolver una sucursal específica", async () => {
            const existingSucursalId = 1;
            const res = await request(app).get(`/api/sucursales/${existingSucursalId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idSucursal", existingSucursalId);
        });
    
        it("debería devolver 404 si la sucursal no existe", async () => {
            const nonExistingSucursalId = 9999;
            const res = await request(app).get(`/api/sucursales/${nonExistingSucursalId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /sucursales/:id", () => {
        it("debería actualizar una sucursal específica", async () => {
            const existingSucursalId = 1;
            const updatedSucursalData = { nombre: "Nuevo Nombre", direccion: "Nueva Dirección", fechaAlta: "2022-01-01", cuit: 987654321, activo: false };
            const res = await request(app).put(`/api/sucursales/${existingSucursalId}`).send(updatedSucursalData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /sucursales/baja/:id", () => {
        it("debería realizar una eliminación lógica de una sucursal específica", async () => {
            const existingSucursalId = 1;
            const res = await request(app).put(`/api/sucursales/baja/${existingSucursalId}`);
            expect(res.status).toBe(204);
        });
    })
    
    describe("DELETE /sucursales/:id", () => {
        it("debería eliminar una sucursal específica", async () => {
            const existingSucursalId = 14;
            const res = await request(app).delete(`/api/sucursales/${existingSucursalId}`);
            expect(res.status).toBe(204);
        });
    });
});