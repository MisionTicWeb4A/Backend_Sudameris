const express = require('express');
const morgan = require('morgan');
const app = express();

const { client } = require('./database');
const datos = require('./models/task');

//Configuracion de server
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(morgan('dev'));
app.use(express.json()); 

//routes
app.get('/', async (req, res) => {
    res.send('Bienvenidos al sitio Web del Banco Sudameris');
    const datosCliente = await datos.find();
    console.log(datosCliente);
    res.json(datosCliente);
  });

//Inicializacion de server  
app.listen(app.get('port'), () => {
    console.log(`Server listening at port ${app.get('port')}`);
    });
