const authService = require('../services/auth');

exports.authorize = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const user = await authService.authorize(bearerToken);
        
        req.user = user;
        next();
    } catch (error) {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            status: 'FAIL!',
            message: error.message
        });
    }
};

exports.isSuperAdmin = async (req, res, next) => {
    try {
        const { roles } = req.user;
        
        if (roles !== 'SUPERADMIN') {
            res.status(403).json({
                status: 'FAIL!',
                message: 'FORBIDDEN'
            })
            return;
        }
        next();
    } catch (error) {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            status: 'FAIL!',
            message: error.message
        });
    }
};

exports.isSuperOrAdmin = async (req, res, next) => {
    try {
        const { roles } = req.user;
        
        if (roles !== 'SUPERADMIN' && roles !== 'ADMIN') {
            res.status(403).json({
                status: 'FAIL!',
                message: 'FORBIDDEN'
            })
            return;
        }
        next();
    } catch (error) {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            status: 'FAIL!',
            message: error.message
        });
    }
};
