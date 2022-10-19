const usuarioProviders = require('../providers/usuario');

//Todas los usuarios existentes access:admin
async function allUsuarios(req, res, next) {
    try {
      const usuarios = await usuarioProviders.allUser();
      res.json(usuarios);
    } catch (error) {
    next(error);
    }
}

//Resultado de busqueda
async function oneUser(req, res, next) {
  try {
    const body = req.body
    const usuario = await usuarioProviders.oneUser(body);
    res.json(usuario);
  } catch (error) {
  next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const body = req.body
    const user = await usuarioProviders.createUs(body);
    res.json(user);
  } catch (error) {
  next(error);
  }
}

module.exports = {
    allUsuarios,
    oneUser,
    createUser
}