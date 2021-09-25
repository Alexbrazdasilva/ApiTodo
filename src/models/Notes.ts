import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({length: 50})
  title!: string

  @Column()
  note!: string

  @Column()
  author!: number
  
  @Column()
  tag?: string
}
