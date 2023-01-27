import { Request, Response } from 'express'
import { createUserSchema } from '../schemas/create-user.schema'
import { UserService } from '../services/user.service'

export class UserController {
  async create(req: Request, res: Response) {
    const user = createUserSchema.parse(req.body)
    const newUser = await new UserService().create(user)
    return res.status(201).json(newUser)
  }
}
