const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataClient = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    tipoDocumento: {type: String, required: true},
    numeroDocumento: {type: String, required: true},
    fechaNacimiento: {type: String, required: true},
    genero: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    ciudad: {type: String, required: true},
    departamento: {type: String, required: true},
    tipoUsuario: {type: String, required: true}
});

module.exports = mongoose.model('dataClient', dataClient);


