import { z } from 'zod'

export const idParam = z.number()

export type IdParam = z.infer<typeof idParam>
