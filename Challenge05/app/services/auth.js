const bcrypt = require('bcrypt');
const SALT = 10;
const jwt = require('jsonwebtoken');
const ApplicationError = require('../../config/error/ApplicationError');
const userRepository = require('../repository/user')

const encryptPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, SALT);
        return hash;
    }
    catch (error) {
        throw new Error(error);
    }
}

const checkPassword = async (password, hash) => {
    try {
        const check = await bcrypt.compare(password, hash);
        return check;
    }
    catch (error) {
        throw new Error(error)
    }
}

const JWT_SECRET_KEY = 'FSW1'
const createToken = (userData) => {
    return jwt.sign(userData, JWT_SECRET_KEY);
    // { expiresIn: 10}
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}

const authorize = async (bearerToken) => {
    if(!bearerToken) {
        throw new ApplicationError(`Unauthorized`, 401)
    }

    const token = bearerToken.slice(7);
    const decoded = verifyToken(token);
    const {id} = decoded;
    const user = await userRepository.findByPk(id);
    return user;
}

module.exports = { encryptPassword, checkPassword, createToken, verifyToken, authorize }