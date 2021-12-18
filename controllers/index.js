const BankController = require('./BankControllers');

exports.registrarControlador = (app) => {
    app.use('/bank', BankController);
}
