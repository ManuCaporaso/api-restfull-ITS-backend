const { User } = require('../models');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile' });
    }
};
