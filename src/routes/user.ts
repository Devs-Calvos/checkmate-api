import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const router = Router()

router.post('/', new UserController().create)

export default router