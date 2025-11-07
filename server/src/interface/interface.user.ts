import { ObjectId } from "mongoose";

export interface UserRegistrationDetail {
    email: string;
    name: string;
    password: string;
    role: "student" | "tic" | "admin";
    groupId?: ObjectId;
    otp?: string;
}

export interface UserDetail extends UserRegistrationDetail{
    rank: number;
    streak: number;
    totalScore: number;
    problemSolved: number;
}