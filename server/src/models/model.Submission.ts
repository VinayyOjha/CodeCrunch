import mongoose, { Schema } from "mongoose";
import { SubmissionDetails } from "../interface/interface.submission";
import { toJSONPlugin } from "../utils/utils.toJSONPlugin";

const submissionSchema = new Schema<SubmissionDetails>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem",
        required: true
    },
    pointsAwarded: { type: Number, required: true },
    solved: { type: Boolean, required: true },
    submittedAt: { type: Date, default: Date.now() }
}, { timestamps: true });

submissionSchema.plugin(toJSONPlugin);

const Submission = mongoose.model<SubmissionDetails>("Submission", submissionSchema);
export default Submission;