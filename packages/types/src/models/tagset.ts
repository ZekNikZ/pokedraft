import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tag } from "./tag";
import { User } from "./user";
import { TagSetType } from "./enums";

@Entity()
export class TagSet {
  @PrimaryGeneratedColumn()
  tagsetId!: number;

  @Column()
  name!: string;

  @Column()
  type!: TagSetType;

  @Column()
  private!: boolean;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  owner!: User;

  @OneToMany(() => Tag, (tag) => tag.tagset, { nullable: false })
  tags!: Tag[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
