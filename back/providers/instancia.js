const instanciaService = require('../services/instancia');

async function allEncuesta(data) {
    return instanciaService.findAll(data, { exclude: ['password'] });
}

async function busqueda(data) {
    return instanciaService.busquedaFind(data, {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt'] });
}

async function getOne(data) {
    return instanciaService.findOne(data, { exclude: ['password'] });
}

async function exampleDev(data) {
    return instanciaService.exampleDev(data, {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt'] });
}

async function newEncuesta(data) {
    return instanciaService.encuestaCreate(data, { exclude: ['password'] });
}

async function newHogar(data) {
    return instanciaService.hogarCreate(data);
}

module.exports = {
    allEncuesta,
    busqueda,
    exampleDev,
    getOne,
    newEncuesta,
    newHogar
};