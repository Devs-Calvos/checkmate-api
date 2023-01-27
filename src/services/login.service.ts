import { userRepository } from '../repositories/user.repository'
import { Login } from '../schemas/login.schema'
import { BadRequestError } from '../utils/api-errors'
import { createToken, verifyPassword } from './security.service'

export class LoginService {
  async login(credentials: Login) {
    const { username, password } = credentials
    const user = await userRepository.findOneBy({ username })

    if (!user) {
      throw new BadRequestError('Invalid username or password')
    }

    if (!verifyPassword(password, user.password)) {
      throw new BadRequestError('Invalid username or password')
    }

    const token = await createToken({ id: user.id })

    const { password: _, ...userResponse } = user

    return { user: userResponse, token: token }
  }
}
