import { taskRepository } from '../repositories/task.repository'
import { CreateTask } from '../schemas/create-task.schema'
import { NotFoundError } from '../utils/api-errors'

export class TaskService {
  async list() {
    return taskRepository.find({
      order: {
        finished_at: 'DESC',
        created_at: 'DESC',
      },
    })
  }

  async create(task: CreateTask) {
    return taskRepository.save(task)
  }

  async finish(id: number) {
    const task = await taskRepository.findOneBy({ id })

    if (!task) {
      throw new NotFoundError('Task not found')
    }

    if (!task.finished_at) {
      task.finished_at = new Date()
    }

    await taskRepository.save(task)
    return task
  }

  async delete(id: number) {
    const task = await taskRepository.findOneBy({ id })

    if (!task) {
      throw new NotFoundError('Task not found')
    }
    task.deleted_at = new Date()

    await taskRepository.save(task)
    return task
  }
}
