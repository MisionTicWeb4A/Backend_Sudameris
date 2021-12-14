const express = require('express');

const router = express.Router();

router.get('/all', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    res.json( {mensaje: "Bienvenidos al sitio Web del Banco Sudameris"}); 
});

module.exports = router;


