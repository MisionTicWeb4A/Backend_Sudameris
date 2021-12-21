const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
const { registrarControlador } = require('./controllers');
const datos = require('./models/task');
const { conectarBd } = require('./db/database');


// Configuracion de server
const port= process.env.PORT || 8080;

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));


conectarBd();
//Controladoras
registrarControlador(app);

//Inicializacion de server  
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
