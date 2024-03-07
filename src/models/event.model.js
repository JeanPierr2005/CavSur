import mongoose from "mongoose";

const eventShema = new mongoose.Schema(
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
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Event", eventShema);