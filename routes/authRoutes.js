
const express = require('express');
const router = express.Router();
const loginController = require("../controller/authorisation/loginController")
const logoutController = require("../controller/authorisation/logoutController")
const signUpController = require("../controller/authorisation/signUpController")
const forgotController = require("../controller/authorisation/signUpController")


router.post('/login',loginController.Login)
router.post('/logout',logoutController.Logout)
router.post('/signup',signUpController.SignUp)
router.post('/forgotpassword',forgotController.Forgot)
