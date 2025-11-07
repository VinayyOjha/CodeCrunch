import { Request, Response } from "express";
import { validateUserAuthData } from "../validations/validate.userDetails";

export const userAuthController =  async (req: Request, res: Response) => {
    try {
        const payload : {
            email: string,
            password: string
        } = req.body;

        // 1. Check if the payload is valid
        const validatedPayload = validateUserAuthData(payload);

        // 2. If the payload is invalid
        
    } catch (error) {
        
    }
}