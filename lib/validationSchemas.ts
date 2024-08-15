import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Inavlid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signupSchema = z.object({
  email: z.string().email("Inavlid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
