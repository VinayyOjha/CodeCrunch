import mongoose, { Schema } from "mongoose";

export interface ProblemDetails {
    title: string;
    platform: "Leetcode" | "GFG" | "HackerRank" | "Other";
    link: string;
    difficulty: string;
    points: number;
    datePosted: Date;
    postedBy: mongoose.Schema.Types.ObjectId;
}