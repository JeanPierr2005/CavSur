import { z } from "zod";

export const createRefereeSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    lastname: z.string().optional(),
    num_document: z.string({
        required_error: "Number Document is required",
    }),
    phone: z.string({
        required_error: "Phone is required",
    }),
});
