import express   from 'express';
import nodemailer from "nodemailer";
import { prisma } from './prisma';


export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3dce6be17b0ace",
      pass: "68eeea19d36627",
    },
  });

routes.get("/users", (req, res) => {
    return res.send("Hellooo!");
  });
  
  routes.post("/users", async (req, res) => {
    const { name, username, password } = req.body;
  
  
  
  //  await transport.sendMail({
  //     from: "Equipe Finnance App <app@app.com>",
  //     to: "Teste Mail <teste@teste.com>",
  //     subject: "Novo feedback",
  //     html: [
  //         `<div>`, 
  //         `<h2>Bem vindo, ${name}!</h2>`, 
  //         `</div>`
  //     ].join("\n"),
  //   });
  
    return res.status(201);
  });
  