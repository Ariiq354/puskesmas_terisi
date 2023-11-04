import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must contain at least 3 character" })
      .max(255, { message: "Username max character reached" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must contain at least 6 character" })
      .max(100, { message: "Password max character reached" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must contain at least 6 character" })
      .max(100, { message: "Password max character reached" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 character" })
    .max(255, { message: "Username max character reached" }),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 character" })
    .max(100, { message: "Password max character reached" }),
});
