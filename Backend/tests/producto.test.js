import request from "supertest";
import app from "../app.js";

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

describe("Endpoints de Productos", () => {
    describe("GET /productos", () => {
        it("debería devolver todos los productos", async () => {
            const res = await request(app).get("/api/productos");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /productos", () => {
        it("debería crear un nuevo producto", async () => {
            const newProducto = { 
                nombre: "Nuevo Producto", 
                fechaVencimiento: "2022-12-31", 
                precio: 10, 
                descripcion: "Descripción", 
                idCategoria: 1 
            };
            const res = await request(app).post("/api/productos").send(newProducto);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idProducto");
        });
    });
    
    describe("GET /productos/:id", () => {
        it("debería devolver un producto específico", async () => {
            const existingProductoId = 1;
            const res = await request(app).get(`/api/productos/${existingProductoId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idProducto", existingProductoId);
        });
    
        it("debería devolver 404 si el producto no existe", async () => {
            const nonExistingProductoId = 9999;
            const res = await request(app).get(`/api/productos/${nonExistingProductoId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /productos/:id", () => {
        it("debería actualizar un producto específico", async () => {
            const existingProductoId = 1;
            const updatedProductoData = { 
                nombre: "Nuevo Nombre", 
                fechaVencimiento: "2023-12-31", 
                precio: 15, 
                descripcion: "Nueva Descripción", 
                idCategoria: 2 
            };
            const res = await request(app).put(`/api/productos/${existingProductoId}`).send(updatedProductoData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /productos/baja/:id", () => {
        it("debería realizar una eliminación lógica de un producto específico", async () => {
            const existingProductoId = 1;
            const res = await request(app).put(`/api/productos/baja/${existingProductoId}`);
            expect(res.status).toBe(204);
        });
    })
    
    describe("DELETE /productos/:id", () => {
        it("debería eliminar un producto específico", async () => {
            const existingProductoId = 40;
            const res = await request(app).delete(`/api/productos/${existingProductoId}`);
            expect(res.status).toBe(204);
        });
    });
});
