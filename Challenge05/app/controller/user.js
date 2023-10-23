const userService = require('../services/user')

exports.register =  async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.registerUser(userData);
        res.json({
            status: 'OK!',
            message: 'Success',
            data: newUser
        })
    }
    catch (error) {
        res.status(error.statusCode).json({
            status: "FAIL!",
            message: error.message
        })
    }
}

exports.registerAdmin =  async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.registerUser(userData, true);
        res.json({
            status: 'OK!',
            message: 'Success',
            data: newUser
        })
    }
    catch (error) {
        res.status(error.statusCode).json({
            status: "FAIL!",
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const credential = req.body;
        if (!credential.email || !credential.password) {
            return res.status(400).json({
                status: 'FAIL!',
                message: 'Please input email or password'
            });
        }
        
        const user = await userService.loginUser(credential);
        
        res.status(200).json({
            status: 'OK!',
            message: 'Login successfully',
            user
        });
    } catch (error) {
        res.status(error.statusCode).json({
            status: "FAIL!",
            message: error.message
        })
    }
}

exports.currentUser = async (req, res) => {
    try {
        const currentUser = await userService.getCurrentUser(req.user.email);
        res.status(200).json({
            currentUser
        });
    } catch (error) {
        res.status(error.statusCode).json({
            status: "FAIL!",
            message: error.message
        })
    }
};
