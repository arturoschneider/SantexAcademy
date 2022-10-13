const Express = require('express');
const app = Express();
const userControllers = require('../controllers/usuario')

//Todos los usuarios existentes
app.get('/allUser', userControllers.allUsuarios);

//Resultado buqueda
app.get('/busqueda', userControllers.oneUser);

module.exports = app;