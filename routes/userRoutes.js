const express = require('express');
const { getProfile, updateUser, deleteUser } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { validateUpdateUser } = require('../validators/userValidator');

const router = express.Router();

router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, validateUpdateUser, updateUser);
router.delete('/profile', verifyToken, deleteUser);

module.exports = router;
