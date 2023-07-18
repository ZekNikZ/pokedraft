import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TagSet } from "./tagset";
import { Draft } from "./draft";
import { Team } from "./team";
import { User } from "./user";
import { Slot } from "./slot";

@Entity()
export class League {
  @PrimaryGeneratedColumn()
  leagueId!: number;

  @Column()
  name!: string;

  @Column()
  numTeams!: number;

  @ManyToOne(() => User, { nullable: false })
  owner!: User;

  @ManyToMany(() => TagSet, { nullable: false })
  @JoinTable()
  tagsets!: TagSet[];

  @OneToMany(() => Draft, (draft) => draft.league, { nullable: false })
  drafts!: Draft[];

  @OneToMany(() => Team, (team) => team.league, { nullable: false })
  teams!: Team[];

  @OneToMany(() => Slot, (slot) => slot.league, { nullable: false })
  slots!: Slot[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
