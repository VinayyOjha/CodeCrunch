import { Router } from 'express'
import { UserRegistrationController } from '../controllers/controller.register';
import { sendOTPHandler } from '../controllers/controller.sendOTP';


const router = Router();

// Register new User
router.post('/register', UserRegistrationController);

// Send OTP
router.route('sendOTP').get(sendOTPHandler);

