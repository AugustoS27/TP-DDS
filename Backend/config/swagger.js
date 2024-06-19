// Utilizando la biblioteca swagger-autogen para generar automáticamente la documentación de la API a partir de tus archivos de código fuente.

import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API Documentation",
        description: "Autodocumentación de los endpoints de la API",
    },
    host: "localhost:3000",
    schemes: ["http"],
};

const outputFile = "../swagger-output.json";
const endpointsFiles = ["../app.js", "../routes/*.js"];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
    import("../app.js");
});