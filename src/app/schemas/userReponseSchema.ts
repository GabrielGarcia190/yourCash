import { z } from "zod";

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  imageUrl: z.string().optional(),
  createdAt: z.string()
});

export const userResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(userSchema),
  message: z.string(),
});

export type ApiResponse = z.infer<typeof userResponseSchema>;
