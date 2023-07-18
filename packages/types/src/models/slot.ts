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
import { League } from "./league";
import { Tag } from "./tag";

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  slotId!: number;

  @Column()
  order!: number;

  @Column("varchar", { nullable: true })
  name!: string | null;

  @ManyToOne(() => League, { nullable: false })
  league!: League;

  @ManyToMany(() => Tag, { nullable: false })
  @JoinTable()
  whilelistTags!: Tag[];

  @ManyToMany(() => Tag, { nullable: false })
  @JoinTable()
  blacklistTags!: Tag[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
