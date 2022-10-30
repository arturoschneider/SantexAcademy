const instanciaProvider = require('../providers/instancia');

//Todas las encuestas existentes access:admin
async function allEncuesta(req, res, next) {
    try {
      //const body = {id: req.user.id}
      const encuestas = await instanciaProvider.allEncuesta({
        id: req.user.id,
      });
      res.json(encuestas);
    } catch (error) {
    next(error);
    }
}

//Busqueda de encuesta access:admin
async function encuestasAdmin(req, res, next) {
    try {
        const body = {
          id: req.user.id,
          encuestador: req.query.encuestador,
          fecha: req.query.fecha,
          num_vivienda: req.query.num_vivienda,
          num_hogar: req.query.num_hogar
        };
        console.log('log controller')
        console.log(body)
        const userEncuesta = await instanciaProvider.busqueda(body)
        res.json(userEncuesta);
    } catch (error) {
        next(error);
    }
}

//Todas las encuestas del user
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

//Creacion de nueva encuesta
async function newEncuesta(req, res, next) {
  try {
    const body = {
      id: req.user.id,
      cod_area: req.body.cod_area,
      num_listado: req.body.num_listado,
      num_vivienda: req.body.num_vivienda,
      num_hogar: req.body.num_hogar,
      fecha: req.body.fecha,
      respondiente: req.body.respondiente
    };
    const encuesta = await instanciaProvider.newEncuesta(body);
    res.json(encuesta);
  } catch (error) {
    next(error);
  }
}

//Creacion de nuevo form Hogar
async function newHogar(req, res, next) {
  try {
    const body = req.body
    const hogar = await instanciaProvider.newHogar(body);
    res.json(hogar);
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
    example,
    newEncuesta,
    newHogar
};

