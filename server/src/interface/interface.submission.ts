import mongoose from "mongoose";

export interface SubmissionDetails {
    userId: mongoose.Schema.Types.ObjectId;     // who solved it
    problemId: mongoose.Schema.Types.ObjectId;  // which problem
    solved: boolean;                            // true if solved
    pointsAwarded: number;                      // based on problem points
    submittedAt: Date;                          // ToS(Time of submission)
}