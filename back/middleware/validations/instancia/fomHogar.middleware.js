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


const newhogar = [
    body('amb_excl_trabajo')
        .exists()
        .not()
        .isEmpty(),
    body('tiene_ademas_cocina')
        .exists()
        .not()
        .isEmpty(),
    body('tiene_ademas_lavadero')
        .exists()
        .not()
        .isEmpty(),
    body('tiene_ademas_garage')
        .exists()
        .not()
        .isEmpty(),
    body('tiene_ademas_dormir')
        .exists()
        .not()
        .isEmpty(),
    body('tiene_ademas_trabaj')
        .exists()
        .not()
        .isEmpty(),
    body('este_hogar_es')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            if(value < 1 || value > 9) {
                throw new Error('Elija una opcion entre 1 a 9')
            }
            return true
        }),
    body('cocinar_pref')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            if(value < 1 || value > 4) {
                throw new Error('Elija una opcion entre 1 a 4')
            }
            return true
        }),
    body('baño_tipo')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            if(value < 1 || value > 4) {
                throw new Error('Elija una opcion entre 1 a 4')
            }
            return true
        }),
        (req, res, next) => {
            validationResult2(req, res, next)
        }
]

module.exports = { newhogar }