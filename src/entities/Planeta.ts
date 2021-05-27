import {
  Entity, Column, PrimaryGeneratedColumn, 
  BaseEntity,
  OneToMany
} from 'typeorm';
import { FavPlaneta } from './FavPlaneta';


@Entity()
export class Planeta extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_planeta: string;

  @Column()
  clima: string;

  @Column()
  cantidad_habitantes: string;

  @OneToMany(() => FavPlaneta, favPlaneta => favPlaneta.planeta) 
  favPlanetas: FavPlaneta[];

}