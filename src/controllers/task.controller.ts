import { Request, Response } from 'express'
import { createTaskSchema } from '../schemas/create-task.schema'
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

    await new TaskService().finish(Number(id))
    return res.json({ message: `Task ${id} finished` })
  }
}
