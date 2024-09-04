const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3000;

const { dbConnection } = require('./config/dbConnection');
dbConnection();

app.use(express.json());
app.use(cors());

require('express-async-errors');

app.use(require('./middlewares/errorHandler'));
app.use(require('./middlewares/filterSort'));
app.use(require('./middlewares/auth'));
app.use(require('./middlewares/logger'));

// Swagger setup
const swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/redoc', (req, res) => {
    res.sendFile(path.join(__dirname, 'redoc.html'));
});

app.use('/', require('./routers/index'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});