import { Request, Response } from 'express'
import { loginSchema } from '../schemas/login.schema'
import { LoginService } from '../services/login.service'

export class LoginController {
  async login(req: Request, res: Response) {
    const credentials = loginSchema.parse(req.body)
    const authorizedUser = await new LoginService().login(credentials)
    return res.json(authorizedUser)
  }
}
