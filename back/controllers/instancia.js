const instanciaProvider = require('../providers/instancia');

//Todas las encuestas existentes access:admin
async function allEncuesta(req, res, next) {
    try {
      const encuestas = await instanciaProvider.allEncuesta();
      res.json(encuestas);
    } catch (error) {
    next(error);
    }
}

//Busqueda de encuesta access:admin
async function encuestasAdmin(req, res, next) {
    try {
        const body = req.body
        const userEncuesta = await instanciaProvider.busqueda(body)
        res.json(userEncuesta);
    } catch (error) {
        next(error);
    }
}

async function allEncuestasUser(req, res, next) {
    try {
      const userData = await instanciaProvider.getOne({
        user_id: req.body.id,
      });
      res.json(userData);
    } catch (error) {
      next(error);
    }
  }

async function example(req, res, next) {
    try {
        const body = req.body
        const encuestasWithUsename = await instanciaProvider.exampleDev(body);
        res.json(encuestasWithUsename);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allEncuesta,
    allEncuestasUser,
    encuestasAdmin,
    example
};

