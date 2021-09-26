import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Users } from './index'
@Entity()
export class Notes {
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Column({ length: 50 })
  title!: string

  @Column()
  note!: string

  @Column()
  tag?: string

  @ManyToOne(() => Users, (user) => user.notes)
  author!: Users

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  update_at!: Date
}
