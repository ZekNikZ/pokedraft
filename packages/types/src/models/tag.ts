import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pokemon } from "./pokemon";
import { TagSet } from "./tagset";
import { TagDisplayType } from "./enums";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tagId!: number;

  @Column()
  name!: string;

  @Column()
  hexColor!: number;

  @Column()
  displayType!: TagDisplayType;

  @ManyToOne(() => TagSet, { nullable: false })
  tagset!: TagSet;

  @ManyToMany(() => Pokemon, { nullable: false })
  @JoinTable()
  taggedPokemon!: Pokemon[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
