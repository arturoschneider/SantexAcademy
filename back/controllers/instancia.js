const instanciaProvider = require('../providers/instancia');

//Todas las encuestas son llamas access:user
async function allEncuesta(req, res, next) {
    try {
      const encuestas = await instanciaProvider.allEncuesta();
      res.json(encuestas);
    } catch (error) {
    next(error);
    }
}

//Busqueda de encuesta access:admin
async function encuestaUser(req, res, next) {
    try {
        /*const { user_id, cod_area, num_listado, fecha, num_vivienda, num_hogar } = req.body;
        const userEncuesta = await instanciaProvider.busqueda(user_id, cod_area, num_listado, fecha, num_vivienda, num_hogar);*/
        const body = req.body
        const userEncuesta = await instanciaProvider.busqueda(body)
        res.json(userEncuesta);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allEncuesta,
    encuestaUser
};

