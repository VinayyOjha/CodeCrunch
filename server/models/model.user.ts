import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'TIC', 'Student'],
        default: 'Student'
    },
    groupId: {
        type: Schema.Types.ObjectId, ref: 'Group'
    },
    totalPoints: {
        type: Number,
        default: 0,
    }
})