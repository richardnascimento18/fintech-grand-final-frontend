import z from "zod";

export const loginSchema = z.object({
    email: z.email({
        error: "Email inválido. Por favor, insira um email seguindo o exemplo: 'johndoe@exemplo.com'",
    }),
    password: z.string(),
});

export type LoginFormFields = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    email: z.email({
        error: "Email inválido. Por favor, insira um email seguindo o exemplo: 'johndoe@exemplo.com'",
    }),
    password: z.string().min(6, {
        error: "A senha deve ter no mínimo 6 caracteres.",
    }).regex(/[A-Z]/, {
        error: "A senha deve conter ao menos uma letra maiúscula.",
    }).regex(/[0-9]/, {
        error: "A senha deve conter ao menos um número.",
    }).regex(/[\W_]/, {
        error: "A senha deve conter ao menos um caractere especial.",
    }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    error: "As senhas não coincidem.",
    path: ["confirmPassword"],
});

export type RegisterFormFields = z.infer<typeof registerSchema>;