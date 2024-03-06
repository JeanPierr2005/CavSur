import mongoose from "mongoose";

const matchShema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        activity: {
            type: String,
            required: true,
        },
        num_referee: {
            type: Number,
            required: true,
        },
        details: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Match", matchShema);
