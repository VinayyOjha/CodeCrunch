import redisClient from "../config/redis-config";

export class RedisService{
    public static async createOtp(email: string, otp: string){
        return await redisClient.setEx(`OTP:${email}`, 600, otp);
    }

    public static async verifyOtp(email: string, otp: number){
        const cachedOtp = await redisClient.get(`OTP:${email}`);
        const otpValue = parseInt(cachedOtp as string);
        console.log("(cached, user)", otpValue, otp);

        return otp === otpValue;
    }
}