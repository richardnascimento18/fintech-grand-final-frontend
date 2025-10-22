import z from "zod";

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export type LoginFormFields = z.infer<typeof loginSchema>;