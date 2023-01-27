import { userRepository } from '../repositories/user.repository'
import { CreateUser } from '../schemas/create-user.schema'
import { ConflictError } from '../utils/api-errors'

export class UserService {
  async create(user: CreateUser) {
    const databaseUser = await userRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    })

    if (databaseUser?.length) {
      throw new ConflictError('User or email already exists')
    }

    return userRepository.save(user)
  }
}
