const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No ha proporcionado el Token' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Fallo en la autenticacion de Token' });
        req.user = decoded;
        next();
    });
};
