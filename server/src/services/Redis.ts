import redisClient from "../config/redis-config";

export class RedisService{
    public static async createOtp(email: string, otp: string){
        return await redisClient.setEx(`OTP:${email}`, 600, otp);
    }
}