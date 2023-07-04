import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Draft {
  @PrimaryGeneratedColumn()
  draftId!: number;

  @Column()
  draftName!: string;
}
