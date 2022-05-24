import { MailAdapter } from "../adapters/mail-adapter";
import { UserRepository } from "../repositories/user-repositoy";

interface SubmitUserUseCaseRequest {
  name: string;
  username: string;
  password: string;
}

export class SubmitUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitUserUseCaseRequest) {
    const { name, username, password } = request;

    await this.userRepository.create({
      name,
      username,
      password,
    });
    await this.mailAdapter.sendMail({
      subject: "Novo email",
      body: [`<div>`, `<h2>Bem vindo, ${name}!</h2>`, `</div>`].join("\n"),
    });
  }
}
