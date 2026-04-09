import express from 'express';
import { loginUser, registerUser, adminLogin, googleLogin, forgotPassword, resetPassword } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);
userRouter.post('/google-login',googleLogin);
userRouter.post('/forgot-password',forgotPassword);
userRouter.post('/reset-password',resetPassword);



export default userRouter;