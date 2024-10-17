import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    imageUrl: z.string().url({ message: "URL da imagem inválida" }),
  });