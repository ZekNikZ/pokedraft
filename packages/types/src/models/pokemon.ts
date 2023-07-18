import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  pokemonId!: number;

  @Column()
  nationalDexNumber!: number;

  @Column()
  name!: string;

  @Column()
  avatarUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
