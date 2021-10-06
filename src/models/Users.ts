import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm'
import { Notes } from './index'
import { hashSync } from 'bcryptjs'
@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password: string

  @OneToMany(() => Notes, (notes) => notes.author, {
    cascade: true,
    eager: true,
  })
  notes?: string[]

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  update_at!: Date

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword():void {
    this.password = hashSync(this.password, 8)
  }
}
