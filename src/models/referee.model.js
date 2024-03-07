import mongoose from "mongoose";

const refereeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
        },
        num_document: {
            type: String,
            required: true,
        },
        phone: {
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

export default mongoose.model("Referee", refereeSchema);
