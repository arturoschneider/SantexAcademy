const { body, validationResult } = require('express-validator');
const { Error } = require('sequelize');

const validationResult2 = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.send({ errors: err.array() })
    }
};


const busquedaEncuesta = [
    body('encuestador')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('num_hogar')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1'),
    body('num_vivienda')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1.'),
        (req, res, next) => {
            validationResult2(req, res, next)
        }
]

const createEncuesta = [
    body('encuestador')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('num_hogar')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1'),
    body('num_vivienda')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1.'),
    body('num_listado')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1.'),
    body('cod_area')
        .exists()
        .isInt()
        .isLength({ min: 1 })
        .withMessage(() => 'El campo debe tener al menos 1.'),
        (req, res, next) => {
            validationResult2(req, res, next)
        }
]

module.exports = { busquedaEncuesta, createEncuesta }