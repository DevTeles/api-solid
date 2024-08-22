import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const createdUser = await prisma.user.create({
      data,
    })

    return createdUser
  }
}
