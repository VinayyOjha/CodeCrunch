import mongoose, { Schema } from "mongoose";
import { GroupDetail } from "../interface/interface.group";
import { toJSONPlugin } from "../utils/utils.toJSONPlugin";

const groupSchema = new Schema<GroupDetail>({
    name: {
        required: true,
        unique: true
    }, 
    ticId: {
        required: true,
    },
    members: {
        required: true
    }
}, { timestamps: true });

groupSchema.plugin(toJSONPlugin);

const Group = mongoose.model<GroupDetail>("Group", groupSchema);
export default Group;