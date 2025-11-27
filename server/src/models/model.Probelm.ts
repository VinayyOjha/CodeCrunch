import mongoose, { Schema } from "mongoose";
import { ProblemDetails } from "../interface/interface.problem";

const problemSchema = new Schema<ProblemDetails>({
    title: { type: String, required: true},
    platform: {
        type: String,
        enum: ["Leetcode", "GFG", "HackerRank", "Other"],
        default: "Other"
    },
    link: { type: String, required: true },
    difficulty: {
        type: String,
        required: true,
        enum: ["Easy", "Medium", "Hard"]
    },
    points: { type: Number, required: true, min: 0 },
    datePosted: { type: Date, default: Date.now() },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})