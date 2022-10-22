const Express = require('express');
const app = Express();
const Passport = require('passport');
require('../middleware/passport.middleware')(Passport);
const instanciaControllers = require('../controllers/instancia');
const instanciaValidator = require('../middleware/validations/instancia/instancias.middeware');
const hogarValidator = require('../middleware/validations/instancia/fomHogar.middleware');

//Busqueda de encuesta access:admin
app.get('/busquedaEncuestas',[
    Passport.authenticate('jwt', { session: false }),
  ],instanciaControllers.encuestasAdmin)


//Llamada a todas las encuestas admin:true (trae todas las encuestas), admin:false(trae las encuestas del usuario logeado)
app.get('/adminEncuestas', [
    Passport.authenticate('jwt', { session: false }),
  ], instanciaControllers.allEncuesta);


//Llamada a todas las encuestas del usuario access:user (en desuso 22/10/2022)
app.get('/userEncuestas', instanciaControllers.allEncuestasUser)


//crear nueva encuesta (duda: agregar tambien form o no)
app.post('/crearInstancia', [
    Passport.authenticate('jwt', { session: false }),
  ], instanciaControllers.newEncuesta);


//crear formulario Hogar con id_encuesta uno a uno
app.post('/creaIntancia/hogar', instanciaControllers.newHogar)


//test
app.get('/dev', hogarValidator.newhogar, (req, res, next) => {
    console.log('datos validos')
});

module.exports = app;