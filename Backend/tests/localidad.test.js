import request from 'supertest';
import app from '../app';

// describe("Endpoints de Venta", () => {
//     describe("GET /ventas", () => {
//         it("debería devolver todas las ventas", async () => {
//             const res = await request(app).get("/api/ventas");
//             expect(res.status).toBe(200);
//         });
//     });
    
//     describe("POST /ventas", () => {
//         it("debería crear una nueva venta", async () => {
//             const newVenta = { 
//                 fechaVenta: "2022-01-01",
//                 precioTotal: 100,
//                 descripcion: "Venta de prueba",
//                 idCliente: 1,
//                 idSucursal: 1,
//                 legajoEmpleado: 1,
//                 activo: true
//             };
//             const res = await request(app).post("/api/ventas").send(newVenta);
//             expect(res.status).toBe(201);
//             expect(res.body).toHaveProperty("idVenta");
//         });
//     });
    
//     describe("GET /ventas/:id", () => {
//         it("debería devolver una venta específica", async () => {
//             const existingVentaId = 1;
//             const res = await request(app).get(`/api/ventas/${existingVentaId}`);
//             expect(res.status).toBe(200);
//             expect(res.body).toHaveProperty("idVenta", existingVentaId);
//         });
    
//         it("debería devolver 404 si la venta no existe", async () => {
//             const nonExistingVentaId = 9999;
//             const res = await request(app).get(`/api/ventas/${nonExistingVentaId}`);
//             expect(res.status).toBe(404);
//         });
//     });
    
//     describe("PUT /ventas/:id", () => {
//         it("debería actualizar una venta específica", async () => {
//             const existingVentaId = 1;
//             const updatedVentaData = { 
//                 fechaVenta: "2022-01-02",
//                 precioTotal: 200,
//                 descripcion: "Venta actualizada",
//                 idCliente: 2,
//                 idSucursal: 2,
//                 legajoEmpleado: 2,
//                 activo: false
//             };
//             const res = await request(app).put(`/api/ventas/${existingVentaId}`).send(updatedVentaData);
//             expect(res.status).toBe(204);
//         });
//     });

//     describe("PUT /ventas/baja/:id", () => {
//         it("debería realizar una eliminación lógica de una venta específica", async () => {
//             const existingVentaId = 1;
//             const res = await request(app).put(`/api/ventas/baja/${existingVentaId}`);
//             expect(res.status).toBe(204);
//         });
//     })
//     describe("DELETE /ventas/:id", () => {
//         it("debería eliminar una venta específica", async () => {
//             const existingVentaId = 11;
//             const res = await request(app).delete(`/api/ventas/${existingVentaId}`);
//             expect(res.status).toBe(204);
//         });
//     });
// });

describe("Endpoints de Localidad", () => {
    describe("GET /localidades", () => {
        it("debería devolver todas las localidades", async () => {
            const res = await request(app).get("/api/localidades");
            expect(res.status).toBe(200);
        });
    });
    
    describe("POST /localidades", () => {
        it("debería crear una nueva localidad", async () => {
            const newLocalidad = { 
                nombre: "Nueva Localidad",
                codigoPostal: 12345,
                activo: true
            };
            const res = await request(app).post("/api/localidades").send(newLocalidad);
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty("idLocalidad");
        });
    });
    
    describe("GET /localidades/:id", () => {
        it("debería devolver una localidad específica", async () => {
            const existingLocalidadId = 1;
            const res = await request(app).get(`/api/localidades/${existingLocalidadId}`);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("idLocalidad", existingLocalidadId);
        });
    
        it("debería devolver 404 si la localidad no existe", async () => {
            const nonExistingLocalidadId = 9999;
            const res = await request(app).get(`/api/localidades/${nonExistingLocalidadId}`);
            expect(res.status).toBe(404);
        });
    });
    
    describe("PUT /localidades/:id", () => {
        it("debería actualizar una localidad específica", async () => {
            const existingLocalidadId = 1;
            const updatedLocalidadData = { 
                nombre: "Localidad Actualizada",
                codigoPostal: 54321,
                activo: false
            };
            const res = await request(app).put(`/api/localidades/${existingLocalidadId}`).send(updatedLocalidadData);
            expect(res.status).toBe(204);
        });
    });

    describe("PUT /localidades/baja/:id", () => {
        it("debería realizar una eliminación lógica de una localidad específica", async () => {
            const existingLocalidadId = 1;
            const res = await request(app).put(`/api/localidades/baja/${existingLocalidadId}`);
            expect(res.status).toBe(204);
        });
    })
    describe("DELETE /localidades/:id", () => {
        it("debería eliminar una localidad específica", async () => {
            const existingLocalidadId = 11;
            const res = await request(app).delete(`/api/localidades/${existingLocalidadId}`);
            expect(res.status).toBe(204);
        });
    });
});