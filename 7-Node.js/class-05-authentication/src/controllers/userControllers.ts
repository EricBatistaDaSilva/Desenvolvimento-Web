import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z
          .string({
            required_error: "Nome obrigatório",
            invalid_type_error: "Digite somente texto",
          })
          .min(3, { message: "Nome minimo de 3 caracteres!" })
          .max(126, "Excedeu o limite de caracteres"),

        email: z
          .string({
            required_error: "Email obrigatório",
            invalid_type_error: "Somente texto",
          })
          .email({ message: "Email inválido" })
          .max(25, "Excedeu o limite"),

        password: z
          .string({
            required_error: "Senha obrigatório",
            invalid_type_error: "Use somente string!",
          })
          .min(7, { message: "Use no minimo 7 caracteres" })
          .max(10, "Excedeu o limite de caracteres"),
      }).strict();

      const { name } = userSchema.parse(req.body);

      console.log(name);
      
      return res.status(201).json({ message: "User created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },
};
