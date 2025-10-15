import { Request, Response } from 'express';
import { code } from "../config/status-code";
import { UserRegistrationDetail } from '../interface/interface.user';


export const UserRegistrationController = async (req: Request, res: Response) => {
    try {
        const paylod:UserRegistrationDetail = req.body;

        // 1. Check if the payload is valid
        const validatePayloadResult = validateUserRegistrationDate(payload);

        // 2. If the payload is invalid
        if(!validatePayloadResult.status){
            return res.status(code.BadRequest).json({ msg: validatePayloadResult.msg });
        }

        const userExists = await 

    } catch (error) {
        
    }
}