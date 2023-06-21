const express = require('express');
const route = express.Router();
const { obterDados } = require('../middlewares/obter_dados');
const { validarInput } = require('../middlewares/validacao');
const { converter } = require('../controllers/conversao');





route.use(validarInput, obterDados);
route.get('/medidas', converter);


module.exports = route