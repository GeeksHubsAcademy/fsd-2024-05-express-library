import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity('favourites')
export class Favourite extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number

  @Column({name: "user_id"})
  user_id!: number

  @Column({name: "book_id"})
  book_id!: number

  @ManyToOne(() => User, user => user.favourite_books)
  @JoinColumn({ name: "user_id"} )
  user!: User
}
