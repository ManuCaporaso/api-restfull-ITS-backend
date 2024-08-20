exports.handleErrors = (err, req, res, next) => {
    res.status(500).json({ message: err.message || 'An unexpected error occurred' });
};
