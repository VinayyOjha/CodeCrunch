import mongoose, { Schema } from "mongoose";
import { GroupDetail } from "../interface/interface.group";
import { toJSONPlugin } from "../utils/utils.toJSONPlugin";

const groupSchema = new Schema<GroupDetail>({
    name: {
        type: String,   
        required: true,
        unique: true
    }, 
    ticId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
}, { timestamps: true });

groupSchema.plugin(toJSONPlugin);

const Group = mongoose.model<GroupDetail>("Group", groupSchema);
export default Group;