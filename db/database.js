const mongoose = require('mongoose');

//const uri = "mongodb+srv://sudamerist1:DOZhuHLup5NejpFN@cluster0.jkvzv.mongodb.net/data_sudameris?retryWrites=true&w=majority";
const conectarBd = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connectado a MongoDB');
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


