const Express = require('express');
const app = Express();
const userControllers = require('../controllers/usuario')
const formValidator = require('../middleware/validations/usuarios/newuser.middleware');
const userModel = require('../models').user
const Passport = require('passport');
require('../middleware/passport.middleware')(Passport);

//Todos los usuarios existentes
app.get('/allUser', userControllers.allUsuarios);

//Resultado buqueda
app.get('/busqueda',userControllers.oneUser);

//Crear usuario (consulta loren username/password/id) no usar!!
app.post('/createUser', userControllers.createUser);

//test
app.get('/dev', [
    Passport.authenticate('jwt', { session: false }),
  ],
  (req, res) => {
    const list = userModel.findAll();
    console.log(list)
    res.send('Modelo en funcionamiento')
})

module.exports = app;