import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userRepository } from "../repositories/userRepository";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
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
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userExists = await userRepository.getByEmail(email);
      if (userExists)
        throw res.status(400).json({ message: "email already exists!" });

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "User created!", userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = "3a395a7d-eecf-4b58-9256-c0f0611ea9b5";

      const user = await userRepository.getByID(userID);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const { name, email } = user;

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};
