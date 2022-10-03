const Express = require('express');
const app = Express();
const instanciaModel = require('../models/encuestas');


app.get('/', (req, res) => {
    res.send('hello word');
});
app.post('/crearInstancia', (req, res, next) => {
    instanciaModel.create(req.body)
        .then( (data) => {
            res.json( {dato:data} )
        })
        .cath( (error) => {
            res.json( {error: error} )
        })
});

module.exports = app;