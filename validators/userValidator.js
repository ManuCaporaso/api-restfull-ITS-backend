const { body } = require('express-validator');

exports.validateRegister = [
    body('username').notEmpty().withMessage('Username requerido'),
    body('email').isEmail().withMessage('Formato de email no valido'),
    body('password').isLength({ min: 6 }).withMessage('La Password debe tener mas de 6 caracteres')
];

exports.validateLogin = [
    body('email').isEmail().withMessage('Formato de email no valido'),
    body('password').notEmpty().withMessage('La Password es requerida')
];
