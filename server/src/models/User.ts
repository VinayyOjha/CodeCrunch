import mongoose, { Schema } from "mongoose";
import { UserDetail } from "../interface/interface.user";
import { toJSONPlugin } from "../utils/utils.toJSONPlugin";

const userSchema = new Schema<UserDetail>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "tic", "admin"],
    default: "student"
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group"
  },
  rank: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
  problemSolved: { type: Number, default: 0 },
}, { timestamps: true });

userSchema.plugin(toJSONPlugin);

const User = mongoose.model<UserDetail>("User", userSchema);
export default User;
