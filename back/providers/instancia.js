const instanciaService = require('../services/instancia');

async function allEncuesta() {
    return instanciaService.findAll({exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt'] });
}

async function busqueda(data) {
    return instanciaService.busquedaFind(data, {exclude: ['tipo_de_encuesta', 'updatedAt', 'createdAt'] });
}

module.exports = {
    allEncuesta,
    busqueda
};