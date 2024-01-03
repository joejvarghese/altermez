const express = require('express');
const http = require('http');
const morgan = require('morgan')
const config = require('./config');
const connectToSqlServer = require('./database/connection');


const app = express();
app.use(express.json());
app.use(morgan('dev'));

connectToSqlServer()

const server = http.createServer(app);
const PORT = config.PORT

server.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
})