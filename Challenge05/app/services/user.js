const userRepository = require('../repository/user')
const authService = require('../services/auth')
const ApplicationError = require('../../config/error/ApplicationError');

async function registerUser(userData, generateAdmin) {
    try {
        const { name, email, password, phoneNumber, address } = userData;
        if(!email || !password) {
            throw new ApplicationError(`Ada yang kurang nih, cek dulu!`, 500)
        }
        
        const encryptedPassword = await authService.encryptPassword(password);
        
        const newUser = await userRepository.createUser({
            name,
            email,
            encryptedPassword,
            phoneNumber,
            address,
            roles: generateAdmin ? 'ADMIN' : 'MEMBER'
        });
        
        return newUser;
    } catch (error) {
        throw new ApplicationError(`Failed to register user: ${error.message}`, 500)
    }
}

async function loginUser(credential) {
    try {
        const { email, password } = credential;
        const user = await userRepository.findUserByEmail(email);
        if (!user) {
            throw new ApplicationError(`Email is not available`, 404)
        }
        
        const isMatch = await userRepository.checkPassword(password, user.encryptedPassword);
        if (!isMatch) {
            throw new ApplicationError(`Password is not match`, 401)
        }
        
        const token = authService.createToken({id: user.id});
        const userWithToken = {...user.dataValues, token};
        return userWithToken;
    }
    catch (error) {
        throw new ApplicationError(`Failed to login: ${error.message}`, 500)
    }
}

async function getCurrentUser(email) {
    try {
      return await userRepository.findUserByEmail(email);
    } catch (error) {
      throw new ApplicationError(`Failed to get current user: ${error.message}`, 500)
    }
  };

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};