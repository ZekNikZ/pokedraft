import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Draft } from "./draft";

@Entity()
export class Invite {
  @PrimaryGeneratedColumn()
  inviteId!: number;

  @ManyToOne(() => Draft)
  @JoinColumn()
  draft!: Draft;
}
