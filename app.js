const express = require('express');
const morgan = require('morgan');
const app = express();

//const { mongoose } = require('./database');

//Configuracion de server
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(morgan('dev'));
app.use(express.json()); 

//routes
app.get('/', (req, res) => {
    res.send('Bienvenidos al sitio Web del Banco Sudameris');
  });

//Inicializacion de server  
app.listen(app.get('port'), () => {
    console.log(`Server listening at port ${app.get('port')}`);
    });
