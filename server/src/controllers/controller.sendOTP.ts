import { Request, Response } from "express";
import { code } from "../config/status-code";
import { User } from "../models/model.user";
import { RedisService } from "../services/Redis";
import { sendEmail } from "../utils/utils.mail";

export const sendOTPHandler = async (req: Request, res: Response) => {
    try {
        // 1. Extract payload 
        const payload = req.query as unknown as { email: string }

        // 2. If bad request
        if (!payload){
            return res.status(code.BadRequest).json({ msg: "Email is empty" });
        }

        // 3. Check if user is already registered
        const userExists = await User.findOne({ email: payload.email });

        // 4. If user already exists
        if (userExists){
            return res.status(code.Forbidden).json({msg: "User already exists"});
        }

        // 5. If the user doesn't exists - Create OTP
        const otp = Math.floor(Math.random() * 99999 + 100000).toString();
        await RedisService.createOtp(payload.email, otp); // save the otp to cache

        // 6. Send the email
        await sendEmail(
            payload.email,
            "Registration OTP",
            "",
            `<p>Hola from <b>CodeCrunch</b>!</p>
                <p>Your OTP is: <b>${otp}</b></p>
                <p><i>It is valid for 10 minutes only.</i></p>
                <p>Sent at: ${new Date().toLocaleDateString()}</p>`
        );  

        // 7. Return 
        return res.status(code.Success).json({msg: 'OTP sent successfully'})

    } catch (error) {
        console.log("@sendOtpHandler: \n", error);
        return res.status(code.ServerError).json({ msg: "Failed to send OTP.\nTry again later."});
    }
}