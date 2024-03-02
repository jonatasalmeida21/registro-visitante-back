const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];
const doc = {
    info: {
        title: 'Documentaçao API museu',
        description: "Descriçao de como utilizar as endpoints da API."
    },
    host: 'http//localhost:8000'
};

swaggerAutogen(outputFile, endpointsFiles,doc);