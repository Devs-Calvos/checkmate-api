import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @CreateDateColumn()
  created_at: Date

  @Column({ type: 'timestamp', nullable: true })
  finished_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}
