const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.createUser = (userData) => {
    return User.create(userData)
}

exports.findUserByEmail = (email) => {
    return User.findOne({ 
        where: { email }
    });
}

exports.findByPk = (id) => {
    return User.findByPk(id)
}

exports.checkPassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}
