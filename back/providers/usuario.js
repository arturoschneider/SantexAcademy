const { email } = require('envalid');
const usuarioService = require('../services/usuario');

async function allUser() {
    return usuarioService.findAll({exclude: ['updatedAt', 'createdAt'] });
}

async function oneUser(data) {
    return usuarioService.findOne(data, {exclude: ['updatedAt', 'createdAt', 'email'] });
}

module.exports = {
    allUser,
    oneUser
}