const Express = require('express');
const app = Express();
const individuosModel = require('../models').Modelo;

app.get('/', (req, res) => {
    res.send('hello word');
});
app.post('/crearIndividuo', (req, res, next) => {
    individuosModel.create(req.body)
        .then( (data) => {
            res.json( {dato:data} )
        })
        .catch( (error) => {
            res.json( {error: error} )
        })
});

module.exports = app;