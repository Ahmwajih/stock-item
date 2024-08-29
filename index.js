const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const { dbConnection } = require('./config/dbConnection');
dbConnection();

app.use(express.json());

require('express-async-errors');

app.use(require('./middlewares/errorHandler'));
app.use(require('./middlewares/filterSort'));

app.use('/', require('./routers/index'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});