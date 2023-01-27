import { User } from '../entities/User'
import { userRepository } from '../repositories/user.repository'
import { ConflictError } from '../utils/api-errors'

export class UserService {
  async create(user: User) {
    const databaseUser = await userRepository.find({
      where: [{ username: user.username }, { email: user.email }],
    })

    if (databaseUser?.length) {
      throw new ConflictError('User or email already exists')
    }

    return userRepository.save(user)
  }
}
