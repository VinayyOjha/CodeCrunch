import { Request, Response } from 'express';
import { code } from "../config/status-code";
import { UserRegistrationDetail } from '../interface/interface.user';
import { validateUserRegistrationData } from '../validations/validate.userDetails';
import { User } from '../models/model.user';

export const UserRegistrationController = async (req: Request, res: Response) => {
    try {
        const payload:UserRegistrationDetail = req.body;

        // 1. Check if the payload is valid
        const validatePayloadResult = validateUserRegistrationData(payload);

        // 2. If the payload is invalid
        if(!validatePayloadResult.status){
            return res.status(code.BadRequest).json({ msg: validatePayloadResult.msg });
        }

        const userExists = await User.findOne({ email: payload.email });

        if (userExists) {
           return res.status(code.BadRequest).json("Account already registered.")
        }

    } catch (error) {
        
    }
}