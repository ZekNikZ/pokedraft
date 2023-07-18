import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Team } from "./team";
import { Slot } from "./slot";
import { Pokemon } from "./pokemon";

@Entity()
export class DraftPick {
  @PrimaryColumn()
  teamId!: number;

  @ManyToOne(() => Team, { nullable: false })
  @JoinColumn({ name: "teamId" })
  team!: Team;

  @PrimaryColumn()
  slotId!: number;

  @ManyToOne(() => Slot, { nullable: false })
  @JoinColumn({ name: "slotId" })
  slot!: Slot;

  @PrimaryColumn()
  pokemonId!: number;

  @ManyToOne(() => Pokemon, { nullable: false })
  @JoinColumn({ name: "pokemonId" })
  pokemon!: Pokemon;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
