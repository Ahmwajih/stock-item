const swaggerAutogen = require('swagger-autogen')()

require('dotenv').config();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const packageJson = require('./package.json');

const doc = {
    info: {
        version: packageJson.version,
        title: packageJson.name,
        description: packageJson.description,
        termsOfService: '',
        contact: {
            name: packageJson.author,
            email: packageJson.email,
            url: packageJson.url
        },
        license: {
            name: packageJson.license,
            url: packageJson.url
        }
    },
    host: `${HOST}:${PORT}`,
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        { name: 'Users', description: 'API for users in the system' },
        { name: 'Brands', description: 'API for Brands in the system' },
        { name: 'Categories', description: 'API for categories in the system' },
        { name: 'Firms', description: 'API for firms in the system' },
        { name: 'Products', description: 'API for products in the system' },
        { name: 'Purchases', description: 'API for Purchases in the system' },
        { name: 'Auth', description: 'API for authentication in the system' },
        { name: 'Sales', description: 'API for Sales in the system' }
    ],
    securityDefinitions: {
        Token: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description:' bearer token based authentication'
        }
    },
    security: [
        { Token: [] }
    ],
    definitions: {
        "/auth/login":{
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            }
        }
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io'
    },
    "User": require('./models/users'),
    "Tokens": require('./models/token'),
    "Brands": require('./models/brands'),
    "Categories": require('./models/categories'),
    "Firms": require('./models/firms'),
    "Products": require('./models/products'),
    "Purchases": require('./models/purchases'),
    "Sales": require('./models/sales')
    
}


const routes = ['./index.js']

const outputFile = './swagger.json'

swaggerAutogen(outputFile, routes, doc)