const main = require('../controllers/productos');
const { Router } = require('express');

const routes = Router();

routes.get('/crear', main.crearProducto);
routes.get('/borrar', main.borrarProducto);
routes.get('/editar', main.editarProducto);

module.exports = routes;
