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

const newuserValidator = [
    body('name')
    .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('lastname')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('email')
        .exists()
        .isEmail(),
    body('number')
        .exists()
        .isInt()
        .isLength({ min: 5, max: 15 }),
    body('admin')
        .exists()
        .not()
        .isEmpty()
        .withMessage(() => 'checkbox necesario'),
        (req, res, next) => {
            validationResult2(req, res, next)
        }
]

const busquedaValidator = [
    body('name')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('lastname')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 3, max: 255 })
        .withMessage(() => 'El campo debe tener entre 1 y 255 caracteres.'),
    body('admin')
        .exists()
        .not()
        .isEmpty()
        .withMessage(() => 'checkbox necesario'),
        (req, res, next) => {
            validationResult2(req, res, next)
        }
]

module.exports = { newuserValidator, busquedaValidator }



