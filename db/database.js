const mongoose = require('mongoose');


const conectarBd = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Conectado a BD Sudameris con MongoDB');
    } 
    catch (e) {
      console.log('No se ha podido establecer conexión con la BD');
    }
  }

const cerrarBd = async  () => {
    if (mongoose.connection) {
        try {
          await mongoose.connection.close();
          console.log('Conexión cerrada');
        }
        catch (e) {console.log('Error al cerrar la conexión'); }
      }
} 

const suscribirCerrar = async () => {
    process.on('SIGINT', cerrarBd);
    process.on('SIGTERM', cerrarBd);
    process.on(exit, cerrarBd);
    process.on('SIGKILL', cerrarBd);  
    PROCESS.on('uncaughtException', cerrarBd);
}

exports.conectarBd = conectarBd;
exports.cerrarBd = cerrarBd;
exports.suscribirCerrar = suscribirCerrar;


