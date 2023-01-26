import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './Task'

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', unique: true })
  name: string

  tasks: Task[]
}
