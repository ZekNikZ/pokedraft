import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { League } from "./league";

@Entity()
export class Draft {
  @PrimaryGeneratedColumn()
  draftId!: number;

  @Column()
  name!: string;

  @Column("timestamp")
  timestamp!: Date;

  @Column()
  leagueId!: number;

  @ManyToOne(() => League, { nullable: false })
  @JoinColumn({ name: "leagueId" })
  league!: League;

  @Column()
  practiceMode!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
