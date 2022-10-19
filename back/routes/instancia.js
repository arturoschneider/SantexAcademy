const Express = require('express');
const app = Express();
const Passport = require('passport');
require('../middleware/passport.middleware')(Passport);
const instanciaControllers = require('../controllers/instancia');
const instanciaValidator = require('../middleware/validations/instancia/instancias.middeware');
const hogarValidator = require('../middleware/validations/instancia/fomHogar.middleware');

//Busqueda de encuesta access:admin
app.get('/busquedaEncuestas',instanciaControllers.encuestasAdmin)

//Llamada a todas las encuestas access:admin
app.get('/adminEncuestas', instanciaControllers.allEncuesta);

//Llamada a todas las encuestas del usuario access:user
app.get('/userEncuestas', instanciaControllers.allEncuestasUser)

//crear nueva encuesta (duda: agregar tambien form o no)
app.post('/crearInstancia', instanciaControllers.newEncuesta);

//test
app.get('/dev', hogarValidator.newhogar, (req, res, next) => {
    console.log('datos validos')
});

module.exports = app;