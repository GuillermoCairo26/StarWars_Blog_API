import {
  Entity, Column, PrimaryGeneratedColumn, 
  BaseEntity, OneToMany
} from 'typeorm';
import { FavPlaneta } from './FavPlaneta';
import { FavPersonaje } from './FavPersonaje';

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  nombre_usuario: string;

  @Column()
  contraseña_usuario: string;

    // Relación de usuario a favoritos
  @OneToMany(() => FavPersonaje, favPersonaje => favPersonaje.user)
  favPersonajes: FavPersonaje[];

  @OneToMany(() => FavPlaneta, favPlaneta => favPlaneta.user)
  favPlanetas: FavPlaneta[];
}