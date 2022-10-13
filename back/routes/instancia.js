const Express = require('express');
const app = Express();
const Passport = require('passport');
require('../middleware/passport.middleware')(Passport);
const encuestaModel = require('../models').Encuestas;
const instanciaControllers = require('../controllers/instancia');

//Busqueda de encuesta access:admin
app.get('/busquedaEncuestas', instanciaControllers.encuestasAdmin)

//Llamada a todas las encuestas access:admin
app.get('/adminEncuestas', instanciaControllers.allEncuesta);

//Llamada a todas las encuestas del usuario access:user
app.get('/userEncuestas', instanciaControllers.allEncuestasUser)

//Identificacion

app.get('/', (req, res, next) => {
    res.send('hello word');
});


app.post('/crearInstancia', (req, res, next) => {
    encuestaModel.create(req.body)
        .then( (data) => {
            res.json( {dato:data} )
        })
        .catch( (error) => {
            res.json( {error: error} )
        })
});

app.post('/identificacion/hogares')

module.exports = app;