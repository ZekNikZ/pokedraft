import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Draft } from "./draft";

@Entity()
export class Invite {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Draft)
  @JoinColumn()
  draft!: Draft;
}
