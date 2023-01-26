import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './Task'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', unique: true })
  username: string

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'text', unique: true })
  email: string

  @Column({ type: 'text', nullable: true })
  avatar: string

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[]
}
