const BankController = require('./BankControllers');

exports.registrarControlador = (app) => {
    app.use('./Bank', BankController);
}
