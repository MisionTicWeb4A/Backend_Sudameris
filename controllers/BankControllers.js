// const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const {
    getUsers,
    newUser,
    getUser
} = require('../controllers/user')

router.get('/users', getUsers);
router.post('/user', newUser);
router.get('/user/:userId', getUser);

router.get('/all', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    res.json( {mensaje: "Bienvenidos al sitio Web del Banco Sudameris"}); 
});

module.exports = router;


