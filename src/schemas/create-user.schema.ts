import { z } from 'zod'

export const createUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
  avatar: z.string().optional(),
})

export type CreateUser = z.infer<typeof createUserSchema>
