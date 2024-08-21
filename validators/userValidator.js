const { body } = require('express-validator');

exports.validateRegister = [
    body('username').notEmpty().withMessage('Username requerido'),
    body('email').isEmail().withMessage('Formato de email no valido'),
    body('password').isLength({ min: 6 }).withMessage('La password debe tener mas de 6 caracteres'),
];

exports.validateLogin = [
    body('email').isEmail().withMessage('Formato de email no valido'),
    body('password').notEmpty().withMessage('Password requerida')
];

exports.validateUpdateUser = [
    body('username').optional().notEmpty().withMessage('Username no debe estar vacio'),
    body('email').optional().isEmail().withMessage('Formato de email no valido'),
    body('password').optional().isLength({ min: 6 }).withMessage('La password debe tener mas de 6 caracteres')
];
