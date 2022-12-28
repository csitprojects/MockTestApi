
import express from "express";

import Login from "../controller/authorisation/loginController"
import Logout from "../controller/authorisation/logoutController"
import SignUp from "../controller/authorisation/signUpController"
import Forgot from "../controller/authorisation/signUpController"
const router = express.Router();

router.post('/login',Login)
router.post('/logout',Logout)
router.post('/signup',SignUp)
router.post('/forgotpassword',Forgot)

export default router;
