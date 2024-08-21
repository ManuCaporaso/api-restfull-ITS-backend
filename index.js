const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { handleErrors } = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(handleErrors);

// Sincronización de la base de datos y arranque del servidor
sequelize.sync()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database: ', err);
    });
