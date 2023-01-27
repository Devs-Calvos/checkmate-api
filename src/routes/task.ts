import { Router } from 'express'
import { TaskController } from '../controllers/task.controller'

const router = Router()

router.get('/', new TaskController().list)
router.post('/', new TaskController().create)
router.patch('/:id/finish', new TaskController().finish)
router.delete('/:id', new TaskController().delete)

export default router
