import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findBtEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
