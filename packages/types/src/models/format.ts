import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Format {
  @PrimaryGeneratedColumn()
  formatId!: number;

  @ManyToOne(() => User)
  @JoinColumn()
  owner!: User;
}
