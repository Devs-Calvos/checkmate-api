import { Request, Response } from 'express'
import { createTaskSchema } from '../schemas/create-task.schema'
import { idParam } from '../schemas/param.schema'
import { TaskService } from '../services/task.service'

export class TaskController {
  async list(req: Request, res: Response) {
    const tasks = await new TaskService().list()
    return res.json(tasks)
  }

  async create(req: Request, res: Response) {
    const task = createTaskSchema.parse(req.body)
    const newTask = await new TaskService().create(task)
    return res.status(201).json(newTask)
  }

  async finish(req: Request, res: Response) {
    const { id } = req.params
    const validId = idParam.parse(Number(id))

    await new TaskService().finish(validId)
    return res.json({ message: `Task finished` })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const validId = idParam.parse(Number(id))

    await new TaskService().delete(validId)
    return res.json({ message: `Task deleted` })
  }
}
