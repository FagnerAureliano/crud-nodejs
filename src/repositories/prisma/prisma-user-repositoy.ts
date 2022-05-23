import { prisma } from "../../prisma";
import { UserCreateData, UserRepository } from "../user-repositoy";

export class PrismaUserRepository implements UserRepository {
  async create({ name, username, password }: UserCreateData) {
    await prisma.user.create({
      data: {
        name,
        username,
        password,
      },
    });
  }
}
