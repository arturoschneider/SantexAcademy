const Express = require('express');
const app = Express();
const Passport = require('passport');
require('../middleware/passport.middleware')(Passport);
const encuestaModel = require('../models').Encuestas;
const instanciaControllers = require('../controllers/instancia');


app.get('/', (req, res, next) => {
    res.send('hello word');
});

//Llamada a todas las encuestas access:admin
app.get('/mostrarEncuestas', instanciaControllers.allEncuesta);

//Llamada a todas las encuestas del usuario access:user

//Busqueda de encuesta access:admin
app.get('/userEncuesta', instanciaControllers.encuestaUser)

app.post('/crearInstancia', (req, res, next) => {
    encuestaModel.create(req.body)
        .then( (data) => {
            res.json( {dato:data} )
        })
        .catch( (error) => {
            res.json( {error: error} )
        })
});

module.exports = app;