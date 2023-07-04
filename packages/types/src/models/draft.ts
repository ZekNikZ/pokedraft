import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Draft {
  @PrimaryGeneratedColumn()
  id!: number;
}
