import { Router } from 'express'
import { TaskController } from '../controllers/task.controller'

const router = Router()

router.get('/', new TaskController().list)
router.post('/', new TaskController().create)
router.delete('/:id', new TaskController().finish)

export default router
