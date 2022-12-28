
import express from "express";

import Login from "../controllers/authorisation/loginController"
import Logout from "../controllers/authorisation/logoutController"
import SignUp from "../controllers/authorisation/signUpController"
import Forgot from "../controllers/authorisation/signUpController"
const router = express.Router();

router.post('/login',Login)
router.post('/logout',Logout)
router.post('/signup',SignUp)
router.post('/forgotpassword',Forgot)

export default router;
