import { userRepository } from '../repositories/user.repository'
import { CreateUser } from '../schemas/create-user.schema'
import { ConflictError } from '../utils/api-errors'
import { hashPassword } from './security.service'

export class UserService {
  async create(userRequest: CreateUser) {
    const { username, password, email, avatar } = userRequest
    const user = await userRepository.find({
      where: [{ username }, { email }],
    })

    if (user?.length) {
      throw new ConflictError('User or email already exists')
    }

    const hashedPassword = await hashPassword(password)

    const dbUser = userRepository.create({
      username,
      email,
      password: hashedPassword,
      avatar,
    })

    await userRepository.save(dbUser)

    const { password: _, ...userResponse } = dbUser

    return userResponse
  }
}
