import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

router.post('/', new UserController().create)

router.use(authMiddleware)

router.get('/profile', new UserController().getProfile)

export default router
