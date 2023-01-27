import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string(),
})

export type CreateTask = z.infer<typeof createTaskSchema>
