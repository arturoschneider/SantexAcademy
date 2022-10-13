const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
const instancia = require('./instancia');
const usuarios = require('./usuarios');


// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/users', userRoute);
app.use('/instancia', instancia);
app.use('/usuarios', usuarios);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);


module.exports = app;
