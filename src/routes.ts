import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaUserRepository } from "./repositories/prisma/prisma-user-repositoy";
import { SubmitUserUseCase } from "./use-case/submit-user-use-case";

export const routes = express.Router();

// routes.get("/users", (req, res) => {
//     return res.send("Hellooo!");
//   });

routes.post("/users", async (req, res) => {
  const { name, username, password } = req.body;
  
  const prismaUserRepository = new PrismaUserRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitUserUseCase = new SubmitUserUseCase(
    prismaUserRepository,
    nodemailerMailAdapter
  );

  submitUserUseCase.execute({
    name,
    username,
    password,
  });

  return res.status(201).send();
});
