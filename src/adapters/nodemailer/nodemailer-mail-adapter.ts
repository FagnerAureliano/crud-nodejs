import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3dce6be17b0ace",
    pass: "68eeea19d36627",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: "Equipe Finnance App <app@app.com>",
      to: "Teste Mail <teste@teste.com>",
      subject,
      html: body
    });
  }
}
