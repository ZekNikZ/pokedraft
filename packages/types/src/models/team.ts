import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Draft } from "./draft";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  teamId!: number;

  @ManyToOne(() => User)
  @JoinColumn()
  owner!: User;

  @ManyToOne(() => Draft)
  @JoinColumn()
  draft!: Draft;

  @Column()
  name!: string;
}
