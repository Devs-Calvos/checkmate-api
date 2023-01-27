import { NextFunction, Request, Response } from 'express'
import { userRepository } from '../repositories/user.repository'
import { verifyToken } from '../services/security.service'
import { UnauthorizedError } from '../utils/api-errors'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new UnauthorizedError('Not authorized')
  }

  const token = authorization.split(' ')[1]
  
  const { id } = await verifyToken(token)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new UnauthorizedError('Not authorized')
  }

  const {password: _, ...authorizedUser} = user

  req.user = authorizedUser

  next()
}
