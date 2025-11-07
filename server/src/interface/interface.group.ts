import mongoose from "mongoose";

export interface GroupDetail{
    name: string, // Name of the tic
    ticId: mongoose.Schema.Types.ObjectId,
    members: mongoose.Schema.Types.ObjectId[] // userIds
}