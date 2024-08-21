const { User } = require('../models');
const { generateToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/hash');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, email, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ username, email, password: hashedPassword });
        const token = generateToken({ id: user.id, username: user.username });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales invalidas' });
        }
        const token = generateToken({ id: user.id, username: user.username });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error de login' });
    }
};
