import { z } from "zod";

export const createMatchSchema = z.object({
    location: z.string({
        required_error: "Location is required",
    }),
    date: z.string().datetime().optional(),
    activity: z.string({
        required_error: "Activity is required",
    }),
    num_referee: z.string({
        required_error: "Number of referee is required",
    }),
    details: z
        .string({
            required_error: "Details must be a string",
        })
        .optional(),
});
