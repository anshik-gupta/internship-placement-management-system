const express = require('express');
const homeRouter = express.Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.homeController);
homeRouter.get('/login', homeController.loginController);
homeRouter.get('/signup', homeController.getSignupController);
homeRouter.post('/signup', homeController.postSignupController);
homeRouter.post('/login', homeController.postLoginController);

module.exports = homeRouter;
