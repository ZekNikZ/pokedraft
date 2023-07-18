import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TagSet } from "./tagset";
import { League } from "./league";
import { Team } from "./team";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column()
  name!: string;

  @Column("integer", { nullable: true })
  discordId!: string | null;

  @Column()
  avatarURL!: string;

  @OneToMany(() => TagSet, (tagset) => tagset.owner, { nullable: false })
  ownedLeagues!: League[];

  @OneToMany(() => Team, (team) => team.owner, { nullable: false })
  teams!: Team[];

  @OneToMany(() => TagSet, (tagset) => tagset.owner, { nullable: false })
  tagsets!: TagSet[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
