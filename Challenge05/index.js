// Challenge 4 BINAR

const express = require('express')
const app = express()
const PORT = 8000
const host = 'localhost'

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

const { sequelize } = require('./test_sequelize')
const carController = require('./app/controller/car')
const userController = require('./app/controller/user')
const authMiddleware = require('./app/middleware/auth')

app.use(express.json());

(async () => {
  await sequelize.sync();
  console.log('Database synchronized.');
})();

// root
app.get('/', carController.ping)

// get cars data (with authorize)
app.get('/cars', authMiddleware.authorize, carController.getCars)

//get cars by id (with authorize)
app.get('/cars/:id', authMiddleware.authorize, carController.getCarById, (req, res) => {
  res.status(200).json(req.car);
});

// post new data (with authorize, ONLY superadmin or admin can see)
app.post('/cars', authMiddleware.authorize, authMiddleware.isSuperOrAdmin, carController.createCar, (req, res) => {
  res.status(201).json(req.createdCar);
});

// modify (with authorize, ONLY superadmin or admin can see)
app.put('/cars/:id', authMiddleware.authorize, authMiddleware.isSuperOrAdmin, carController.updateCar, (req, res) => {
  res.status(200).json(req.updatedCar);
});

// delete (with authorize, ONLY superadmin or admin can see)
app.delete('/cars/:id', authMiddleware.authorize, authMiddleware.isSuperOrAdmin, carController.deleteCar)

//register member
app.post('/register/member', userController.register);

// register admin (ONLY superadmin)
app.post('/register/admin', authMiddleware.authorize, authMiddleware.isSuperAdmin, userController.registerAdmin);

//login
app.post('/login', userController.login);

//check current user
app.get('/current', authMiddleware.authorize, userController.currentUser)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, host, () => {
  console.log(`Server is running at http://${host}:${PORT}`);
})