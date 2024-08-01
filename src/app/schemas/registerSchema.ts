import {z} from 'zod';

export const registerSchema = z.object({
    displayName: z.string().min(3, "Display Name must contain at least 3 characters"),
    email: z.string().email("Please enter a valid email"),
    password:z.string().min(6, "Password must be at least 6 characters"),
    passwordConfirm:z.string()
}).refine(data => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"]
});

export type RegisterSchema = z.infer<typeof registerSchema>;