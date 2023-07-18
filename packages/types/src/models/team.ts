import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";
import { League } from "./league";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  teamId!: number;

  @ManyToOne(() => User, { nullable: false })
  owner!: User;

  @ManyToOne(() => League, { nullable: false })
  league!: League;

  @Column()
  name!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
